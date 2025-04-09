<template lang="">
    <section class="shop-with-us py-12">
        <v-container>
            <h2>
                <span>Why Shop</span>
                with us?
            </h2>
            <v-row>
                <v-col cols="3">
                    <v-card elevation="0">
                        <div class="shop-with-us-card">
                            <img src="@/assets/images/free-shipping.png" alt="free shipping" />
                            <v-card-title>Free Shipping On First Order</v-card-title>
                            <v-card-text class="pb-0">Praesent suscipit mattis facilisis.</v-card-text>
                            <a href="#">Learn More</a>
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <v-card elevation="0">
                        <div class="shop-with-us-card">
                            <img src="@/assets/images/weekly-flash-sales.png" alt="free shipping" />
                            <v-card-title>Weakly flash sales</v-card-title>
                            <v-card-text class="pb-0">Praesent suscipit mattis facilisis.</v-card-text>
                            <a href="#">Learn More</a>
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <v-card elevation="0">
                        <div class="shop-with-us-card">
                            <img src="@/assets/images/discount.png" alt="free shipping" />
                            <v-card-title>Anual Payment Discount</v-card-title>
                            <v-card-text class="pb-0">Praesent suscipit mattis facilisis.</v-card-text>
                            <a href="#">Learn More</a>
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <v-card elevation="0">
                        <div class="shop-with-us-card">
                            <img src="@/assets/images/cash-back.png" alt="free shipping" />
                            <v-card-title>Cashback Reward Program</v-card-title>
                            <v-card-text class="pb-0">Praesent suscipit mattis facilisis.</v-card-text>
                            <a href="#">Learn More</a>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
<script>
export default {};
</script>
<style lang="scss">
.shop-with-us {
    text-align: center;
    background-image: url("@/assets/images/why-shop-with-us-banner.webp");
    background-size: cover;
    .v-card {
        background: transparent;
        text-align: center;
        color: white;
    }
    h2 {
        font-size: 40px;
        font-weight: 900;
        margin-bottom: 40px;
        text-transform: uppercase;
        color: #fff;
        span {
            color: #11ffda;
        }
    }
}
.shop-with-us-card {
    text-align: center;
    .v-card-title {
        font-size: 20px;
        font-weight: 500;
    }
    a {
        font-size: 15px;
        color: white;
        font-weight: 500;
        text-decoration: underline;
    }
}
</style>
