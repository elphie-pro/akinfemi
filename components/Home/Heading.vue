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
     <div class=" flex gap-3 pt-[2rem]  pl-[9rem] text-[1.64rem]"> 
            <Motion is="p" preset="slideVisibleBottom" :duration="800" class="">Software Engineer ||</Motion> 
            <Motion is="p" preset="slideVisibleBottom" :duration="1000" >Frontend Developer ||</Motion> 
            <Motion is="p" preset="slideVisibleBottom" :duration="1200" >UI/UX Designer ||</Motion> 
            <Motion is="p" preset="slideVisibleBottom" :duration="1400" >Photographer </Motion> 
        </div>
      <div class="flex flex-col gap-7 md:flex-row pt-[2.5rem] lg:pl-[28rem]">
        <button class="w-[10rem] h-[2.5rem] bg-[#f4f4f4] text-[#263238] text-[1.2rem] rounded-2xl">Contact Me</button>
        <button class="w-[10rem] h-[2.5rem] border-[#f4f4f4] text-[#f4f4f4] border text-[1.2rem] rounded-2xl">My Resume</button>
      </div>
    </div>
</template>

<script setup>
import DecryptedText from '../components/DecryptedText.vue';
</script>

