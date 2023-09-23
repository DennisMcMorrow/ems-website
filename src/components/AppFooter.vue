<template>
    <footer class="footer">
        <!-- Navigation links -->
        <nav class="nav-links">
            <a href="#">ABOUT</a>
            <a href="#">CALENDAR</a>
            <a href="#">STANDBY REQUEST</a>
            <a href="#">BILLING</a>
            <a href="#">CONTACT US</a>
        </nav>

        <!-- Social media and donation icons -->
        <div class="social-icons">
            <a href="#" title="Donate via PayPal"><font-awesome-icon icon="money-bill" /></a>
            <a href="https://www.facebook.com/JacksonEMS" target="_blank" title="Jackson EMS on Facebook"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
            <a href="https://twitter.com/JacksonEMS" target="_blank" title="Jackson EMS on Twitter"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
            <a href="https://www.instagram.com/JacksonEMS" target="_blank" title="Jackson EMS on Instagram"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "AppFooter",
    };
</script>

<style scoped>
    .footer {
        display: flex; /* Makes footer a flex container */
        justify-content: space-between; /* Pushes nav-links to the left and social-icons to the right */
        align-items: center; /* Vertically centers the content */
        height: 60px; /* Or any height you prefer for the footer */
        background-color: black;
        padding: 0 20px; /* Some padding on the left and right sides for spacing */
    }

    .nav-links {
        display: flex; /* Makes nav-links a flex container to layout its children (the links) in a row */
        gap: 15px; /* A space between each link */
    }

        .nav-links a, .social-icons a {
            color: white;
            text-decoration: none;
        }

    .social-icons {
        display: flex; /* To layout the icons in a row */
        gap: 15px; /* A space between each icon */
    }
</style>
