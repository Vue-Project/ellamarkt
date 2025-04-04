<template>
    <div class="app-header">
        <v-app-bar color="#151880">
            <!-- <v-app-bar-nav-icon @click="openCart"></v-app-bar-nav-icon> -->
            <v-container fluid>
                <v-row>
                    <v-col cols="3">
                        <img src="@/assets/images/logo.png" alt="Logo " />
                    </v-col>
                    <v-col cols="5">
                        <div class="searchInput">
                            <input class="py-2 px-3 rounded-xl bg-white" style="outline: none" type="text" name="inputSearch" id="inputSearch" aria-label="Search" placeholder="search in Store" />
                            <SearchIcon />
                        </div>
                    </v-col>
                    <v-col cols="4">
                        <div class="top-header-right">
                            <div class="available">
                                <p>available 24/7 at</p>
                                <strong>(090)-123-4567</strong>
                            </div>
                            <ul class="top-header-icons">
                                <li>
                                    <span>
                                        <HeartIcon />
                                    </span>
                                    <p>wish list</p>
                                </li>
                                <li>
                                    <span><UserIcon /></span>
                                    <p>sign in</p>
                                </li>
                                <li @click="openCart">
                                    <span>
                                        <v-badge location="right top" content="2" color="#0a6cdc" offset-x="-10" inline></v-badge>
                                        <CartIcon />
                                    </span>
                                    <p>cart</p>
                                </li>
                            </ul>
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <ul class="d-flex align-items-center justify-space-between" style="list-style: none">
                            <li v-for="link in navLinks" :key="link.name">
                                {{ link.name }}
                            </li>
                        </ul>
                    </v-col>
                    <v-col cols="2"></v-col>
                    <v-col cols="4">
                        <div class="bottom-header-right d-flex justify-end" id="lang-btn">
                            <div class="helper d-flex align-items-center mr-5">
                                <span>
                                    <PersonCallIcon />
                                </span>
                                <p>help</p>
                            </div>
                            <div class="lang d-flex align-items-center">
                                <span>
                                    <v-icon v-if="!selectedLang.length"><img src="@/assets/SVGS/en-lang.svg" alt="" /></v-icon>
                                    <img v-else style="width: 20px; height: 20px" :src="require(`@/assets/SVGS/${selectedLang[0].icon}`)" :alt="selectedLang[0].lang" />
                                </span>
                                <p>{{ selectedLang.length ? `${selectedLang[0].lang}/${selectedLang[0].currency}` : "EN/USD" }}</p>
                                <span><v-icon>mdi-chevron-down</v-icon></span>
                            </div>

                            <v-menu activator="#lang-btn">
                                <v-list v-model:selected="selectedLang">
                                    <v-list-item v-for="lang in languages" :key="lang.lang" :value="lang">
                                        <v-list-item-title>
                                            <img style="width: 20px; height: 20px" :src="require(`@/assets/SVGS/${lang.icon}`)" :alt="lang.lang" />
                                            {{ lang.lang }}\{{ lang.currency }}
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>
    </div>
</template>
<script>
import HeartIcon from "@/components/SVG/HeartIcon.vue";
import CartIcon from "@/components/SVG/CartIcon.vue";
import UserIcon from "@/components/SVG/UserIcon.vue";
import PersonCallIcon from "@/components/SVG/PersonCallIcon.vue";
import SearchIcon from "@/components/SVG/SearchIcon.vue";

export default {
    name: "AppHeader",
    inject: ["Emitter"],
    data() {
        return {
            navLinks: [
                {
                    name: "Theme Dome",
                    href: "#",
                },
                {
                    name: "Shop",
                    href: "#",
                },
                {
                    name: "Products",
                    href: "#",
                },
                {
                    name: "New iN",
                    href: "#",
                },
                {
                    name: "Must Have",
                    href: "#",
                },
                {
                    name: "Collection",
                    href: "#",
                },
                {
                    name: "Pages",
                    href: "#",
                },
                {
                    name: "But Ella",
                    href: "#",
                },
            ],
            languages: [
                {
                    icon: "en-lang.svg",
                    lang: "EN",
                    currency: "USD",
                },
                {
                    icon: "de-lang.svg",
                    lang: "DE",
                    currency: "EUR",
                },
            ],
            selectedLang: [],
        };
    },
    components: {
        HeartIcon,
        CartIcon,
        UserIcon,
        PersonCallIcon,
        SearchIcon,
    },
    methods: {
        openCart() {
            this.Emitter.emit("openCart");
        },
    },
};
</script>
<style lang="scss">
.top-header-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.top-header-icons {
    list-style: none;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    li {
        cursor: pointer;
        span,
        p {
            font-size: 15px;
            color: #e2b131;
        }
    }
}
.v-toolbar__content {
    height: fit-content !important;
}
.bottom-header-right {
    span {
        padding-right: 5px;
    }
}
.v-list {
    max-width: 120px;
    width: 120px;
    margin-left: auto;
    img {
        position: relative;
        top: 5px;
    }
}
.lang {
    img {
        width: 25px;
        height: 25px;
    }
}
.searchInput {
    width: 90%;
    position: relative;
    input {
        width: 100%;
        cursor: pointer;
    }
}
.v-badge {
    position: absolute;
    top: 10px;
    right: 5px;
    z-index: 9999999999;
}
</style>
