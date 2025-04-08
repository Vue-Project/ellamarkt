<template>
    <HeroSection />
    <TheFeatures />
    <TopOffer />
    <ProductSwiper :products="flashDeals" />
    <TopCategories />
    <NewProduct :products="beautyDeals" />
    <QualityFeatures />
</template>

<script>
// @ is an alias to /src
import HeroSection from "@/components/home/HeroSection.vue";
import TheFeatures from "@/components/home/TheFeatures.vue";
import TopOffer from "@/components/home/TopOffers.vue";
import ProductSwiper from "@/components/home/ProductSwiper.vue";
import TopCategories from "@/components/home/TopCategories.vue";
import NewProduct from "@/components/home/NewProduct.vue";
import QualityFeatures from "@/components/home/QualityFeatures.vue";
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
        NewProduct,
        QualityFeatures,
    },
    methods: {
        ...mapActions(useProductModules, ["getFlashDeals"]),
    },
    computed: {
        ...mapState(useProductModules, ["flashDeals", "beautyDeals"]),
    },
    async mounted() {
        await this.getFlashDeals();
    },
};
</script>
