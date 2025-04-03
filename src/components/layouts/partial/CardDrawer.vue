<template>
    <div class="card-drawer">
        <v-navigation-drawer v-model="drawer" location="right" temporary>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat dolores hic nostrum nisi velit consectetur est et quis quia voluptates consequatur a praesentium magnam maiores,
                repellat vitae. Eos fugiat, quos cumque alias voluptatem ex enim aliquid sint quidem deleniti distinctio omnis repudiandae perspiciatis magnam nam nobis aspernatur officiis molestias
                blanditiis?
            </p>
        </v-navigation-drawer>
    </div>
</template>
<script>
export default {
    name: "CardDrawer",
    inject: ["Emitter"],
    data() {
        return {
            drawer: false,
        };
    },
    mounted() {
        this.Emitter.on("openCart", () => {
            this.drawer = true;
        });
    },
};
</script>
<style lang=""></style>
