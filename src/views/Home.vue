<template>
  <div class="row">
    <div
      class="col"
      v-for="(event, index) in events"
      v-bind:item="event"
      :index="index"
      :key="event.id"
    >
      <div class="card bg-secondary text-light">
        <div class="card-body" style="width: 18rem;">
          <h3 class="card-title">{{ event.title }}</h3>
          <p class="card-subtitle mb-2 text-light">{{ event.city }}, {{ event.date }}</p>
          <p class="card-text">{{ event.description }}</p>
          <i class="small material-icons right">favorite_border</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventService from "../service";
const eventService = new EventService();
export default {
  name: "Home",
  data() {
    return {
      events: []
    };
  },
  created() {
    eventService
      .getAll()
      .then(res => {
        this.events = res.data;
        console.log(this.events);
      })
      .catch(err => console.error(err));
  }
};
</script>


<style>
body {
  background-color: #0D0D0D;
}

.card {
  margin-top: 5px;
}
</style>
