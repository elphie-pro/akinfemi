<template>
    <div class="w-full block max-w-[65rem] mx-auto px-4 py-6  overflow-x-hidden dark:text-[#f4f4f4] text-[#263238] ">
        <h2 class="text-center text-[3.5rem] font-devonshire">Who is Onadeko Akinfemi?</h2>

        <div class="flex flex-col md:flex-row justify-between pt-[1rem] pb-[3rem]">
            <div class="justify-center items-center md:w-[35rem] md:pt-[9rem]">
                <h1 class="text-center text-[4.5rem] font-devonshire hidden md:block lg:block">“The only way to do great work is to love what you do”</h1>
                <div class="hidden md:block lg:block">
                  <div class="flex  items-center gap-3 ml-[13rem]">
                    <div class="w-[5rem] md:h-[.1rem] h-[.1rem] dark:bg-[#fff] bg-[#263238] "></div>
                <p class="font-devonshire text-[2rem]">Steve Jobs</p>
                <div class="w-[5rem] md:h-[.1rem] h-[.1rem] dark:bg-[#fff] bg-[#263238] "></div>
                </div>  
                </div>
                
                
            </div>
            <div class="text-[1.2rem] flex flex-col gap-3 mt-[3.5rem] text-center md:w-[30rem]">
                <!-- <h2> Onadeko Akinfemi is a self-taught and highly motivated software engineer with solid experience in frontend development of systems that scale to a lot of users.</h2>
                <h2>My coding journey began in the 8th grade in high school when many of my schoolmates were making websites for fun, which caught my attention. Unlike others, I didn't eventually drop web development; instead, it continuously piqued my interest and made me want to dive deeper into the world of tech. My career as a developer started officially in the 9th grade when I could confidently build different websites by myself and i eventually started working with JavaScript.</h2>
                <h2>Today, with expertise in Frontend development and UI/UX design, combined with resilience and determination, along with skills in various technologies like React.js, Vue.js, Figma, and more, I've had the opportunity to collaborate with great minds to engineer solutions to problems.</h2>
                <h2>I'm always excited to take on challenging problems head- on, using the tools in my arsenal to positively impact  the world with ones and zeros.</h2> -->
                
                <h2>I’m a self-taught software engineer with a strong passion for building intuitive and scalable digital experiences. My journey into tech started in 8th grade when I saw classmates creating websites for fun I was hooked. While many moved on, I kept going. By 9th grade, I was confidently building websites and exploring the world of JavaScript.</h2>
                <h2>Fast forward to today, I specialize in frontend development and UI/UX design, creating smooth, responsive interfaces using React.js, Vue.js, Nuxt.js, and Figma. I’ve collaborated with teams to ship real-world solutions and also worked as a Frontend Developer & UI/UX Design Intern at Arravo.</h2>
                <h2>I’m always excited by challenges, and I enjoy using code and design to solve real problems and make meaningful impact one line at a time.</h2>
            </div>
        </div>
        <div class="w-full block lg:max-w-[80rem] md:max-w-[45rem] mx-auto px-4 py-6 text-center overflow-hidden dark:text-[#f4f4f4] text-[#263238] lg:mt-[-2rem] mt-[1rem]">
            <div v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, scale: 1 }" :variants="{ custom: { scale: 2 } }" :delay="200" :duration="1200" class="flex gap-4 items-center justify-start" >
                <Motion is="div" preset="slideVisibleLeft" :duration="1600" class="w-[6rem] md:w-[8rem] md:h-[.1rem] h-[.1rem] dark:bg-[#f4f4f4] bg-[#263238] "></Motion> 
                <Motion
                    is="h2"
                    :initial="{ y: -100, opacity: 0 }"
                    :enter="{ y: 0, opacity: 1 }"
                    :duration="1400"
                    class="md:text-[2.3rem] text-[1.3rem]"
                    >
                    Skills
                    </Motion>
                <Motion is="div" preset="slideVisibleRight" :duration="2000" class="w-[6rem] md:w-[8rem] md:h-[.1rem] h-[.1rem] dark:bg-[#f4f4f4] bg-[#263238] mt-[rem] "></Motion>
            </div>
        
            <Motion is="div" preset="slideVisibleBottom" :duration="1000" class="grid grid-cols-3 md:grid-cols-5 gap-4 p-4 "> 
            <div v-for="sk in Skills" :key="sk.name" class="flex flex-col gap-3 text-center">
                <div class="flex flex-col gap-3 justify-center items-center">
                    <div class="md:w-[7rem] md:h-[7rem] w-[5rem] h-[5rem] border dark:border-[#f4f4f4] border-[#263238] rounded-xl flex items-center justify-center">
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

