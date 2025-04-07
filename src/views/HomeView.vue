<template>
    <HeroSection />
    <TheFeatures />
    <TopOffer />
    <ProductSwiper :products="flashDeals" />
    <TopCategories />
</template>

<script>
// @ is an alias to /src
import HeroSection from "@/components/home/HeroSection.vue";
import TheFeatures from "@/components/home/TheFeatures.vue";
import TopOffer from "@/components/home/TopOffers.vue";
import ProductSwiper from "@/components/home/ProductSwiper.vue";
import TopCategories from "@/components/home/TopCategories.vue";
import { useProductModules } from "../stores/productModules";
import { mapActions, mapState } from "pinia";

export default {
    name: "HomeView",
    components: {
        HeroSection,
        TheFeatures,
        TopOffer,
        ProductSwiper,
        TopCategories,
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
