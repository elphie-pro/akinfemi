<template>
    <div class="w-full max-w-6xl m-auto px-4 py-6  overflow-x-hidden text-[#f4f4f4]  ">
        <h2 class="text-center text-[3rem] font-devonshire dark:text-[#f4f4f4] text-[#263238]">My Recent Projects</h2>
        <div class="grid-cols-2 flex flex-wrap items-center justify-center xl:grid mx-9 gap-x-[5rem] lg:gap-x-[9rem] md:gap-x-[5rem] md:ml-[-.05rem] ml-[3rem] ">
             <div v-for="pj in projects" :key="pj.name" class="lg:ml-[3.5rem]">
                <SpotlightCard  class="my-4 p-[.5rem] md:p-0 md:px-[2rem] md:py-[1rem] sm:w-96 w-[80vw] md:h-[30rem] text-white dark:border-white border-[#263238] dark:border-8  dark:conic-dark conic-light" spotlightColor="rgba(200, 200, 255, .8)" @click = "openModal(pj)">
            <div class="flex flex-col gap-2 py-2 md:py-0">
                <img :src="pj.img" class="w-full"/>
                <h1 class="font-custom md:text-[2rem] text-[1.5rem] dark:text-[#f4f4f4] text-[#263238] font-black">{{ pj.title }}</h1>
                <div class="flex gap-5 items-center">
                <h2 class="dark:text-[#f4f4f4] font-semibold text-[1rem] text-[#263238]">Stack:</h2>
                        <p class="text-[.8rem] font-semibold w-[16rem] dark:text-[#f4f4f4] text-[#263238]">{{ pj.stack }}</p>
                </div>
                <div class="flex gap-2 ml-[4rem]">
                            <div v-for="sk in pj.stackImages" :key="sk.name" class="flex  text-center">
                            <div class="flex  justify-center items-center">
                                <div class="w-[2.5rem] h-[2.5rem] border dark:border-[#f4f4f4] border-[#263238] rounded-4xl p-[rem] flex items-center justify-center">
                                <img :src="sk.source" alt="" class="max-w-[60%] max-h-[60%] md:max-w-[60%] md:max-h-[60%] object-contain" /> 
                                </div>
                            </div> 
                        </div>
                        </div>
                <div class="flex md:gap-3 gap-2 items-center">
                <h2 class="dark:text-[#f4f4f4] font-semibold text-[#263238]">Description:</h2>
                <p class="text-[.7rem] w-[16rem] font-semibold dark:text-[#f4f4f4] text-[#263238]">{{ pj.descript }}</p>
                </div>
                <div class="flex justify-between">
                    <NuxtLink :to="pj.site" @click.stop :class="pj.site === '' ? 'flex items-center gap-2 text-[#b1afaf] line-through' : 'flex items-center gap-2 text-[#b1afaf]'">View Live Site <img src="../assets/images/send-sqaure-2.svg" alt="" class="w-[1.5rem]"></NuxtLink>
                    <NuxtLink :to="pj.code" @click.stop class="flex items-center gap-2 text-[#b1afaf]">View Code <img src="../assets/images/mdi_github grey.svg" alt="" class="w-[1.5rem]"></NuxtLink>
                </div> 
            </div>
            </SpotlightCard>
                <div v-if="show" class="fixed bg-black/10 min-h-screen z-10 w-screen hidden md:flex justify-center items-center top-0 left-0 text-white " @click="show = false">
                    <div class="bg-[#263238]/40 md:h-[50rem] ml-[-1rem] h-[35rem] w-[20rem] md:w-[40rem] lg:w-[75rem] md:p-8 p-2 md:px-10 lg::px-18 flex flex-col  justify-between" @click.stop>
                            <img :src="selectedProject.img" class="w-full"/>
                            <div class="flex flex-col md:flex-row md:gap-[5rem] pt-3">
                                            <div class="flex flex-col gap-5 ">
                                        <div class="flex gap-4 items-center">
                                            <h2 class="text-[.9rem]">Project Title:</h2>
                                            <h2 class="text-[1.3rem]">{{ selectedProject.title }}</h2>
                                        </div>
                                        <div>
                                                <h2 class="text-[1.3rem]">Tech Stack: </h2>
                                                <div class="grid grid-cols-2 gap-4 p-2">
                                                <div v-for="sk in selectedProject.stackImages" :key="sk.name" class="flex flex-col gap-3 text-center">
                                                        <div class="flex flex-col gap- justify-center items-center">
                                                            <div class="w-[3rem] h-[3rem] border border-[#f4f4f4] rounded-xl flex items-center justify-center">
                                                            <img :src="sk.source" alt="" class="max-w-[70%] max-h-[70%] object-contain" /> 
                                                            </div>
                                                            <h2 class="">{{ sk.name }}</h2>   
                                                        </div> 
                                                    </div>  
                                                </div>
                                                
                                            </div> 
                                    </div>
                                    <div class="flex flex-col gap-3">
                                        <h3 class="text-[1.3rem] underline">Description:</h3>
                                        <h2 class="text-[.8rem]"> {{ selectedProject.description }} </h2>
                                    </div>
                                    
                                </div>
                            </div>
                        
                </div>
        </div>
        </div>
    </div>
