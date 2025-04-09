<template>
    <v-container>
        <div class="title">
            <h2>New Products</h2>
            <a href="#">Show All</a>
        </div>
        <v-row>
            <!-- <v-col cols="7"></v-col> -->

            <v-col cols="7" class="pt-15">
                <Loader :columnNumber="4" :NumberOfSkeleton="3" v-if="!products || products.length === 0" />
                <Swiper v-else :pagination="{ el: '.swiper-pagination', clickable: true }" :modules="modules" :slides-per-view="3" :space-between="35" class="pb-12 px-5" :autoplay="{ delay: 3000 }">
                    <SwiperSlide v-for="product in products" :key="product.id">
                        <v-card elevation="0" class="pb-5">
                            <v-hover v-slot="{ isHovering, props }">
                                <img
                                    class="product-image"
                                    :src="showSelected[product.title] ? showSelected[product.title] : product.thumbnail"
                                    :alt="product.title"
                                    v-bind="props"
                                    :style="` transition: 0.5s all ease-in-out; scale: ${isHovering ? 1.05 : 1}`"
                                />
                            </v-hover>
                            <v-card-text class="dec-text px-0 pb-0" style="display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; text-overflow: ellipsis">
                                <!-- ({{ product.title }}){{ product.description.split(" ").length <= 8 ? product.description : product.description.split(" ").slice(0, 9).join(" ") + "..." }} -->
                                ({{ product.title }}){{ product.description }}
                            </v-card-text>
                            <v-rating class="pb-0" v-model="product.rating" hover length="5" half-increments readonly density="compact" :size="20" color="yellow darken-3"></v-rating>
                            <v-card-text class="px-0 pt-0" pt-0>
                                $
                                <del>{{ product.price }}</del>
                                From
                                <span class="text-red font-weight-bold">${{ Math.ceil(product.price - (product.price * product.discountPercentage) / 100) }}</span>
                            </v-card-text>
                            <v-btn-toggle v-model="showSelected[product.title]">
                                <v-btn size="x-small" v-for="(pic, index) in product.images" :key="index" :value="pic"><img class="product-image-view" :src="pic" :alt="pic" /></v-btn>
                            </v-btn-toggle>
                            <div>
                                <v-btn class="rounded-xl px-7 py-3" density="compact" variant="outlined">ChangeOption</v-btn>
                            </div>
                        </v-card>
                    </SwiperSlide>
                    <div class="swiper-pagination"></div>
                    <div class="    "></div>
                    <div class="swiper-next"></div>
                </Swiper>
            </v-col>
            <v-col cols="5">
                <img class="w-100" src="@/assets/images/vr-banner.webp" alt="new-product image" />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper";
import Loader from "../Shared/Loader.vue";
export default {
    name: "NewProduct",

    data() {
        return {
            showSelected: {},
        };
    },
    components: {
        Swiper,
        SwiperSlide,
        Loader,
    },
    props: {
        products: {
            type: Array,
            isrequired: false,
        },
    },
    setup() {
        return {
            modules: [Pagination, Autoplay],
        };
    },
};
</script>
<style lang="scss" scoped>
.title {
    h2 {
        color: #202020;
    }
}
</style>
