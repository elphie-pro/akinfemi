<template>
    <div class="w-full block max-w-[90rem] mx-auto px-4 py-6  overflow-x-hidden text-[#f4f4f4]  ">
        <h2 class="text-center text-[2.5rem]" style="font-family: 'Cakecafe';">My Recent Projects</h2>
        <div class="grid grid-cols-3">
             <div v-for="pj in projects" :key="pj.name">
                <SpotlightCard  class="my-4 w-[28rem] h-[30rem] text-white border-white border-8 " style="background: conic-gradient(from 210deg, #367898 0deg, #3B8DB7 160deg, #2e4f5f 30deg, #29353B 360deg);" spotlightColor="rgba(200, 200, 255, .8)" @click = "openModal(pj)">
            <div class="flex flex-col gap-4">
                <img :src="pj.img" class="w-full"/>
                <h1 class="font-custom text-[2rem] text-[#f4f4f4] font-black">{{ pj.title }}</h1>
                <div class="flex justify-between items-center">
                <h2>Tech Stack:</h2>
                <p class="text-[.8rem] w-[16rem]">{{ pj.stack }}</p>
                </div>
                <div class="flex justify-between items-center">
                <h2>Description:</h2>
                <p class="text-[.8rem] w-[16rem]">{{ pj.descript }}</p>
                </div>
                <div class="flex justify-between">
                    <NuxtLink :to="pj.site" @click.stop :class="pj.site === '' ? 'flex items-center gap-2 text-[#b1afaf] line-through' : 'flex items-center gap-2 text-[#b1afaf]'">View Live Site <img src="../assets/images/send-sqaure-2.svg" alt="" class="w-[1.5rem]"></NuxtLink>
                    <NuxtLink :to="pj.code" @click.stop class="flex items-center gap-2 text-[#b1afaf]">View Code <img src="../assets/images/mdi_github grey.svg" alt="" class="w-[1.5rem]"></NuxtLink>
                </div> 
            </div>
            </SpotlightCard>
                <div v-if="show" class="fixed bg-black/10 min-h-screen z-10 w-screen flex justify-center items-center top-0 left-0 text-white" @click="show = false">
                    <div class="bg-[#263238]/40 w-[89rem] h-auto ml-[-1rem] p-8" @click.stop>
                         <h2>{{ selectedProject.stackImages[0] }}</h2>
                         <h2>{{ selectedProject.title }}</h2>
                    </div>
                </div>
        </div>
        </div>
    </div>
</template>

<script setup>
import { NuxtImg, Title } from '#components';

const show = ref(false)
const selectedProject = ref(null)
const images = import.meta.glob('../assets/images/*', { eager: true, query: '?url', import: 'default' })

const openModal = (projects) => {
    selectedProject.value = projects
    show.value = true
}

const projects = [
    {
        title: 'Akinfemi V1',
        img: images['../assets/images/Screenshot 2025-05-26 190840.png'],
        stack: 'Nuxt.JS, JavaScript, Tailwind CSS, Vueuse Motion',
        descript: 'Akinfemi V1 is a portfolio website... Read more',
        site:'',
        code: 'https://github.com/elphie-pro/akinfemi',
        stackImages: [
            {
                name: 'yams dawg',
                age:'14'
            }
        ]
    },
    {
        title: 'ElphBank',
        img: images['../assets/images/Screenshot 2025-05-15 195231.png'],
        stack: 'Next.JS, JavaScript, Tailwind CSS, Firebase Auth, Firestore, Framer Motion',
        descript: 'ElphBank is a makeshift banking site... Read more',
        site:'',
        code: 'https://github.com/elphie-pro/ElphBank',
         stackImages: [
            {
                name: 'yams dawg'
            }
        ]
    },
    {
        title: 'ElphBlog V1',
        img: images['../assets/images/Screenshot 2025-05-15 102407.png'],
        stack: 'React.JS, JavaScript, CSS, Firebase Auth, Firestore',
        descript: 'ElphBlog is a blogging website that allows... Read more',
        site:'https://elph-blog.vercel.app/',
        code: 'https://github.com/elphie-pro/ElphBlog'
    },
    {
        title: 'Pay4Me UI',
        img: images['../assets/images/Screenshot 2025-05-26 194523.png'],
        stack: 'Next.JS, JavaScript, Tailwind CSS, Firebase Auth, Firestore, Framer Motion',
        descript: 'ElphBank is a makeshift banking site... Read more',
        site:'',
        code: 'https://github.com/elphie-pro/Pay4Me-UI'
    },
    {
        title: 'Currency Converter',
        img: images['../assets/images/Screenshot 2025-05-26 194158.png'],
        stack: 'Next.JS, JavaScript, Tailwind CSS, Firebase Auth, Firestore, Framer Motion',
        descript: 'ElphBank is a makeshift banking site... Read more',
        site:'https://currency-converter-olive-xi.vercel.app/',
        code: 'https://github.com/elphie-pro/Currency-Converter'
    },
    {
        title: 'Weather App',
        img: images['../assets/images/Screenshot 2025-05-26 193925.png'],
        stack: 'Next.JS, JavaScript, Tailwind CSS, Firebase Auth, Firestore, Framer Motion',
        descript: 'ElphBank is a makeshift banking site... Read more',
        site:'https://weather-app-eight-chi-89.vercel.app/',
        code: 'https://github.com/elphie-pro/Todo-App'
    },
    {
        title: 'Todo App V1',
        img: images['../assets/images/Screenshot 2025-05-26 193850.png'],
        stack: 'Next.JS, JavaScript, Tailwind CSS, Firebase Auth, Firestore, Framer Motion',
        descript: 'ElphBank is a makeshift banking site... Read more',
        site:'https://todo-app-tan-pi.vercel.app/',
        code: 'https://github.com/elphie-pro/Todo-App'
    }
]

</script>
