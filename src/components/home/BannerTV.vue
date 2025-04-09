<template>
    <section>
        <v-container>
            <v-row>
                <v-col cols="12" style="cursor: pointer">
                    <v-hover v-slot="{ isHovering, props }">
                        <div v-bind="props" :style="`transition: 0.4s all ease-out; scale:${isHovering ? 1.02 : 1}`">
                            <img class="w-100" :src="require('@/assets/images/tv-banner.webp')" alt="banner-tv" />
                        </div>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
<script>
export default {
    name: "BannerTV",
    data() {
        return {};
    },
};
</script>
