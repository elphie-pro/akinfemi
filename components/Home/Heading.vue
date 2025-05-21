<template>
    <div class="w-full block max-w-[80rem] mx-auto px-4 py-6 text-center overflow-hidden text-[#f4f4f4]">
         <h1>
      <DecryptedText
        text="Hi, I'm Onadeko Akinfemi Raphael"
        animate-on="view"
        class-name="text-[#f4f4f4] md:text-[3.5rem] lg:text-[5rem] sm:text-[1rem] text-[1.8rem] font-bold text-center"
        encrypted-class-name="text-[#f4f4f4] md:text-[3.5rem] lg:text-[5rem] sm:text-[1rem]"
        style="font-family: 'Cakecafe';"
      />
    </h1>
     <div class=" flex gap-3  pl-[9rem] text-[1.64rem]"> 
            <Motion is="p" preset="slideVisibleBottom" :duration="800" class="">Software Engineer ||</Motion> 
            <Motion is="p" preset="slideVisibleBottom" :duration="1000" >Frontend Developer ||</Motion> 
            <Motion is="p" preset="slideVisibleBottom" :duration="1200" >UI/UX Designer ||</Motion> 
            <Motion is="p" preset="slideVisibleBottom" :duration="1400" >Photographer </Motion> 
        </div>
    </div>
</template>

<script setup>
import DecryptedText from '../components/DecryptedText.vue';
</script>

