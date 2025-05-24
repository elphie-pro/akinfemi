<template>
    <div class="bg-[#263238] text-[#f4f4f4] border-b-3 border-black overflow-hidden">
        <div :class="pathname === '/projects' ? 'w-full block max-w-[90rem] mx-auto px-4 py-4 md:py-6 pb-0' : 'w-full block max-w-[80rem] mx-auto px-4 py-4 md:py-6 pb-0' "">
            <div class="flex justify-between" style="font-family: 'Cakecafe';">
                <h1 class="text-[1.3rem]">AKINFEMI</h1>
                <div class=" text-xl">
                    <ul class="flex gap-[4rem]">
                        <li :class="pathname === '/' ? 'w-[5rem] h-[2.5rem] rounded-xl p-2 text-center mt-[-.5rem] bg-[#f4f4f4] text-[#263238]' : 'font-[#f4f4f4]'">
                            <NuxtLink to="/">Home</NuxtLink>
                        </li>
                        <li :class="pathname === '/projects' ? 'w-[7rem] h-[2.5rem] rounded-xl p-2 text-center mt-[-.5rem] bg-[#f4f4f4] text-[#263238]' : 'font-[#f4f4f4]'">
                            <NuxtLink to="/projects">Projects</NuxtLink>
                        </li>
                        <li :class="pathname === '/about' ? 'w-[8rem] h-[2.5rem] rounded-xl p-2 text-center mt-[-.5rem] bg-[#f4f4f4] text-[#263238]' : 'font-[#f4f4f4]'">
                            <NuxtLink to="/about">About Us</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <button class="cursor-pointer"><img src="../assets/images/Group 5.svg"/></button> 
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const pathname = computed(() => route.path)
</script>