<template>
    <section class="history-section">
        <div class="history-image">
            <img src="@/assets/history-image.png" alt="History Image" class="blur-image" />
            <img src="@/assets/jackson-ems-logo.png" alt="Jackson EMS Logo" class="logo-image" />
            <div class="history-overlay">
                <div class="history-list">
                    <ul>
                        <li><strong>HISTORY</strong></li>
                        <li>OFFICERS</li>
                        <li>CONTRIBUTE</li>
                    </ul>
                </div>
                <div class="history-content">
                    <h2>CELEBRATING SIXTY YEARS OF SERVICE</h2>
                    <p>
                        The Jackson Township First Aid Squad was formed in 1953. Over the
                        years, much has changed, as the "Cadillac ambulances" of the early
                        years, pictured right, have given way to modern box ambulances, and
                        as Jackson Township has transformed from a rural community of a few
                        thousand to a much larger suburban community of over 50,000, with
                        many more visitors, especially during the summer months.
                    </p>
                    <p>
                        In May, 1953, the First Aid Squad began with eight members, who ran a
                        total of twelve emergency calls that year in a second-hand ambulance.
                        Jackson had a population of approximately 3,500. Ten years later, by 1963,
                        the Squad had run 438 calls in a community of about 6,000 - an increase of
                        112 calls over the previous year. In May 1966, the new Squad building, which
                        had been built mostly by the members, was dedicated on what is now East Veteran's
                        Highway (and what was then simply Route 528 in Van Hiesville, Jackson Township).
                        The Squad still operates from this building, which has been expanded over the years.
                    </p>
                    <p>
                        In 1969, development on the east side of Jackson lead to the construction
                        of the Squad's first sub-station, Station 2, on the corner of Larsen Road
                        and North New Prospect Road. Prior to Station 2's construction, an ambulance
                        had to be stationed a member's home to be available for calls in that portion
                        of the Town. By the Squad's 20th Anniversary, in 1973, calls totaled 1,084,
                        with the Squad operating as Jackson's sole emergency ambulance service, 24 hours a day, every day.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .history-section {
        /* Style the section as needed */
        display: flex;
    }

    .history-image {
        position: relative;
        flex: 1; /* Take up all available space */
    }

    .blur-image {
        width: 100%;
        height: 100%; /* Make the image cover the entire container */
        object-fit: cover; /* Ensure the image covers the container without distortion */
        filter: blur(7px); /* Add a 20% blur to the image */
    }

    .history-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%; /* Adjust width as needed */
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row; /* Set the direction to row to place content side by side */
        background: rgba(125, 0, 0, 0.85); /* Use the same red color (7D0000) with the same opacity*/
        z-index: 2; /* Makes sure the overlay content appears on top of the darkening layer CHECK LATER*/
    }

    .history-list {
        /* Style the list container */
        width: 20%; /* Adjust width as needed */
        padding: 20px; /* Add padding to space it from the content */
        padding-bottom: 26%;
        text-align: left; /* Align text to the left */
    }

        .history-list ul {
            /* Style the list */
            list-style: none;
            padding: 0;
        }

        .history-list li {
            /* Style list items */
            margin-bottom: 20px;
            color: white; /* Set text color */
        }

    .history-content {
        text-align: left; /* Align text to the left */
        color: white;
        padding: 250px; /* adjust later */
        padding-bottom: 30%; /* adjust later */
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
        font-size:larger;
    }

    /* Customize the styles further as needed */
</style>
