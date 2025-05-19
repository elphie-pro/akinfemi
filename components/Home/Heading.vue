<template>
    <div class="w-full block max-w-[80rem] mx-auto px-4 py-6">
         <DecryptedText 
        text="Hi, I'm "
        animate-on="view"
        class-name="text-blue-500 font-bold"
        encrypted-class-name="text-gray-500"
      />
    </div>
</template>

<script setup>
import DecryptedText from '../components/Home/DecryptedText.vue';
</script>

