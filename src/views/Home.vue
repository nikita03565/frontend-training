<template>
  <div class="row">
    <div
      class="col s6"
      v-for="(event, index) in events"
      v-bind:item="event"
      :index="index"
      :key="event.id"
    >
      <div class="card">
        <div class="card-content">
            <p class="card-title">
                <h3>{{ event.title }}</h3>
                <p>{{ event.city }}, {{ event.date }}</p>
                <p>{{ event.description }} </p>
                <i class="small material-icons right">favorite_border</i>
            </p>
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
