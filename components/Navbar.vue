<template>
    <div class="dark:bg-[#263238] bg-[#f4f4f4] dark:text-[#f4f4f4] text-[#263238] border-b-3 dark:border-black border-[#263238] overflow-hidden">
        <div :class="pathname === '/projects' ? 'w-full block max-w-[80rem] mx-auto px-4 py-4 md:py-6 pb-0' : 'w-full block lg:max-w-[74rem] md:max-w-[45rem] mx-auto px-4 py-4 md:py-6 pb-0' ">
            <div class="flex justify-around font-devonshire items-center">
                <NuxtLink to="/" class="text-[2rem]">Akinfemi.</NuxtLink>
                <div class=" text-xl hidden md:block lg:block xl:block">
                    <ul class="flex gap-[4rem] justify-center items-center">
                        <li :class="pathname === '/' ? 'w-[5rem] h-[2.5rem] rounded-xl p-[.4rem] text-center mt-[rem] dark:bg-[#f4f4f4] bg-[#263238] text-[#f4f4f4] dark:text-[#263238] text-[1.4rem] ' : 'font-[#f4f4f4] text-[1.4rem]'">
                            <NuxtLink to="/">Home</NuxtLink>
                        </li>
                        <li :class="pathname === '/projects' ? 'w-[7rem] h-[2.5rem] rounded-xl p-[.4rem] text-center mt-[rem] dark:bg-[#f4f4f4] bg-[#263238] text-[#f4f4f4] dark:text-[#263238] text-[1.4rem] ' : 'font-[#f4f4f4] text-[1.4rem]'">
                            <NuxtLink to="/projects">Projects</NuxtLink>
                        </li>
                        <li :class="pathname === '/about' ? 'w-[8rem] h-[2.5rem] rounded-xl p-[.4rem] text-center mt-[rem] dark:bg-[#f4f4f4] bg-[#263238] text-[#f4f4f4] dark:text-[#263238] text-[1.4rem] ' : 'font-[#f4f4f4] text-[1.4rem]'">
                            <NuxtLink to="/about">About Me</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="flex gap-3">
                    <!-- Mobile Navbar -->
                 <div>
                    <button @click="handleToggle" class="block md:hidden lg:hidden xl:hidden"><img :src="colorMode.preference === 'dark' ? darkImage : lightImage" /></button>
                        <div :class="[open ? 'block' : 'hidden', 'md:hidden bg-[#263238] shadow-2xl absolute top-16 right-0 w-screen p-8 z-50']">
                            <ul class="flex flex-col gap-[4rem]">
                                <li :class="pathname === '/' ? 'w-[5rem] h-[2.5rem] rounded-xl p-[.4rem] text-center mt-[rem] dark:bg-[#f4f4f4] bg-[#263238] text-[#f4f4f4] dark:text-[#263238] text-[1.4rem] ' : 'font-[#f4f4f4] text-[1.4rem]'">
                                    <NuxtLink to="/">Home</NuxtLink>
                                </li>
                                <li :class="pathname === '/projects' ? 'w-[7rem] h-[2.5rem] rounded-xl p-[.4rem] text-center mt-[rem] dark:bg-[#f4f4f4] bg-[#263238] text-[#f4f4f4] dark:text-[#263238] text-[1.4rem] ' : 'font-[#f4f4f4] text-[1.4rem]'">
                                    <NuxtLink to="/projects">Projects</NuxtLink>
                                </li>
                                <li :class="pathname === '/about' ? 'w-[8rem] h-[2.5rem] rounded-xl p-[.4rem] text-center mt-[rem] dark:bg-[#f4f4f4] bg-[#263238] text-[#f4f4f4] dark:text-[#263238] text-[1.4rem] ' : 'font-[#f4f4f4] text-[1.4rem]'">
                                    <NuxtLink to="/about">About Me</NuxtLink>
                                </li>
                            </ul>
                        </div>
                 </div>
                    <button v-if="colorMode.value === 'dark'" class="cursor-pointer" @click="toggle"><img src="../assets/images/Group 5.svg"/></button> 
                    <button v-else class="cursor-pointer" @click="toggle"><img src="../assets/images/Group 2.svg"/></button> 
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
const open = ref(false)

const handleToggle = () => {
    open.value = !open.value
}

const colorMode = useColorMode()
const toggle = () => {
    console.log('Toggle clicked!', colorMode.preference)
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}

</script>