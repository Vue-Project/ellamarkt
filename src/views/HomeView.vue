<template>
    <HeroSection />
    <TheFeatures />
    <TopOffer />
</template>

<script>
// @ is an alias to /src
import HeroSection from "@/components/home/HeroSection.vue";
import TheFeatures from "@/components/home/TheFeatures.vue";
import TopOffer from "@/components/home/TopOffers.vue";

export default {
    name: "HomeView",
    components: {
        HeroSection,
        TheFeatures,
        TopOffer,
    },
};
</script>
