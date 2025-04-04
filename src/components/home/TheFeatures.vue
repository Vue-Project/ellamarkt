<template>
    <section class="features">
        <v-container>
            <v-row>
                <v-col>
                    <div class="features-box">
                        <CartTruck />
                        <h5>Free Shipping & Returns</h5>
                    </div>
                </v-col>
                <v-col>
                    <div class="features-box lines">
                        <LowestPrice />
                        <h5>Lowest Price Guarantee</h5>
                    </div>
                </v-col>
                <v-col>
                    <div class="features-box">
                        <LongestOffer />
                        <h5>Longest Warranties Offer</h5>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
<script>
import CartTruck from "../SVG/CartTruckIcon.vue";
import LowestPrice from "../SVG/LowestPriceIcon.vue";
import LongestOffer from "../SVG/LongestOfferIcon.vue";

export default {
    components: {
        CartTruck,
        LowestPrice,
        LongestOffer,
    },
};
</script>
<style lang="scss">
.features-box {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    svg {
        margin-right: 10px;
    }
    h5 {
        font-size: 15px;
        font-weight: 600;
    }
}
.lines {
    &::after {
        content: "";
        width: 2px;
        height: 30px;
        background-color: #dadada;
        position: absolute;
        right: 0;
    }
    &::before {
        content: "";
        width: 2px;
        height: 30px;
        background-color: #dadada;
        position: absolute;
        left: 0;
    }
}
</style>
