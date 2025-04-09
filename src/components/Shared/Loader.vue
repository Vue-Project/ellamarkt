<template lang="">
    <section class="loader">
        <v-container>
            <v-row>
                <v-col :cols="columnNumber" v-for="nub in NumberOfSkeleton" key="nub">
                    <v-skeleton-loader type="image,article,button"></v-skeleton-loader>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
<script>
import { VSkeletonLoader } from "vuetify/lib/components";
export default {
    components: {
        VSkeletonLoader,
    },
    props: {
        columnNumber: {
            type: Number,
            isrequired: false,
        },
        NumberOfSkeleton: {
            type: Number,
            isrequired: false,
        },
    },
};
</script>
<style lang=""></style>
