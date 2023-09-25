<template>
    <div class="main-image-wrapper">
        <img src="@/assets/main-page-image.jpg" alt="Main Page Image" class="main-image">
        <div class="overlay-content">
            <div class="logo-container">
                <img src="@/assets/jackson-ems-logo.png" alt="Jackson EMS Logo" class="logo" />
            </div>
            <h1>JACKSON TOWNSHIP FIRST AID SQUAD</h1>
            <p>Providing volunteer EMS service to the Township of Jackson in Ocean County, New Jersey since 1953.</p>
            <button>Join Us</button>
            <button>Recent News</button>
        </div>
        <div class="arrow-container">
            <div class="arrow" @click="scrollToHistory" @mouseover="highlightArrows" @mouseleave="resetArrows"></div>
            <div class="arrow" @click="scrollToHistory" @mouseover="highlightArrows" @mouseleave="resetArrows"></div>
            <div class="arrow" @click="scrollToHistory" @mouseover="highlightArrows" @mouseleave="resetArrows"></div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            scrollToHistory() {
                // Use JavaScript to scroll to the next section (history-section)
                const historySection = document.querySelector('.history-section');
                if (historySection) {
                    historySection.scrollIntoView({ behavior: 'smooth' });
                }
            },
            // eslint-disable-next-line
            highlightArrows(event) {
                // Add a class to highlight all arrows when one of them is hovered
                const arrows = document.querySelectorAll(".arrow");
                arrows.forEach((arrow) => {
                    arrow.classList.add("highlighted-arrow");
                });
            },
            // eslint-disable-next-line
            resetArrows(event) {
                // Remove the highlighting class when the mouse leaves
                const arrows = document.querySelectorAll(".arrow");
                arrows.forEach((arrow) => {
                    arrow.classList.remove("highlighted-arrow");
                });
            },
        },
    };
</script>

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

    .logo-container {
        display: inline-block; /* Ensure the container only takes up as much space as the image */
        padding: 5px; /* Adjust padding to control the distance between the image and the shadow */
        filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5)); /* Add a drop shadow using filter */
    }

    .logo {
        width: 300px; /* Adjust the image width as needed */
        /* Add other styles for your logo as needed */
    }

    h1 {
        font-size: 48px; /* Adjust as necessary */
        color: white;
        margin-bottom: 15px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    p {
        font-size: 20px; /* Adjust as necessary */
        color: white;
        margin-bottom: 20px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    button {
        background-color: #0056b3; /* Blue, but adjust as needed */
        color: white;
        border: none;
        width: 200px; /* Adjust width */
        height: 50px; /* Adjust height */
        font-size: 20px; /* Adjust font size */
        padding: 15px 30px; /* Adjust padding for height and width */
        margin: 5px;
        margin-top: 50px;
        margin-bottom: 200px;
        cursor: pointer;
        border-radius: 5px;
        transition: background-color 0.3s;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

        button:hover {
            background-color: #003064; /* Darker blue on hover */
        }

    /* Positioning for the arrow container */
    .arrow-container {
        position: absolute;
        top: 10%; /* Adjust as needed to vertically center the arrows */
        left: 10%; /* Adjust the left position to move it to the left side */
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
    }

    /* Style for the arrows */
    .arrow {
        width: 60px;
        height: 60px;
        background-color: #ffffff00; /* Background color of the arrow */
        border: 2px solid #808080; /* Border color of the arrow */
        border-width: 4px 4px 0 0;
        transform: rotate(135deg);
        margin-bottom: -20px; /* Adjust the spacing between arrows */
        cursor: pointer;
    }

    .highlighted-arrow {
        border-color: #0056b3; /* Change to your desired border color */
        transition: border-color 0.3s;
    }

</style>