</template>

<script setup>
import { NuxtImg, Title } from '#components';
import Projects from '~/pages/projects.vue';

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
        descript: 'Built the portfolio website youre looking at with Nuxt.js and Tailwind.',
        site:'https://akinfemi.vercel.app/',
        code: 'https://github.com/elphie-pro/akinfemi',
        stackImages: [
            {
                source:  images['../assets/images/logos_vue.svg']
            },
            {
                source:  images['../assets/images/material-icon-theme_nuxt.svg']
            },
            {
                source: images['../assets/images/devicon_tailwindcss.svg']
            },
            {
                source: images['../assets/images/framer 1.svg']
            }
        ]
    },
    {
        title: 'ElphBank',
        img: images['../assets/images/Screenshot 2025-05-15 195231.png'],
        stack: 'Next.JS, JavaScript, Tailwind CSS, Firebase Auth, Firestore, Framer Motion',
        descript: 'A makeshift banking site with minimal functionalities',
        site:'',
        code: 'https://github.com/elphie-pro/ElphBank',
         stackImages: [
            {
                source:  images['../assets/images/nonicons_next-16 white.svg']
            },
            {
                source:  images['../assets/images/Group 222.svg']
            },
            {
                source: images['../assets/images/devicon_tailwindcss.svg']
            },
            {
                source: images['../assets/images/devicon_firebase.svg']
            },
            {
                source: images['../assets/images/framer 1.svg']
            },
        ]
    },
    {
        title: 'ElphBlog V1',
        img: images['../assets/images/Screenshot 2025-05-15 102407.png'],
        stack: 'React.JS, JavaScript, CSS, Firebase Auth, Firestore',
        descript: 'ElphBlog is a blogging website that allows',
        site:'https://elph-blog.vercel.app/',
        code: 'https://github.com/elphie-pro/ElphBlog',
        stackImages: [
            {
                source:  images['../assets/images/nonicons_next-16 white.svg']
            },
            {
                source:  images['../assets/images/Group 222.svg']
            },
            {
                source: images['../assets/images/devicon_tailwindcss.svg']
            },
            {
                source: images['../assets/images/devicon_firebase.svg']
            },
            {
                source: images['../assets/images/framer 1.svg']
            },
        ]
    },
    {
        title: 'Pay4Me UI',
        img: images['../assets/images/Screenshot 2025-05-26 194523.png'],
        stack: 'Next.JS, JavaScript, Tailwind CSS, Firebase Auth, Firestore, Framer Motion',
        descript: 'ElphBank is a makeshift banking site',
        site:'',
        code: 'https://github.com/elphie-pro/Pay4Me-UI'
    },
    {
        title: 'Currency Converter',
        img: images['../assets/images/Screenshot 2025-05-26 194158.png'],
        stack: 'Next.JS, JavaScript, Tailwind CSS, Firebase Auth, Firestore, Framer Motion',
        descript: 'ElphBank is a makeshift banking site',
        site:'https://currency-converter-olive-xi.vercel.app/',
        code: 'https://github.com/elphie-pro/Currency-Converter'
    },
    {
        title: 'Weather App',
        img: images['../assets/images/Screenshot 2025-05-26 193925.png'],
        stack: 'Next.JS, JavaScript, Tailwind CSS, Firebase Auth, Firestore, Framer Motion',
        descript: 'ElphBank is a makeshift banking site',
        site:'https://weather-app-eight-chi-89.vercel.app/',
        code: 'https://github.com/elphie-pro/Todo-App'
    },
    {
        title: 'Todo App V1',
        img: images['../assets/images/Screenshot 2025-05-26 193850.png'],
        stack: 'Next.JS, JavaScript, Tailwind CSS, Firebase Auth, Firestore, Framer Motion',
        descript: 'ElphBank is a makeshift banking site',
        site:'https://todo-app-tan-pi.vercel.app/',
        code: 'https://github.com/elphie-pro/Todo-App'
    }
]

</script>
