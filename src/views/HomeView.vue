<template>
    <HeroSection />
    <TheFeatures />
</template>

<script>
// @ is an alias to /src
import HeroSection from "@/components/home/HeroSection.vue";
import TheFeatures from "@/components/home/TheFeatures.vue";

export default {
    name: "HomeView",
    components: {
        HeroSection,
        TheFeatures,
    },
};
</script>
