<template>
    <section class="top-offers">
        <v-container>
            <v-row>
                <v-col cols="4">
                    <v-hover v-slot="{ isHovering, props }">
                        <div class="top-offers-box" v-bind="props">
                            <img class="w-100" src="@/assets/images/playstations.webp" alt=" playstation image" :style="` transition: 0.7s all ease-out; scale:${isHovering ? 1.05 : 1}`" />
                        </div>
                    </v-hover>
                </v-col>
                <v-col cols="4">
                    <v-hover v-slot="{ isHovering, props }">
                        <div class="top-offers-box" v-bind="props">
                            <img class="w-100" src="@/assets/images/headset.webp" alt=" Headset image" :style="` transition: 0.7s all ease-out; scale:${isHovering ? 1.05 : 1}`" />
                        </div>
                    </v-hover>
                </v-col>
                <v-col cols="4">
                    <v-hover v-slot="{ isHovering, props }">
                        <div class="top-offers-box" v-bind="props">
                            <img class="w-100" src="@/assets/images/chairs.webp" alt=" chair image" :style="` transition: 0.7s all ease-out; scale:${isHovering ? 1.05 : 1}`" />
                        </div>
                    </v-hover>
                </v-col>
                <v-col cols="6">
                    <v-hover v-slot="{ isHovering, props }">
                        <div class="top-offers-box" v-bind="props">
                            <img class="w-100" src="@/assets/images/laptops.webp" alt=" laptops image" :style="` transition: 0.7s all ease-out; scale:${isHovering ? 1.05 : 1}`" />
                        </div>
                    </v-hover>
                </v-col>
                <v-col cols="6">
                    <v-hover v-slot="{ isHovering, props }">
                        <div class="top-offers-box" v-bind="props">
                            <img class="w-100" src="@/assets/images/iphones.webp" alt=" iphones image" :style="` transition: 0.7s all ease-out; scale:${isHovering ? 1.05 : 1}`" />
                        </div>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
<script>
export default {};
</script>
<style lang="scss">
.top-offers {
    background-color: #f5f5f5;
    padding: 50px 0;
}
.top-offers-box {
    padding-right: 15px;
    overflow: hidden;
    cursor: pointer;
    border-radius: 10px;
}
</style>
