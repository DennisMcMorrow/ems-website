<template>
  <section class="officers-section">
    <div class="officers-image">
      <img src="@/assets/officers-image.png" alt="Officers Image" class="blur-image" />
      <div class="officers-overlay">
        <div class="officers-list">
          <ul>
            <li><strong>Officers</strong></li>
            <li>History</li>
            <li>Contribute</li>
          </ul>
        </div>
        <div class="officers-content">
          <h2>MEET OUR DEDICATED OFFICERS</h2>
          <p>
            Our team of officers is committed to serving the Jackson Township
            community. Get to know the individuals who lead our First Aid Squad.
          </p>
          <!-- Add information about officers here -->
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.officers-section {
  /* Style the section as needed */
  display: flex;
}

.officers-image {
  position: relative;
  flex: 1; /* Take up all available space */
}

.blur-image {
  width: 100%;
  height: 100%; /* Make the image cover the entire container */
  object-fit: cover; /* Ensure the image covers the container without distortion */
  filter: blur(7px); /* Add a 20% blur to the image */
}

.officers-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* Adjust width as needed */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row; /* Set the direction to row to place content side by side */
}

.officers-list {
  /* Style the list container */
  width: 20%; /* Adjust width as needed */
  padding: 20px; /* Add padding to space it from the content */
  text-align: left; /* Align text to the left */
}

.officers-list ul {
  /* Style the list */
  list-style: none;
  padding: 0;
}

.officers-list li {
  /* Style list items */
  margin-bottom: 10px;
  color: white; /* Set text color */
}

.officers-content {
  text-align: left; /* Align text to the left */
  color: white;
  padding: 20px;
}

/* Customize the styles further as needed */
</style>
