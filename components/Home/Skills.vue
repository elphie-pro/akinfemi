<template>
    <div class="w-full block lg:max-w-[60rem] md:min-w-[45rem] mx-auto px-4 py-6 text-center overflow-hidden text-[#f4f4f4] lg:mt-[-2rem] mt-[1rem]">
            <div v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, scale: 1 }" :variants="{ custom: { scale: 2 } }" :delay="200" :duration="1200" class="flex gap-4 items-center justify-end md:justify-start" >
                <Motion is="div" preset="slideVisibleLeft" :duration="1600" class="w-[6rem] md:w-[8rem] md:h-[.1rem] h-[.1rem] bg-[#f4f4f4] "></Motion> 
                <Motion is="p" preset="slideVisibleTop" :duration="1400" class="md:text-[2.3rem] text-[1.3rem]">Skills</Motion>
                <Motion is="div" preset="slideVisibleRight" :duration="2000" class="w-[6rem] md:w-[8rem] md:h-[.1rem] h-[.1rem] bg-[#f4f4f4] mt-[rem] "></Motion>
            </div>
        
            <Motion is="div" preset="slideVisibleBottom" :duration="1000" class="grid grid-cols-3 md:grid-cols-5 gap-4 p-4 ml-[3rem]"> 
            <div v-for="sk in Skills.slice(0,10)" :key="sk.name" class="flex flex-col gap-3 text-center">
                <div class="flex flex-col gap-3 justify-center items-center">
                    <div class="md:w-[7rem] md:h-[7rem] w-[5rem] h-[5rem] border border-[#f4f4f4] rounded-xl flex items-center justify-center">
                    <img :src="sk.img" alt="" class="max-w-[50%] max-h-[50%] md:max-w-[70%] md:max-h-[70%] object-contain" /> 
                    </div>
                    <h2 class="">{{ sk.name }}</h2>
                </div> 
            </div> 
            </Motion>
            <div v-motion :initial="{ x: 100, y: 100, opacity: 0 }" :enter="{ x: 0, y: 0, opacity: 1 }" :variants="{ custom: { scale: 2 } }" :delay="300" :duration="2000" class="flex justify-center pt-[1rem]">
                <button :duration="1500" @click="about"  class="w-[13rem] h-[2.5rem] bg-[#f4f4f4] text-[#263238] text-[1rem] rounded-xl cursor-pointer items-center justify-center flex gap-3" >VIEW ALL <img src="../../assets/images/arrow-right.svg" alt=""></button> 
            </div>  
                
            </div>
</template>

<script lang="js" setup>
import { useRouter } from 'vue-router';

const route = useRouter()
const images = import.meta.glob('../../assets/images/*', { eager: true, query: '?url', import: 'default' })

const about = () => {
    route.push('/about')
}

    const Skills = [
        {
            name: 'HTML',
            img: images['../../assets/images/Vector.svg']
        },
        {
            name: 'CSS',
            img: images['../../assets/images/devicon_css3.svg']
        },
        {
            name: 'JavaScript',
            img: images['../../assets/images/devicon_javascript.svg']
        },
        {
            name: 'Tailwind CSS',
            img: images['../../assets/images/devicon_tailwindcss.svg']
        },
        {
            name: 'React.Js',
            img: images['../../assets/images/material-icon-theme_react.svg']
        },
        {
            name: 'Next.Js',
            img: images['../../assets/images/nonicons_next-16.svg']
        },
        {
            name: 'Vue.JS',
            img: images['../../assets/images/logos_vue.svg']
        },
        {
            name: 'Nuxt.JS',
            img: images['../../assets/images/material-icon-theme_nuxt.svg']
        },
        {
            name: 'Figma',
            img: images['../../assets/images/material-icon-theme_figma.svg']
        },
        {
            name: 'Photoshop',
            img: images['../../assets/images/devicon_photoshop.svg']
        },
        {
            name: 'HTML',
            img: images['../../assets/images/Vector.svg']
        },
        {
            name: 'HTML',
            img: images['../../assets/images/Vector.svg']
        },
        {
            name: 'HTML',
            img: images['../../assets/images/Vector.svg']
        },
        {
            name: 'HTML',
            img: images['../../assets/images/Vector.svg']
        },
        {
            name: 'HTML',
            img: images['../../assets/images/Vector.svg']
        },
        {
            name: 'HTML',
            img: images['../../assets/images/Vector.svg']
        },
    ]
</script>

