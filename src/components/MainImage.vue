<template>
    <div class="main-image-wrapper">
        <img src="@/assets/main-page-image.jpg" alt="Main Page Image" class="main-image">

        <div class="overlay-content">
            <img src="@/assets/jackson-ems-logo.png" alt="Jackson EMS Logo" class="logo">
            <h1>JACKSON TOWNSHIP FIRST AID SQUAD</h1>
            <p>Providing volunteer EMS service to the Township of Jackson in Ocean County, New Jersey since 1953.</p>
            <button>Join Us</button>
            <button>Recent News</button>
        </div>
    </div>
</template>

<style scoped>
    .main-image-wrapper {
        position: relative;
        overflow: hidden;
    }

        .main-image-wrapper::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to bottom, rgba(0, 0, 0, 1.0), transparent);
            background-color: rgba(0, 0, 0, 0.5); /* Black with 50% opacity */
            mix-blend-mode: multiply;
            pointer-events: none;
        }

    .main-image {
        width: 100%;
        display: block;
    }

    .overlay-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); /* Centers the content on the image */
        text-align: center; /* Center aligns the text content */
        z-index: 2; /* Makes sure the overlay content appears on top of the darkening layer */
    }

    .logo {
        width: 150px; /* Adjust as necessary */
        margin-bottom: 20px;
    }

    h1 {
        font-size: 24px; /* Adjust as necessary */
        color: white;
        margin-bottom: 15px;
    }

    p {
        font-size: 18px; /* Adjust as necessary */
        color: white;
        margin-bottom: 20px;
    }

    button {
        background-color: #007BFF; /* Blue, but adjust as needed */
        color: white;
        border: none;
        padding: 10px 20px;
        margin: 5px;
        cursor: pointer;
        border-radius: 5px;
        transition: background-color 0.3s;
    }

        button:hover {
            background-color: #0056b3; /* Darker blue on hover */
        }
</style>
