<template>
    <div class="dark:bg-[#263238] bg-[#f4f4f4] dark:text-[#f4f4f4] text-[#263238] border-b-3 dark:border-black border-[#263238] overflow-hidden">
        <div :class="pathname === '/projects' ? 'w-full block max-w-[80rem] mx-auto px-4 py-4 md:py-6 pb-0' : 'w-full block lg:max-w-[74rem] md:max-w-[45rem] mx-auto px-4 py-4 md:py-6 pb-0' ">
            <div class="flex justify-around font-devonshire items-center">
                <NuxtLink to="/" class="text-[2rem]">Akinfemi.</NuxtLink>
                <div class=" text-xl hidden md:block lg:block xl:block">
                    <ul class="flex gap-[4rem] justify-center items-center">
                        <li :class="pathname === '/' ? 'w-[5rem] h-[2.5rem] rounded-xl p-[.4rem] text-center mt-[rem] dark:bg-[#f4f4f4] bg-[#263238] text-[#f4f4f4] dark:text-[#263238] text-[1.4rem] ' : 'dark:text-[#f4f4f4] text-[#263238] text-[1.4rem]'">
                            <NuxtLink to="/">Home</NuxtLink>
                        </li>
                        <li :class="pathname === '/projects' ? 'w-[7rem] h-[2.5rem] rounded-xl p-[.4rem] text-center mt-[rem] dark:bg-[#f4f4f4] bg-[#263238] text-[#f4f4f4] dark:text-[#263238] text-[1.4rem] ' : 'dark:text-[#f4f4f4] text-[#263238] text-[1.4rem]'">
                            <NuxtLink to="/projects">Projects</NuxtLink>
                        </li>
                        <li :class="pathname === '/about' ? 'w-[8rem] h-[2.5rem] rounded-xl p-[.4rem] text-center mt-[rem] dark:bg-[#f4f4f4] bg-[#263238] text-[#f4f4f4] dark:text-[#263238] text-[1.4rem] ' : 'dark:text-[#f4f4f4] text-[#263238] text-[1.4rem]'">
                            <NuxtLink to="/about">About Me</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="flex gap-3">
                    <!-- Mobile Navbar -->
                 <div>
                    <button @click="handleToggle" class="block md:hidden lg:hidden xl:hidden"><img :src="colorMode.preference === 'dark' ? darkImage : lightImage" /></button>
                        <div :class="[open ? 'block' : 'hidden', 'md:hidden dark:bg-[#263238] bg-[#f4f4f4] shadow-2xl absolute top-16 right-0 w-full p-8 z-50']">
                            <div class="flex justify-between">
                               <ul class="flex flex-col gap-[2rem] ml-[2rem]">
                                    <li :class="pathname === '/' ? 'w-[5rem] h-[2.5rem] rounded-xl p-[.4rem] text-center mt-[rem] dark:bg-[#f4f4f4] bg-[#263238] text-[#f4f4f4] dark:text-[#263238] text-[1.4rem] ' : 'dark:text-[#f4f4f4] text-[#263238] text-[1.4rem]'">
                                        <NuxtLink to="/">Home</NuxtLink>
                                    </li>
                                    <li :class="pathname === '/projects' ? 'w-[7rem] h-[2.5rem] rounded-xl p-[.4rem] text-center mt-[rem] dark:bg-[#f4f4f4] bg-[#263238] text-[#f4f4f4] dark:text-[#263238] text-[1.4rem] ' : 'dark:text-[#f4f4f4] text-[#263238] text-[1.4rem]'">
                                        <NuxtLink to="/projects">Projects</NuxtLink>
                                    </li>
                                    <li :class="pathname === '/about' ? 'w-[8rem] h-[2.5rem] rounded-xl p-[.4rem] text-center mt-[rem] dark:bg-[#f4f4f4] bg-[#263238] text-[#f4f4f4] dark:text-[#263238] text-[1.4rem] ' : 'dark:text-[#f4f4f4] text-[#263238] text-[1.4rem]'">
                                        <NuxtLink to="/about">About Me</NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                 </div>
                    <button v-if="colorMode.value === 'dark'" class="cursor-pointer block lg:hidden" @click="link = true"><img src="../assets/images/Group 25.svg"/></button> 
                    <button v-else class="cursor-pointer block lg:hidden" @click="link = true"><img src="../assets/images/Group 27 blue.svg"/></button> 

                    <button v-if="colorMode.value === 'dark'" class="cursor-pointer" @click="toggle"><img src="../assets/images/Group 5.svg"/></button> 
                    <button v-else class="cursor-pointer" @click="toggle"><img src="../assets/images/Group 2.svg"/></button> 

                    <div v-if="link" class="fixed bg-black/50 min-h-screen z-10 w-screen flex justify-center items-center top-0 left-0 text-white" @click="link = false">
                            <div  class="w-[20rem] h-[20rem] dark:bg-[#263238] bg-[#f4f4f4] p-6 font-poppins dark:text-white text-[#263238] rounded-xl">
                                <div class="flex justify-between">
                                    <h1 class="text-[2rem] font-bold">Links</h1>
                                    <button v-if="colorMode.value === 'dark'" class="cursor-pointer block lg:hidden" @click="link = false"><img src="../assets/images/Group 28.svg"/></button> 
                                    <button v-else class="cursor-pointer block lg:hidden" @click="link = false"><img src="../assets/images/Group 29.svg"/></button>
                                </div>
                                <div class="flex flex-col gap-5 mt-[2.5rem]">
                                    <div >
                                        <NuxtLink to="https://github.com/elphie-pro" class="flex gap-5 items-center"><img src="../assets/images/mdi_github.svg" alt="" class="w-[2.5rem]">
                                        <p class="text-[1.3rem] font-semibold">Github</p></NuxtLink>
                                    </div>  
                                    <div >
                                        <NuxtLink to="https://x.com/DevElphie" class="flex gap-5 items-center"><img src="../assets/images/mdi_twitter.svg" alt="" class="w-[2.5rem]">
                                        <p class="text-[1.3rem] font-semibold">Twitter</p></NuxtLink>
                                    </div>  
                                    <div class="">
                                        <NuxtLink to="https://www.linkedin.com/in/akinfemi-onadeko-5b0b852a6/" class="flex gap-5 items-center"><img src="../assets/images/devicon_linkedin.svg" alt="" class="w-[2.5rem]"> <p class="text-[1.3rem] font-semibold">LinkedIn</p></NuxtLink>
                                    </div>  
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="js">
import darkImage from '../assets/images/Group 12.svg'
import lightImage from '../assets/images/Group 11.svg'
const route = useRoute()
const pathname = computed(() => route.path)
const link = ref(false)
const open = ref(false)

const handleToggle = () => {
    open.value = !open.value
}

const colorMode = useColorMode()
const toggle = () => {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}

</script>