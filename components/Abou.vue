<template>
    <head>
        <title>Akinfemi || About</title>
    </head>
    <div class="w-full block max-w-[80rem] mx-auto px-4 py-6  overflow-x-hidden text-[#f4f4f4]  ">
        <h2 class="text-center text-[3.5rem]" style="font-family: 'Cakecafe';">Who is Akinfemi?</h2>

        <div class="flex justify-between pt-[1rem]">
            <div class="justify-center items-center w-[35rem] pt-[9rem]">
                <h1 class="text-center text-[3.5rem]" style="font-family: 'Cakecafe';">“The only way to do great work to to love what you do”</h1>
            </div>
            <div class="text-[1.2rem] flex flex-col gap-5 text-center">
                <h2> Onadeko Akinfemi is a self-taught and highly motivated <br> software engineer with solid experience in frontend <br> development of systems that scale to a lot of users.</h2>
                <h2>My coding journey began in the 8th grade in high school <br> when many of my schoolmates were making websites for <br> fun, which caught my attention. Unlike others, I didn't <br> eventually drop web development; instead, it continuously <br> piqued my interest and made me want to dive deeper into <br> the world of tech. My career as a developer started <br> officially in the 9th grade when I could confidently build <br> different websites by myself and i eventually started <br> working with JavaScript.</h2>
                <h2>Today, with expertise in Frontend development and UI/ <br>UX design, combined with resilience and determination, <br> along with skills in various technologies like React.js, <br> Vue.js, Figma, and more, I've had the opportunity to <br> collaborate with great minds to engineer solutions to <br> problems.</h2>
                <h2>I'm always excited to take on challenging problems head- <br> on, using the tools in my arsenal to positively impact  the <br> world with ones and zeros.</h2>
            </div>
        </div>
        <div class="w-full block lg:max-w-[80rem] md:max-w-[45rem] mx-auto px-4 py-6 text-center overflow-hidden text-[#f4f4f4] lg:mt-[-2rem] mt-[1rem]">
            <div v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, scale: 1 }" :variants="{ custom: { scale: 2 } }" :delay="200" :duration="1200" class="flex gap-4 items-center justify-end md:justify-start" >
                <Motion is="div" preset="slideVisibleLeft" :duration="1600" class="w-[6rem] md:w-[8rem] md:h-[.1rem] h-[.1rem] bg-[#f4f4f4] "></Motion> 
                <Motion is="p" preset="slideVisibleTop" :duration="1400" class="md:text-[2.3rem] text-[1.3rem]">Skills</Motion>
                <Motion is="div" preset="slideVisibleRight" :duration="2000" class="w-[6rem] md:w-[8rem] md:h-[.1rem] h-[.1rem] bg-[#f4f4f4] mt-[rem] "></Motion>
            </div>
        
            <Motion is="div" preset="slideVisibleBottom" :duration="1000" class="grid grid-cols-3 md:grid-cols-5 gap-4 p-4 "> 
            <div v-for="sk in Skills" :key="sk.name" class="flex flex-col gap-3 text-center">
                <div class="flex flex-col gap-3 justify-center items-center">
                    <div class="md:w-[7rem] md:h-[7rem] w-[5rem] h-[5rem] border border-[#f4f4f4] rounded-xl flex items-center justify-center">
                    <img :src="sk.img" alt="" class="max-w-[50%] max-h-[50%] md:max-w-[70%] md:max-h-[70%] object-contain" /> 
                    </div>
                    <h2 class="">{{ sk.name }}</h2>   
                </div> 
            </div> 
            </Motion>
                
            </div>
    </div>
</template>

<script setup lang="js">
import { useRouter } from 'vue-router';

const route = useRouter()
const images = import.meta.glob('../assets/images/*', { eager: true, query: '?url', import: 'default' })

const about = () => {
    route.push('/about')
}

    const Skills = [
        {
            name: 'HTML',
            img: images['../assets/images/Vector.svg']
        },
        {
            name: 'CSS',
            img: images['../assets/images/devicon_css3.svg']
        },
        {
            name: 'JavaScript',
            img: images['../assets/images/devicon_javascript.svg']
        },
        {
            name: 'Tailwind CSS',
            img: images['../assets/images/devicon_tailwindcss.svg']
        },
        {
            name: 'React.Js',
            img: images['../assets/images/material-icon-theme_react.svg']
        },
        {
            name: 'Next.Js',
            img: images['../assets/images/nonicons_next-16.svg']
        },
        {
            name: 'Vue.JS',
            img: images['../assets/images/logos_vue.svg']
        },
        {
            name: 'Nuxt.JS',
            img: images['../assets/images/material-icon-theme_nuxt.svg']
        },
        {
            name: 'Figma',
            img: images['../assets/images/material-icon-theme_figma.svg']
        },
        {
            name: 'Photoshop',
            img: images['../assets/images/devicon_photoshop.svg']
        },
        {
            name: 'Firebase',
            img: images['../assets/images/devicon_firebase.svg']
        },
        {
            name: 'NPM',
            img: images['../assets/images/logos_npm-icon.svg']
        },
        {
            name: 'Vercel',
            img: images['../assets/images/skill-icons_vercel-dark.svg']
        },
        {
            name: 'Vite',
            img: images['../assets/images/vscode-icons_file-type-vite.svg']
        },
        {
            name: 'Git',
            img: images['../assets/images/devicon_git.svg']
        },
        {
            name: 'Framer Motion',
            img: images['../assets/images/framer 1.svg']
        },
    ]

</script>

