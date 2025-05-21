<template>
    <div class="w-full block max-w-[80rem] mx-auto px-4 py-6 text-center overflow-hidden text-[#f4f4f4]">
        <div class="flex  gap-4 items-center">
                <div class="w-[8rem] md:h-[.1rem] h-[4rem] bg-[#f4f4f4] "></div>
                <h2 class="text-[2.3rem]">Skills</h2>
                <div class="w-[8rem] md:h-[.1rem] h-[4rem] bg-[#f4f4f4] mt-[rem] "></div>
            </div>
            <div class="grid grid-cols-5 gap-4 p-4 ">
            <div v-for="sk in Skills.slice(0,10)" :key="sk.name" class="flex flex-col gap-3 text-center">
                <div class="flex flex-col gap-3 justify-center items-center">
                    <div class="w-[7rem] h-[7rem] border border-[#f4f4f4] rounded-xl flex items-center justify-center">
                    <img :src="sk.img" alt="" class="max-w-[70%] max-h-[70%] object-contain" />
                    </div>
                    <h2 class="">{{ sk.name }}</h2>   
                </div>
                
            </div> 
            </div>

                
                
            </div>
</template>

<script lang="js" setup>
const images = import.meta.glob('../../assets/images/*', { eager: true, as: 'url' })

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
            img: images['../../assets/images/Vector.svg']
        },
        {
            name: 'Vue.JS',
            img: images['../../assets/images/Vector.svg']
        },
        {
            name: 'Nuxt.JS',
            img: images['../../assets/images/Vector.svg']
        },
        {
            name: 'Figma',
            img: images['../../assets/images/Vector.svg']
        },
        {
            name: 'Photoshop',
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

