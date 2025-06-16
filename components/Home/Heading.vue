<template>
    <div class="w-full block xl-max-w-[75rem] lg:max-w-[65rem] md:min-w-[45rem] mx-auto px-4 py-6 text-center overflow-hidden text-[#f4f4f4] md:mt-[3rem] lg:mt-auto">
         <h1>
  <DecryptedText
    text="Hi, I'm Akinfemi"
    animate-on="view"
    class-name="dark:text-[#f4f4f4] text-[#263238] md:text-[3rem] lg:text-[5rem] min-[420px]:text-[1.8rem] text-[1.5rem] font-light text-center leading-tight font-devonshire"
    encrypted-class-name="dark:text-[#f4f4f4] text-[#263238] md:text-[3.5rem] lg:text-[5rem] sm:text-[1rem]"
    highlight-text="Akinfemi"
    highlight-class-name="dark:text-[#f4f4f4] text-[#263238] md:text-[3rem] lg:text-[5rem] min-[420px]:text-[1.8rem] text-[1.5rem] font-semibold text-center leading-tight font-poppins"
    highlight-encrypted-class-name="dark:text-[#f4f4f4] text-[#263238] md:text-[3.5rem] lg:text-[5rem] sm:text-[1rem] font-poppins"
  />
</h1>
     <div class=" flex gap-1 lg:pt-[-2rem] md:pt-[2rem] text-center justify-center lg:text-[1.7rem] md:text-[1.15rem] text-[.6rem] dark:text-[#f4f4f4] text-[#263238]"> 
            <Motion is="p" preset="slideVisibleBottom" :duration="800" class="">Software Engineer ||</Motion> 
            <Motion is="p" preset="slideVisibleBottom" :duration="1000" >Frontend Developer ||</Motion> 
            <Motion is="p" preset="slideVisibleBottom" :duration="1200" >UI/UX Designer ||</Motion> 
            <Motion is="p" preset="slideVisibleBottom" :duration="1400" >Photographer </Motion> 
        </div>
      <motion  is="div" preset="slideVisibleBottom" :duration="1800" class="flex gap-7 md:flex-row pt-[2.5rem] justify-center">
        <motion  is="button" preset="slideVisibleLeft" :duration="2000" class="md:w-[10rem] md:h-[2.5rem] w-[7rem] h-[2.5rem] dark:bg-[#f4f4f4] bg-[#263238] text-[#f4f4f4] dark:text-[#263238] text-[1rem] md:text-[1.2rem] rounded-xl md:rounded-2xl cursor-pointer">Contact Me</motion>
        <motion  is="button"  preset="slideVisibleRight" :duration="2000" class="md:w-[10rem] md:h-[2.5rem] w-[7rem] h-[2.5rem] dark:border-[#f4f4f4] border-[#263238] dark:text-[#f4f4f4] text-[#263238] border text-[1rem] md:text-[1.2rem] rounded-xl md:rounded-2xl cursor-pointer"">My Resume</motion>
      </motion>
    </div>
</template>

<script setup>
import DecryptedText from '../components/DecryptedText.vue';
import { useRouter } from 'vue-router';

const route = useRouter()
</script>