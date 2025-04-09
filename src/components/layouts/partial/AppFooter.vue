<template>
    <v-footer :app="true" absolute>
        <div class="footer-top">
            <v-container>
                <v-row>
                    <v-col cols="3">
                        <h4>Shop</h4>
                        <ul class="links" v-for="shopLink in shopsLinks" :key="shopLink.title">
                            <li>
                                <a :href="shopLink.link">{{ shopLink.title }}</a>
                            </li>
                        </ul>
                    </v-col>
                    <v-col cols="3">
                        <h4>Further Info.</h4>

                        <ul class="links" v-for="furtherLink in furthersLinks" :key="furtherLink.title">
                            <li>
                                <a :href="furtherLink.link">{{ furtherLink.title }}</a>
                            </li>
                        </ul>
                    </v-col>
                    <v-col cols="3">
                        <h4>Customer Service</h4>

                        <ul class="links" v-for="customerServiceLink in customerServiceLinks" :key="customerServiceLink.title">
                            <li>
                                <a :href="customerServiceLink.link">{{ customerServiceLink.title }}</a>
                            </li>
                        </ul>
                    </v-col>
                    <v-col cols="3">
                        <img class="mb-3" src="@/assets/images/footer-logo.webp" alt="footer log" />

                        <ul class="links">
                            <li>
                                <span><img src="@/assets/SVGS/location.svg" alt=" location icon" /></span>
                                685 Market Street San Francisco, CA 94105, US
                            </li>
                            <li>
                                <span><PhoneIcon /></span>
                                Call us at (415) 555-5555
                            </li>
                            <li>
                                <span><img src="@/assets/SVGS/email.svg" alt=" Phone icon" /></span>
                                example@domain.com
                            </li>
                        </ul>
                        <ul class="social-media">
                            <li v-for="socialMedia in socialMedias" :key="socialMedia.title">
                                <a href="#" aria-label="social-media"><img :src="require(`@/assets/SVGS/${socialMedia.img}`)" alt="" /></a>
                            </li>
                            <li>
                                <a href="#"><TwitterIcon /></a>
                            </li>
                            <li>
                                <a href="#"><PinterrestIcon /></a>
                            </li>
                        </ul>
                    </v-col>
                </v-row>
            </v-container>
        </div>

        <div class="footer-bottom">
            <v-container>
                <v-row>
                    <v-col cols="6" class="text-left">
                        <p>© {{ new Date().getFullYear() }}, Ella Demo. All rights reserved.</p>
                    </v-col>
                    <v-col cols="6" class="text-right">
                        <ul class="payment-method">
                            <li>
                                <img src="@/assets/SVGS/visa.svg" alt="visa" />
                            </li>
                            <li>
                                <img src="@/assets/SVGS/shop-pay.svg" alt="shop-pay" />
                            </li>
                            <li>
                                <img src="@/assets/SVGS/pay.svg" alt="pay" />
                            </li>
                            <li>
                                <img src="@/assets/SVGS/american-express.svg" alt="american-express" />
                            </li>
                            <li>
                                <img src="@/assets/SVGS/mastercard.svg" alt="mastercard" />
                            </li>
                        </ul>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </v-footer>
</template>
<script>
import PhoneIcon from "@/components/SVG/PhoneIcon.vue";
import TwitterIcon from "@/components/SVG/TwitterIcon.vue";
import PinterrestIcon from "@/components/SVG/PinterrestIcon.vue";
export default {
    name: "AppFooter",
    data() {
        return {
            shopsLinks: [
                {
                    title: "Electronics",
                    link: "#",
                },
                {
                    title: "Computers & Laptops",
                    link: "#",
                },
                {
                    title: "Smartphones & Tablets",
                    link: "#",
                },
                {
                    title: "Cameras",
                    link: "#",
                },
                {
                    title: "Video Games & Systems",
                    link: "#",
                },
                {
                    title: "Home Furniture",
                    link: "#",
                },
                {
                    title: "Weekly Special",
                    link: "#",
                },
            ],
            furthersLinks: [
                {
                    title: "About",
                    link: "#",
                },
                {
                    title: "Blog",
                    link: "#",
                },
            ],
            customerServiceLinks: [
                {
                    title: "Search Terms",
                    link: "#",
                },
                {
                    title: "Advanced Search",
                    link: "#",
                },
                {
                    title: "Orders and Returns",
                    link: "#",
                },
                {
                    title: "Contact Us",
                    link: "#",
                },
                {
                    title: "Theme FAQs",
                    link: "#",
                },
                {
                    title: "Consultant",
                    link: "#",
                },
                {
                    title: "Store Locations",
                    link: "#",
                },
            ],
            socialMedias: [
                {
                    title: "Facebook",
                    img: "facebook.svg",
                },
                {
                    title: "instagram",
                    img: "instagram.svg",
                },

                {
                    title: "snap",
                    img: "snap.svg",
                },
            ],
        };
    },
    components: { PhoneIcon, TwitterIcon, PinterrestIcon },
};
</script>
<style lang="scss">
.v-footer {
    display: block !important;
    padding: 0 !important;
}
.footer-top {
    background: #f5f5f5;
    padding: 50px 0;

    h4 {
        font-size: 25px;
        margin-bottom: 20px;
    }
    .links {
        list-style: none;
        li {
            font-size: 14px;
            font-weight: 400;
            margin-bottom: 18px;
            a {
                color: #505050;
                text-decoration: none;
                font-size: 15px;
                font-weight: 400;
                transition: all 0.3s ease;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
        img {
            width: 20px;
            height: 20px;
        }
        span {
            margin-right: 10px;
        }
    }
    .social-media {
        list-style: none;
        display: flex;
        margin-top: 30px;
        justify-content: space-between;
        align-content: center;
        max-width: 250px;
        li {
            width: 55px;
            height: 45px;
            border-radius: 50%;
            margin-right: 10px;
            line-height: 3.8;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;

            img {
                width: 25px;
                height: 25px;
                transition: transform 0.3s ease;
            }
            svg {
                transition: transform 0.3s ease;
            }
            &:hover {
                // background: white;
                // border: 2px solid #4b4b4b;
                transform: translateY(-5px);
                box-shadow: 0 1px 0px rgba(0, 0, 0, 0.1);

                img,
                svg {
                    transform: scale(1.1);
                }

                svg {
                    fill: #4b4b4b !important;
                }
            }
        }
    }
}
.footer-bottom {
    p {
        font-size: 20px;
        font-weight: 400;
    }
    .payment-method {
        list-style: none;

        li {
            transition: all 0.3s ease;

            img {
                width: 55px;
                height: 45px;
                transition: transform 0.3s ease;
            }
            display: inline-block;
            margin-right: 20px;
            cursor: pointer;
            &:hover {
                // background: white;
                // border: 2px solid #4b4b4b;
                transform: translateY(-5px);
                // box-shadow: 0 1px 0px rgba(0, 0, 0, 0.1);

                img,
                svg {
                    transform: scale(1.1);
                }

                svg {
                    fill: #4b4b4b !important;
                }
            }
        }
        // display: flex;
        // justify-content: space-evenly;
        // align-content: center;
    }
}
</style>
