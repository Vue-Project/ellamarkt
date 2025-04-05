<template>
    <HeroSection />
    <TheFeatures />
    <TopOffer />
    <FlashDeals :products="flashDeals" />
</template>

<script>
// @ is an alias to /src
import HeroSection from "@/components/home/HeroSection.vue";
import TheFeatures from "@/components/home/TheFeatures.vue";
import TopOffer from "@/components/home/TopOffers.vue";
import FlashDeals from "@/components/home/FlashDeals.vue";
import { useProductModules } from "../stores/productModules";
import { mapActions, mapState } from "pinia";

export default {
    name: "HomeView",
    components: {
        HeroSection,
        TheFeatures,
        TopOffer,
        FlashDeals,
    },
    methods: {
        ...mapActions(useProductModules, ["getFlashDeals"]),
    },
    computed: {
        ...mapState(useProductModules, ["flashDeals"]),
    },
    async mounted() {
        await this.getFlashDeals();
    },
};
</script>
