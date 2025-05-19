<template>
    <div class="w-full block max-w-[80rem] mx-auto px-4 py-6 text-center">
         <<h1>
      <DecryptedText
        text="Hi, I'm Onadeko Akinfemi Raphael\n"
        animate-on="view"
        class-name="text-[#f4f4f4] text-[4.5rem] font-bold text-center"
        encrypted-class-name="text-gray-500"
        style="font-family: 'Cakecafe';"
      />
    </h1>
    </div>
</template>

<script setup>
import DecryptedText from '../components/DecryptedText.vue';
</script>

