<template>
    <div class="w-full block lg:max-w-[80rem] md:max-w-[45rem] mx-auto px-4 py-6 text-center overflow-hidden text-[#f4f4f4] md:mt-[3rem] lg:mt-auto">
         <h1>
      <DecryptedText
        text="Hi, I'm Onadeko Akinfemi Raphael"
        animate-on="view"
        class-name="text-[#f4f4f4] md:text-[3.5rem] lg:text-[5rem] sm:text-[1rem] text-[1.8rem] font-bold text-center"
        encrypted-class-name="text-[#f4f4f4] md:text-[3.5rem] lg:text-[5rem] sm:text-[1rem]"
        style="font-family: 'Cakecafe';"
      />
    </h1>
     <div class=" flex gap-3 lg:pt-[-2rem] md:pt-[2rem] text-center justify-center lg:text-[1.64rem] md:text-[1.15rem] text-[.6rem]"> 
            <Motion is="p" preset="slideVisibleBottom" :duration="800" class="">Software Engineer ||</Motion> 
            <Motion is="p" preset="slideVisibleBottom" :duration="1000" >Frontend Developer ||</Motion> 
            <Motion is="p" preset="slideVisibleBottom" :duration="1200" >UI/UX Designer ||</Motion> 
            <Motion is="p" preset="slideVisibleBottom" :duration="1400" >Photographer </Motion> 
        </div>
      <motion  is="div" preset="slideVisibleBottom" :duration="1800" class="flex gap-7 md:flex-row pt-[2.5rem] justify-center">
        <motion  is="button" preset="slideVisibleLeft" :duration="2000" class="md:w-[10rem] md:h-[2.5rem] w-[7rem] h-[2.5rem] bg-[#f4f4f4] text-[#263238] text-[1rem] md:text-[1.2rem] rounded-xl md:rounded-2xl cursor-pointer">Contact Me</motion>
        <motion  is="button" preset="slideVisibleRight" :duration="2000" class="md:w-[10rem] md:h-[2.5rem] w-[7rem] h-[2.5rem] border-[#f4f4f4] text-[#f4f4f4] border text-[1rem] md:text-[1.2rem] rounded-xl md:rounded-2xl cursor-pointer">My Resume</motion>
      </motion>
    </div>
</template>

<script setup>
import DecryptedText from '../components/DecryptedText.vue';
</script>

