<template>
    <section class="quality-features">
        <v-container>
            <v-row>
                <v-col v-for="(card, index) in cards" :key="index">
                    <v-hover v-slot="{ isHovering, props }">
                        <v-card class="quality-card" v-bind="props" :elevation="isHovering ? 4 : 0">
                            <div class="content">
                                <img :src="getImageUrl(card.icon)" :alt="card.title" />
                                <v-card-title>{{ card.title }}</v-card-title>
                                <v-card-text>{{ card.description }}</v-card-text>
                            </div>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
<script>
export default {
    name: "QualityFeatures",
    data() {
        return {
            cards: [
                {
                    title: "QUALITY AND SAVING",
                    description: "Comprehensive quality control and affordable prices",
                    icon: "quality-icon.svg",
                },
                {
                    title: "GLOBAL WAREHOUSE",
                    description: "37 overseas warehouses",
                    icon: "warehouse.svg",
                },
                {
                    title: "HAVE QUESTIONS?",
                    description: "24/7 Customer Service - We're here and happy to help!",
                    icon: "fast-shipping.svg",
                },
                {
                    title: "FAST SHIPPING",
                    description: "Fast and convenient door to door delivery",
                    icon: "payment.svg",
                },
                {
                    title: "PAYMENT SECURITY",
                    description: "More than 10 different secure payment methods",
                    icon: "questions.svg",
                },
            ],
        };
    },
    methods: {
        getImageUrl(name) {
            return require(`@/assets/SVGS/${name}`);
        },
    },
};
</script>
<style lang="scss">
.quality-features {
    padding: 50px 0;
    background: #f5f5f5;
}
.quality-card {
    text-align: center;
    height: 400px;
    display: flex !important;
    justify-content: center;
    align-items: center;
    img {
        width: 80px;
        height: 80px;
    }
    .content {
        cursor: pointer;
        .v-card-title {
            font-weight: 700;
            text-transform: uppercase;
        }
    }
}
</style>
