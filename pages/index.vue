<template>

  <Head>
    <Title>Akinfemi</Title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
  </Head>

  <div class="bg-[#263238] lg:min-h-screen min-h-screen md:min-h-screen overflow-x-hidden ">
    <Navbar />
    <Background />
    <div class="w-full m-auto max-w-4xl">
      <Heading />
      <Skills />
    </div>

  </div>
</template>

<script setup>
import Background from "../components/Background.vue";
import Heading from "../components/Home/Heading.vue";
import Skills from "../components/Home/Skills.vue";

const router = useRouter();
</script>
