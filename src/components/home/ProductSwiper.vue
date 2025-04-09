<template>
    <section class="product-swiper pt-16">
        <v-container>
            <div class="title">
                <h2 :class="`text-${titleColor}`">{{ title }}</h2>
                <a href="#">Show All</a>
            </div>
            <Swiper
                :pagination="{ el: '.swiper-pagination', clickable: true }"
                :modules="modules"
                :slides-per-view="4"
                :space-between="35"
                class="pb-12 px-5"
                :navigation="{ prevIcon: '.swiper-prev', nextIcon: '.swiper-next' }"
                :autoplay="{ delay: 3000 }"
            >
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
                        <v-card-text class="dec-text px-0 pb-0">
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
        </v-container>
    </section>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper";

export default {
    name: "ProductSwiper",
    data() {
        return {
            showSelected: {},
        };
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        products: {
            type: Array,
            isrequired: false,
        },
        title: {
            type: String,
            isrequired: false,
        },
        titleColor: {
            type: String,
            isrequired: false,
            default: "red",
        },
    },
    setup() {
        return {
            modules: [Navigation, Pagination, Autoplay],
        };
    },
};
</script>
<style lang="scss">
.product-image {
    width: 100%;
    height: 400px;
    min-height: 300px;
    cursor: pointer;
}
.product-image-view {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #cbcbcb;
}
.product-swiper {
    .swiper-button-next,
    .swiper-button-prev {
        width: 40px;
        height: 40px;
        border: 2px solid #212121;
        border-radius: 50%;
        background: white;
        &::after {
            font-size: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #212121;
            font-weight: bold;
        }
    }
    .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
    }
}
.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    h2 {
        font-size: 30px;
        font-weight: bold;
        color: #e10600;
    }
    a {
        color: #202020;
    }
}
.dec-text {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
}
</style>
