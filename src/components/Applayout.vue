<template>
    <v-layout>
        <AppHeader />
        <CardDrawer />

        <v-main>
            <slot></slot>
        </v-main>
        <AppFooter />
    </v-layout>
</template>
<script>
import AppHeader from "@/components/layouts/partial/partial/AppHeader.vue";
import AppFooter from "@/components/layouts/partial/partial/AppFooter.vue";
import CardDrawer from "@/components/layouts/partial/partial/CardDrawer.vue";
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
<style lang="scss"></style>
