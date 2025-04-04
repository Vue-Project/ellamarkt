<template>
    <app-layout>
        <router-view />
    </app-layout>
</template>
<script>
import Applayout from "@/components/layouts/Applayout.vue";
export default {
    name: "HomePage",
    components: {
        "app-layout": Applayout,
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
.v-main {
    padding-top: 140px !important;
}
.v-layout {
    position: relative;
}
</style>
