<template>
    <section class="hero-section">
        <div class="box">
            <v-container>
                <v-row>
                    <v-col cols="6">
                        <div class="content">
                            <h3>
                                <span>Huge Saving</span>
                                on UHD Televisions
                            </h3>
                            <p class="text-white mb-3">Sale up to 70% off on selected items</p>
                            <v-btn class="py-2 px-10 text-white" density="default" variant="outlined" style="border-radius: 30px; text-transform: none">Shop Now</v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </section>
</template>
<script>
export default {};
</script>
<style lang="scss">
.hero-section {
    .box {
        height: 600px;
        background-image: url("../../assets/images/banner-bg.jpg");
        background-size: cover;
        background-position: -70px top;
    }
    .content {
        padding: 180px 0 0 190px;
        p {
            font-size: 25px;
        }
        h3 {
            font-size: 55px;
            font-weight: 900;
            text-transform: uppercase;
            color: #fff;
            span {
                color: #11ffda;
            }
        }
    }
}
</style>
