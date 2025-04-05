import { defineStore } from "pinia";
import axios from "axios";

export const useProductModules = defineStore("productModules", {
    stare: () => ({
        flashDeals: [],
    }),
    actions: {
        async getFlashDeals() {
            await axios
                .get("https://dummyjson.com/products")
                .then((res) => {
                    this.flashDeals = res.data.products.slice(0, 8);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
});
