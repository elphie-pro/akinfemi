<template>
    <div class="bg-[#263238] text-[#f4f4f4] border-b-3 border-black">
        <div class="w-full block max-w-[90rem] mx-auto px-4 py-6">
            <div class="flex justify-between" style="font-family: 'Cakecafe';">
                <h1 class="text-[1.3rem]">AKINFEMI</h1>
                <div class=" text-xl">
                    <ul class="flex gap-[4rem]">
                        <li :class="pathname === '/' ? 'w-[5rem] h-[2.5rem] rounded-xl p-2 text-center mt-[-.5rem] bg-[#f4f4f4] text-[#263238]' : 'font-[#f4f4f4]'">
                            <NuxtLink href="/">Home</NuxtLink>
                        </li>
                        <li :class="pathname === '/dd' ? 'w-[7rem] h-[2.5rem] rounded-xl p-2 text-center mt-[-.5rem] bg-[#f4f4f4] text-[#263238]' : 'font-[#f4f4f4]'">
                            <NuxtLink href="/">Projects</NuxtLink>
                        </li>
                        <li :class="pathname === '/d' ? 'w-[8rem] h-[2.5rem] rounded-xl p-2 text-center mt-[-.5rem] bg-[#f4f4f4] text-[#263238]' : 'font-[#f4f4f4]'">
                            <NuxtLink href="/">About Us</NuxtLink>
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