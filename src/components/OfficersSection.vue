<template>
    <section class="officers-section">
        <div class="officers-image">
            <img src="@/assets/officers-image.png" alt="Officers Image" class="blur-image" />
            <img src="@/assets/jackson-ems-logo.png" alt="Jackson EMS Logo" class="logo-image" />
            <div class="officers-overlay">
                <div class="officers-list">
                    <ul>
                        <li><strong>OFFICERS</strong></li>
                        <li>HISTORY</li>
                        <li>CONTRIBUTE</li>
                    </ul>
                </div>
                <div class="officers-content">
                    <h2>BOARD OF DIRECTORS</h2>
                    <ul>
                        <li>President Nicholas Baier</li>
                        <li>Vice-President Daniel Vanderclute</li>
                        <li>Secretary Deborah Visconi</li>
                        <li>Treasurer Nicole Couceiro</li>
                        <li>Diane Stanaway</li>
                    </ul>
                    <h2>LEADERSHIP</h2>
                    <ul>
                        <li>Chief Al Couceiro</li>
                        <li>Supervisor Pat Handel</li>
                        <li>Supervisor Shawn McNally</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .officers-section {
        display: flex;
    }

    .officers-image {
        position: relative;
        flex: 1;
    }

    .blur-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: blur(7px);
    }

    .officers-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        background: rgb(255, 255, 255, 0.85);
        z-index: 2;
    }

    .officers-list {
        width: 20%;
        padding: 20px;
        padding-bottom: 26%;
        text-align: left;
    }

        .officers-list ul {
            list-style: none;
            padding: 0;
        }

        .officers-list li {
            margin-bottom: 20px;
            color: #7D0000;
        }

    .officers-content {
        text-align: left;
        color: #7D0000;
        padding: 250px;
        padding-bottom: 30%;
    }

    .logo-image {
        position: absolute;
        top: 20px; /* Adjust as needed */
        right: 20px; /* Adjust as needed */
        width: auto; /* Reset to auto */
        height: 100px; /* Adjust as needed */
    }

    h2 {
        font-size: xxx-large;
    }

    p {
        font-size: larger;
    }
</style>
