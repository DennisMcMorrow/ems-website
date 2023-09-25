<template>
    <div class="home-view">
        <MainImage />
        <HistorySection />
        <OfficersSection />
        <!-- ... other content ... -->
    </div>
</template>

<script>
    import MainImage from '@/components/MainImage.vue';
    import HistorySection from '@/components/HistorySection.vue';
    import OfficersSection from "@/components/OfficersSection.vue";

    export default {
        components: {
            MainImage,
            HistorySection,
            OfficersSection,
        }
    };
</script>


<style scoped>
    /* Any styles specific to the HomeView can go here. */
</style>
