<template>
    <div class="w-full block max-w-[90rem] mx-auto px-4 py-6  overflow-hidden text-[#f4f4f4]  ">
        <h2 class="text-center text-[2.5rem]" style="font-family: 'Cakecafe';">My Recent Projects</h2>
        <div v-for="project in projects" :key="project.name">
                <SpotlightCard  class="my-4 w-[28rem] h-[30rem] text-white border-white border-8 " style="background: conic-gradient(from 210deg, #367898 0deg, #3B8DB7 160deg, #2e4f5f 30deg, #29353B 360deg);" spotlightColor="rgba(200, 200, 255, .8)" @click = "show = true">
            <div class="flex flex-col gap-5">
                <img :src="project.img" class="w-full"/>
                <h1 class="font-custom text-[2rem] text-[#f4f4f4]">{{ project.title }}</h1>
                <div class="flex justify-between items-center">
                <h2>Tech Stack:</h2>
                <p class="text-[.8rem] w-[16rem]">{{ project.stack }}</p>
                </div>
                <div class="flex justify-between items-center">
                <h2>Description:</h2>
                <p class="text-[.8rem] w-[16rem]">{{ project.descript }}</p>
                </div>
                <div class="flex justify-between">
                    <NuxtLink :to="project.site" @click.stop class="flex items-center gap-2 text-[#b1afaf]">View Live Site <img src="../assets/images/send-sqaure-2.svg" alt="" class="w-[1.5rem]"></NuxtLink>
                    <NuxtLink :to="project.code" @click.stop class="flex items-center gap-2 text-[#b1afaf]">View Code <img src="../assets/images/mdi_github grey.svg" alt="" class="w-[1.5rem]"></NuxtLink>
                </div> 
            </div>
            </SpotlightCard>
                <div v-if="show" class="fixed bg-black/50 min-h-screen z-10 w-screen flex justify-center items-center top-0 left-0 text-white" @click="show = false">
                    <p>2 fished</p>
                </div>
        </div>
    </div>
</template>

<script setup>
import { NuxtImg, Title } from '#components';

const show = ref(false)
const images = import.meta.glob('../assets/images/*', { eager: true, query: '?url', import: 'default' })



const projects = [
    {
        title: 'ElphBlog',
        img: images['../assets/images/Screenshot 2025-05-15 102407.png'],
        stack: 'Next.JS, JavaScript, Tailwind CSS, Firebase Auth, Firestore, Framer Motion',
        descript: 'ElphBank is a makeshift banking site... Read more',
        site:'https://elph-blog.vercel.app/',
        code: 'https://github.com/elphie-pro/ElphBlog'
    }
]

</script>
