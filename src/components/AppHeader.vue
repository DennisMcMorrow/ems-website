<template>
    <header class="header">
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
            <a href="https://www.facebook.com/JTFAS/" target="_blank" title="Jackson EMS on Facebook"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
            <a href="https://www.instagram.com/jtems22/" target="_blank" title="Jackson EMS on Instagram"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
        </div>
    </header>
</template>

<script>
    export default {
        name: "AppHeader",
    };
</script>

<style scoped>
    .header {
        display: flex; /* Makes header a flex container */
        justify-content: center; /* Mainly centers .nav-links */
        align-items: center; /* Vertically centers the content */
        height: 100px; /* Or any height you prefer for the header */
        background-color: black;
        padding: 0 20px; /* Some padding on the left and right sides for spacing */
        position: relative; /* To absolutely position .social-icons in relation to .header */
        font-size: x-large;
    }

    .nav-links {
        display: flex; /* Makes nav-links a flex container */
        gap: 50px; /* A space between each link */
        justify-content: center; /* Ensures the links themselves are centered */
        width: 100%; /* Makes sure .nav-links take up the full width */
        transition: color 0.9s;
    }

        .nav-links a {
            color: white;
            text-decoration: none;
            transition: color 0.3s;
        }

            .nav-links a:hover {
                color: #0051a8; /* Darker blue on hover */
            }

    .social-icons a {
        color: white;
        text-decoration: none;
        transition: color 0.3s;
    }

        .social-icons a:hover {
            color: #0051a8; /* Darker blue on hover */
        }

    .social-icons {
        display: flex; /* To layout the icons in a row */
        gap: 25px; /* A space between each icon */
        position: absolute; /* Absolutely positions the icons */
        right: 20px; /* Positions the icons 20px from the right edge of .header */
        top: 50%; /* Starts the icons at the vertical middle of .header */
        transform: translateY(-50%); /* Moves the icons up by half their height to vertically center them */
    }
</style>

