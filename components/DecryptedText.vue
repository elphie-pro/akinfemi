<template>
  <span
    ref="containerRef"
    class="inline-block"
    :class="parentClassName"
    v-motion
    :initial="{ opacity: 1 }"
    v-bind="$attrs"
    @mouseenter="animateOn === 'hover' && startHovering()"
    @mouseleave="animateOn === 'hover' && stopHovering()"
  >
    <span class="sr-only" v-html="escapedDisplayText"></span>

    <span aria-hidden="true" class="whitespace-pre-wrap">
      <template v-for="(line, lineIndex) in processedTextLines" :key="`line-${lineIndex}`">
        <template v-if="lineIndex > 0">
          <br />
        </template>
        <span
          v-for="(char, charIndex) in line.split('')"
          :key="`${lineIndex}-${charIndex}`"
          :class="isRevealedOrDone(getGlobalIndex(lineIndex, charIndex)) ? className : encryptedClassName"
        >
          {{ char }}
        </span>
      </template>
    </span>
  </span>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  speed: {
    type: Number,
    default: 50
  },
  maxIterations: {
    type: Number,
    default: 10
  },
  sequential: {
    type: Boolean,
    default: false
  },
  revealDirection: {
    type: String,
    default: 'start',
    validator: (value) => ['start', 'end', 'center'].includes(value)
  },
  useOriginalCharsOnly: {
    type: Boolean,
    default: false
  },
  characters: {
    type: String,
    default: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+'
  },
  className: {
    type: String,
    default: ''
  },
  parentClassName: {
    type: String,
    default: ''
  },
  encryptedClassName: {
    type: String,
    default: ''
  },
  animateOn: {
    type: String,
    default: 'hover',
    validator: (value) => ['hover', 'view'].includes(value)
  }
})

const rawDisplayText = ref(props.text)

// Process the text to handle different types of line breaks
const processText = (text) => {
  // Replace HTML <br> tags with newlines
  return text.replace(/<br\s*\/?>/gi, '\n')
}

// Apply the processing and split into lines
const processedTextLines = computed(() => {
  const processed = processText(rawDisplayText.value)
  return processed.split('\n')
})

// For screen readers - escape the text to be readable
const escapedDisplayText = computed(() => {
  return rawDisplayText.value.replace(/\n/g, '<br>')
})

const isHovering = ref(false)
const isScrambling = ref(false)
const revealedIndices = ref(new Set())
const hasAnimated = ref(false)
const containerRef = ref(null)
let interval = null
let currentIteration = 0

// Total character count across all lines
const totalCharCount = computed(() => {
  return processedTextLines.value.reduce((sum, line) => sum + line.length, 0)
})

// Map from line and char index to global index
const getGlobalIndex = (lineIndex, charIndex) => {
  let globalIndex = charIndex
  for (let i = 0; i < lineIndex; i++) {
    globalIndex += processedTextLines.value[i].length
  }
  return globalIndex
}

// Map from global index to line and char index
const getLineAndCharIndex = (globalIndex) => {
  let remainingChars = globalIndex
  for (let lineIndex = 0; lineIndex < processedTextLines.value.length; lineIndex++) {
    const lineLength = processedTextLines.value[lineIndex].length
    if (remainingChars < lineLength) {
      return { lineIndex, charIndex: remainingChars }
    }
    remainingChars -= lineLength
  }
  return { lineIndex: processedTextLines.value.length - 1, charIndex: processedTextLines.value[processedTextLines.value.length - 1].length - 1 }
}

const availableChars = computed(() => {
  if (props.useOriginalCharsOnly) {
    return Array.from(new Set(props.text.split(''))).filter(char => char !== ' ')
  }
  return props.characters.split('')
})

const isRevealedOrDone = (globalIndex) => {
  return revealedIndices.value.has(globalIndex) || !isScrambling.value || !isHovering.value
}

const getNextIndex = (revealedSet) => {
  const textLength = totalCharCount.value
  switch (props.revealDirection) {
    case 'start':
      return revealedSet.size
    case 'end':
      return textLength - 1 - revealedSet.size
    case 'center': {
      const middle = Math.floor(textLength / 2)
      const offset = Math.floor(revealedSet.size / 2)
      const nextIndex =
        revealedSet.size % 2 === 0
          ? middle + offset
          : middle - offset - 1

      if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) {
        return nextIndex
      }
      for (let i = 0; i < textLength; i++) {
        if (!revealedSet.has(i)) return i
      }
      return 0
    }
    default:
      return revealedSet.size
  }
}

const shuffleText = () => {
  const newLines = []
  
  for (let lineIndex = 0; lineIndex < processedTextLines.value.length; lineIndex++) {
    const line = processedTextLines.value[lineIndex]
    const shuffledLine = line
      .split('')
      .map((char, charIndex) => {
        const globalIndex = getGlobalIndex(lineIndex, charIndex)
        if (char === ' ') return ' '
        if (revealedIndices.value.has(globalIndex)) return char
        return availableChars.value[Math.floor(Math.random() * availableChars.value.length)]
      })
      .join('')
    
    newLines.push(shuffledLine)
  }
  
  // When updating rawDisplayText, preserve the original break format
  const processed = processText(props.text)
  const originalBreakFormat = props.text.includes('<br') ? '<br>' : '\n'
  rawDisplayText.value = newLines.join(originalBreakFormat)
}

const startScrambling = () => {
  isScrambling.value = true
  
  interval = setInterval(() => {
    if (props.sequential) {
      if (revealedIndices.value.size < totalCharCount.value) {
        const nextGlobalIndex = getNextIndex(revealedIndices.value)
        const newRevealed = new Set(revealedIndices.value)
        newRevealed.add(nextGlobalIndex)
        revealedIndices.value = newRevealed
        shuffleText()
      } else {
        clearInterval(interval)
        isScrambling.value = false
      }
    } else {
      shuffleText()
      currentIteration++
      if (currentIteration >= props.maxIterations) {
        clearInterval(interval)
        isScrambling.value = false
        rawDisplayText.value = props.text
      }
    }
  }, props.speed)
}

const startHovering = () => {
  isHovering.value = true
}

const stopHovering = () => {
  isHovering.value = false
  rawDisplayText.value = props.text
  revealedIndices.value = new Set()
  isScrambling.value = false
  if (interval) {
    clearInterval(interval)
  }
}

watch(isHovering, (newValue) => {
  if (newValue) {
    currentIteration = 0
    startScrambling()
  } else {
    stopHovering()
  }
})

// Set up intersection observer for view-triggered animation
onMounted(() => {
  if (props.animateOn === 'view') {
    const observer = useIntersectionObserver(containerRef, ([{ isIntersecting }]) => {
      if (isIntersecting && !hasAnimated.value) {
        isHovering.value = true
        hasAnimated.value = true
      }
    }, { threshold: 0.1 })
  }
})

// Clean up on component unmount
onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
})

// Update displayText when text prop changes
watch(() => props.text, (newText) => {
  rawDisplayText.value = newText
})
</script>