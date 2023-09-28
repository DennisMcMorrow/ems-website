<template>
    <div class="home-view">
        <MainImage />
        <HistorySection />
        <OfficersSection />
        <ContributeSection />
        <!-- ... other content ... -->
    </div>
</template>

<script>
    import MainImage from '@/components/MainImage.vue';
    import HistorySection from '@/components/HistorySection.vue';
    import OfficersSection from "@/components/OfficersSection.vue";
    import ContributeSection from "@/components/ContributeSection.vue";

    export default {
        components: {
            MainImage,
            HistorySection,
            OfficersSection,
            ContributeSection,
        }
    };
</script>


<style scoped>
    /* Any styles specific to the HomeView can go here. */
</style>
