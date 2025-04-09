<template>
    <HeroSection />
    <TheFeatures />
    <TopOffer />
    <ProductSwiper :products="flashDeals" :title="'Flash Deals'" :titleColor="'red'" />
    <TopCategories />
    <NewProduct :products="beautyDeals" />
    <QualityFeatures />
    <ProductSwiper :products="furnitureDeals" :title="'Top Furniture'" :titleColor="'black'" />
    <BannerSection />
    <ProductSwiper :products="groceriesDeals" :title="'Top groceries'" :titleColor="'black'" />
    <BannerTV />
    <ProductSwiper :products="fragrancesDeals" :title="'Top fragrances'" :titleColor="'black'" />
    <ShopWithUs />
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
import BannerSection from "@/components/home/BannerSection.vue";
import BannerTV from "@/components/home/BannerTV.vue";
import ShopWithUs from "@/components/home/ShopWIthUs.vue";

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
        BannerSection,
        BannerTV,
        ShopWithUs,
    },
    methods: {
        ...mapActions(useProductModules, ["getFlashDeals"]),
    },
    computed: {
        ...mapState(useProductModules, ["flashDeals", "beautyDeals", "furnitureDeals", "groceriesDeals", "fragrancesDeals"]),
    },
    async mounted() {
        await this.getFlashDeals();
    },
};
</script>
