import { defineStore } from "pinia";
import axios from "axios";

export const useProductModules = defineStore("productModules", {
    stare: () => ({
        flashDeals: [],
        beautyDeals: [],
        furnitureDeals: [],
        groceriesDeals: [],
        fragrancesDeals: [],
    }),
    actions: {
        async getFlashDeals() {
            await axios
                .get("https://dummyjson.com/products")
                .then((res) => {
                    this.beautyDeals = res.data.products.filter((el) => el.category === "beauty");
                    this.furnitureDeals = res.data.products.filter((el) => el.category === "furniture");
                    this.groceriesDeals = res.data.products.filter((el) => el.category === "groceries");
                    this.fragrancesDeals = res.data.products.filter((el) => el.category === "fragrances");
                    this.flashDeals = res.data.products.slice(0, 8);
                    console.log(res.data.products); // Aquí puedes verificar los datos en la consola del navegador
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
});
