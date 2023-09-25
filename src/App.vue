<template>
    <div id="app">
        <AppHeader />
        <router-view />
        <AppFooter />
    </div>
</template>

<script>
    import AppHeader from '@/components/AppHeader.vue';
    import AppFooter from '@/components/AppFooter.vue';

    export default {
        components: {
            AppHeader,
            AppFooter
        }
    }
</script>

<style>
    body, html {
        margin: 0;
        padding: 0;
        font-family: 'ABeeZee', sans-serif;
    }
</style>