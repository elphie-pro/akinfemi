<template>
    <div class="overflow-y-hidden md:overflow-hidden">
        <img v-if="$colorMode.preference === 'dark'" src="../assets/images/Group 1.svg" alt="" class="fixed w-1/2 xl:max-w-[25rem] bottom-0 right-0 z-0">
        <img v-else src="../assets/images/Group1.svg" alt="" class="fixed w-1/2 xl:max-w-[25rem] bottom-0 right-0 z-0">
        <img src="../assets/images/Man developer writing programming code.svg" alt="" class="fixed w-1/2 xl:max-w-[15rem]  mt-auto md:-bottom-[3rem] bottom-[-2.5rem] xl:bottom-0 -left-2">
        <img src="../assets/images/Programming using version control in cloud.svg" alt="" class="fixed w-1/2 xl:max-w-[17rem] mt-[11rem] xl:mt-auto top-0 right-0">
        <div class="md:w-[6rem] w-[4rem]  absolute">
            <div class="flex flex-col gap-4 items-center">
                <div class="w-[.1rem] md:h-[8rem] h-[4rem] dark:bg-[#000] bg-[#263238] xl:mt-[5rem] md:mt-[12rem] mt-[9rem]"></div>
                <NuxtLink to="https://github.com/elphie-pro"><img src="../assets/images/mdi_github.svg" alt="" class="md:w-[2.5rem] w-[2rem]"></NuxtLink>
                <NuxtLink to="https://x.com/DevElphie"><img src="../assets/images/mdi_twitter.svg" alt="" class="md:w-[2.5rem] w-[2rem]"></NuxtLink>
                <NuxtLink to="https://www.linkedin.com/in/akinfemi-onadeko-5b0b852a6/"><img src="../assets/images/devicon_linkedin.svg" alt="" class="md:w-[2.5rem] w-[2rem]"></NuxtLink>
                <div class="w-[.1rem] md:h-[8rem] h-[4rem] dark:bg-[#000] bg-[#263238] mt-[rem] "></div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
