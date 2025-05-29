<template>
  <Head><Title>Akinfemi</Title></Head>
  <div class="bg-[#263238] lg:h-screen h-full md:h-screen w-screen overflow-y-hidden pb-0">
    <Navbar />
    <Background />
    <Heading />
    <Skills />
</div>
</template>

<script setup>
import Background from '../components/Background.vue';
import Heading from '../components/Home/Heading.vue'
import Skills from '../components/Home/Skills.vue'

const router = useRouter()

</script>
