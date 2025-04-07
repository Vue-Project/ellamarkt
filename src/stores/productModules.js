import { defineStore } from "pinia";
import axios from "axios";

export const useProductModules = defineStore("productModules", {
    stare: () => ({
        flashDeals: [],
        beautyDeals: [],
    }),
    actions: {
        async getFlashDeals() {
            await axios
                .get("https://dummyjson.com/products")
                .then((res) => {
                    this.beautyDeals = res.data.products.filter((el) => el.category === "beauty");
                    this.flashDeals = res.data.products.slice(0, 8);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
});
