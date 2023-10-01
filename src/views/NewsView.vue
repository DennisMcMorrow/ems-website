<template>
    <div class="news-view">
        <div class="event-info">
            <!-- Display the event or news details here -->
            <div v-for="(event, date) in events" :key="date">
                <h3>{{ event.title }}</h3>
                <p>{{ event.details }}</p>
                <hr>
            </div>
        </div>
        <VCalendar v-model="date"
                   @click="loadEvent"
                   class="fixed-calendar" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                date: new Date(),
                events: {
                    '2023-09-01': { title: 'Event for Sep 1', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt semper fermentum.' },
                    '2023-09-02': { title: 'Event for Sep 2', details: 'Proin facilisis justo non purus feugiat, in dignissim tellus fringilla.' },
                    '2023-09-03': { title: 'Event for Sep 3', details: 'Suspendisse potenti. Aenean vitae nunc non elit tincidunt vehicula.' },
                    // ... More sample events
                }
            };
        },
        created() {
            // Generate dummy event data for each day of the month
            for (let i = 4; i <= 30; i++) {
                this.events[`2023-09-${i.toString().padStart(2, '0')}`] = {
                    title: `Event for Sep ${i}`,
                    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt semper fermentum. Proin facilisis justo non purus feugiat, in dignissim tellus fringilla. Suspendisse potenti. Aenean vitae nunc non elit tincidunt vehicula. Date: Sep ${i}`
                };
            }
        },
        methods: {
            loadEvent() {
                // This method remains unchanged
            }
        }
    };
</script>

<style scoped>
    .news-view {
        display: flex;
    }

    .event-info {
        flex: 1;
        overflow-y: auto;
        height: 100vh;
        padding: 20px;
    }

    .fixed-calendar {
        position: fixed;
        right: 0;
        top: 0;
        width: 300px; /* Adjust the width as desired */
        height: 100vh;
    }
    .event-info::-webkit-scrollbar {
  display: none; /* Chrome, Safari, newer versions of Opera */
}

.event-info {
  /* ... other styles ... */
  
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

</style>
