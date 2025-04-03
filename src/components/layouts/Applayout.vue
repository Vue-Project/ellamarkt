<template>
    <div class="layout">
        <v-layout>
            <CardDrawer />
            <v-main><slot></slot></v-main>
            <AppHeader />
            <AppFooter />
        </v-layout>
    </div>
</template>
<script>
import AppHeader from "@/components/layouts/partial/AppHeader.vue";
import AppFooter from "@/components/layouts/partial/AppFooter.vue";
import CardDrawer from "@/components/layouts/partial/CardDrawer.vue";
export default {
    data() {
        return {
            drawer: false,
        };
    },
    components: {
        AppHeader,
        AppFooter,
        CardDrawer,
    },
};
</script>
<style lang=""></style>
