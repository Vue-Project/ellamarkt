<template lang="">
    <section class="flash-deals pt-16">
        <v-container>
            <v-row>
                <v-col cols="3" v-for="product in products" :key="product.id">
                    <v-card class="pb-5">
                        <img class="product-image" :src="showSelected[product.title] ? showSelected[product.title] : product.thumbnail" :alt="product.title" />
                        <v-card-text class="px-0 pb-0">
                            ({{ product.title }}){{ product.description.split(" ").length <= 8 ? product.description : product.description.split(" ").slice(0, 9).join(" ") + "..." }}
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
                            <v-btn class="rounded-xl px-7 py-3" density="combact" variant="outlined">ChangeOption</v-btn>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
<script>
export default {
    name: "FlashDeals",
    data() {
        return {
            showSelected: {},
        };
    },
    props: {
        products: {
            type: Array,
            isrequired: false,
        },
    },
};
</script>
<style lang="scss">
.product-image {
    width: 100%;
    height: 400px;
    min-height: 300px;
}
.product-image-view {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #cbcbcb;
}
</style>
