<template>
    <section class="top-cat">
        <div class="cyber-banner">
            <img src="@/assets/images/cyber-banner.webp" alt="cyber-banner" />
        </div>
        <v-container>
            <div class="categories pt-13">
                <div class="title px-5">
                    <h3 class="text-center f mb-4">Top Categories</h3>
                    <a href="#" class="text-black">Shop All</a>
                </div>
                <v-container>
                    <v-row>
                        <v-col cols="2" v-for="cat in categories" :key="cat.tile">
                            <v-card class="text-center" elevation="0">
                                <v-hover>
                                    <template v-slot:default="{ isHovering, props }">
                                        <div class="img-parent">
                                            <img :src="cat.image" :alt="cat.title" v-bind="props" :style="` transition: 0.4s all ease-in-out; scale: ${isHovering ? 1.05 : 1}`" />
                                        </div>
                                    </template>
                                </v-hover>
                                <v-card-text>{{ cat.title }}</v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </v-container>
    </section>
</template>
<script>
export default {
    name: "TopCategories",
    data() {
        return {
            categories: [
                {
                    image: "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
                    title: "Mobile Phones",
                },
                {
                    image: "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
                    title: "Laptops & Tablets",
                },
                {
                    image: "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
                    title: "Televisions",
                },
                {
                    image: "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
                    title: "PCs & Accessories",
                },
                {
                    image: "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
                    title: "Audio & Video",
                },
                {
                    image: "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
                    title: "Gaming & Accessories",
                },
                {
                    image: "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
                    title: "Home Appliances",
                },
                {
                    image: "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
                    title: "Kitchen Appliances ",
                },
                {
                    image: "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
                    title: "Cameras",
                },
                {
                    image: "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
                    title: "Consumables",
                },
                {
                    image: "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
                    title: "Smart Homes",
                },
                {
                    image: "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
                    title: "Accessories",
                },
            ],
        };
    },
};
</script>
<style lang="scss" scoped>
.categories {
    h3 {
        font-weight: 900;
        font-size: 20px;
    }
    img {
        cursor: pointer;
        height: 100%;
    }
}
.img-parent {
    overflow: hidden;
    width: 100%;
    height: 200px;
}
.title {
    h3 {
        flex-grow: 1;
        color: #202020;
    }
}
</style>
