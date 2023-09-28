<template>
    <section class="contribute-section">
        <div class="contribute-image">
            <img src="@/assets/contribute-image.png" alt="Contribute Image" class="blur-image" />
            <img src="@/assets/jackson-ems-logo.png" alt="Jackson EMS Logo" class="logo-image" />

            <div class="contribute-overlay">
                <div class="contribute-list">
                    <ul>
                        <li>HISTORY</li>
                        <li>OFFICERS</li>
                        <li><strong>CONTRIBUTE</strong></li>
                    </ul>
                </div>
                <div class="contribute-content">
                    <h2>CONTRIBUTE TO JACKSON EMS</h2>
                    <p1>
                        The Jackson Township First Aid Squad, a registered 501(c)(3) tax-exempt organization,
                        tirelessly offers round-the-clock ambulance service to Jackson Township throughout the year.
                        Responding to almost six thousand calls annually across the entire town, your support is invaluable
                        in sustaining our mission. We warmly welcome and deeply appreciate your tax-deductible donations, which
                        enable us to continue our vital work in the community.
                    </p1>
                    <button class="donate-btn">DONATE ONLINE</button>
                    <h3 class="mail-header">DONATE BY MAIL</h3>
                    <img src="@/assets/mail-image.png" alt="Mail Icon" class="mail-icon" />
                    <p class="mail-info">
                        Jackson Township First Aid Squad<br>
                        38 E Veterans Hwy<br>
                        Jackson, NJ 08527.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .contribute-section {
        display: flex;
    }

    .contribute-image {
        position: relative;
        flex: 1;
    }

    .blur-image, .logo-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .blur-image {
        filter: blur(2px);
    }

    .logo-image {
        position: absolute;
        top: 20px; /* Adjust as needed */
        right: 20px; /* Adjust as needed */
        width: auto; /* Reset to auto */
        height: 100px; /* Adjust as needed */
    }

    .contribute-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        background: rgb(0, 0, 0, 0.85);
        z-index: 2;
    }

    .contribute-list {
        width: 20%;
        padding: 20px;
        padding-bottom: 26%;
        text-align: left;
    }

        .contribute-list ul {
            list-style: none;
            padding: 0;
        }

        .contribute-list li {
            margin-bottom: 20px;
            color: white;
        }

    .contribute-content {
        color: white;
        padding: 250px;
        padding-bottom: 30%;
        position: relative; /* for positioning donate button and mail info */
        z-index: 2;
    }

    .donate-btn {
        position: absolute;
        bottom: 30%; /* adjust as needed */
        left: 25%;
        background-color: white; /* adjust color as needed */
        color: black;
        border: ;
        padding: 10px 20px;
        cursor: pointer;
    }

    .donate-btn {
        position: absolute;
        bottom: 35%; /* adjust as needed */
        left: 15%;
        background-color: white; /* Blue, but adjust as needed */
        color: black;
        border: none;
        width: 350px; /* Adjust width */
        height: 75px; /* Adjust height */
        font-size: 25px; /* Adjust font size */
        font-weight: bold;
        padding: 15px 30px; /* Adjust padding for height and width */
        cursor: pointer;
        border-radius: 5px;
        transition: background-color 0.3s;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }

        .donate-btn:hover {
            background-color: #003064; /* Darker blue on hover */
        }

    .mail-info {
        position: absolute;
        bottom: 30%; /* adjust as needed */
        right: 15%;
        color: white;
    }

    .mail-header {
        font-size: xxx-large;
        position: absolute;
        bottom: 36%; /* adjusted position to account for header height */
        right: 15%;
        color: white;
        text-decoration: underline;
    }

    .mail-info {
        position: absolute;
        font-size: large;
        bottom: 31%; /* adjust as needed */
        right: 15%;
        color: white;
    }

    .mail-icon {
        position: absolute;
        bottom: 31%;
        right: 33%;
        width: 100px;
        height: auto;
    }

    h2 {
        text-align: center;
        font-size: xxx-large;
    }

    p1 {
        text-align: center;
        font-size: larger;
    }
</style>
