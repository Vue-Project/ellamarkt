<template lang="">
    <div class="app-header">
        <v-app-bar>
            <v-app-bar-nav-icon @click="openCart"></v-app-bar-nav-icon>
        </v-app-bar>
    </div>
</template>
<script>
export default {
    name: "AppHeader",
    inject: ["Emitter"],
    methods: {
        openCart() {
            this.Emitter.emit("openCart");
        },
    },
};
</script>
<style lang=""></style>
