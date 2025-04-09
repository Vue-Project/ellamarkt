<template>
    <section>
        <v-container>
            <v-row>
                <v-col cols="6" v-for="(banner, index) in banners" :key="index" style="cursor: pointer">
                    <v-hover v-slot="{ isHovering, props }">
                        <div class="pr-3" v-bind="props" :style="`transition: 0.4s all ease-out; scale:${isHovering ? 1.02 : 1}`">
                            <img class="w-100" :src="banner.image" :alt="banner.alt" />
                        </div>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
<script>
export default {
    name: "BannerSection",
    data() {
        return {
            banners: [
                { image: require("@/assets/images/band-right-cover.webp"), alt: "banner right" },
                { image: require("@/assets/images/band-left-cover.webp"), alt: "banner left" },
            ],
        };
    },
};
</script>
