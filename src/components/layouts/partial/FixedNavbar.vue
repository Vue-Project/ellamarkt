<template>
    <div class="fixed-header">
        <v-app-bar color="#151880">
            <!-- <v-app-bar-nav-icon @click="openCart"></v-app-bar-nav-icon> -->
            <v-container fluid>
                <v-row>
                    <v-col cols="3" class="d-flex align-center">
                        <img src="@/assets/images/logo.png" alt="Logo " />
                    </v-col>
                    <v-col cols="5">
                        <ul class="d-flex align-items-center justify-space-between" style="list-style: none">
                            <li v-for="link in navLinks" :key="link.name">
                                {{ link.name }}
                            </li>
                        </ul>
                    </v-col>

                    <v-col cols="4">
                        <div class="top-header-right justify-end">
                            <ul class="top-header-icons justify-end">
                                <!-- <li>
                                    <span>
                                        <SearchIcon />
                                    </span>
                                </li> -->
                                <li @click="openCart">
                                    <span>
                                        <v-badge location="right top" content="2" color="red" offset-x="-10" inline></v-badge>
                                        <CartIcon />
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>
    </div>
</template>
<script>
import CartIcon from "@/components/SVG/CartIcon.vue";
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
        };
    },
    components: {
        CartIcon,
        SearchIcon,
    },
    methods: {
        openCart() {
            this.Emitter.emit("openCart");
        },
    },
};
</script>
<style lang="scss" scoped>
.fixed-header {
    header {
        top: 0 !important;
    }
}
.search-icon {
    position: relative !important;
    right: -180px;
}
.icon-search {
    width: 90px;
    height: 25px;
    margin: 0;
    position: relative;
    top: 0 !important;
    fill: red !important;
}
.v-row {
    align-items: center !important;
}
</style>
