<template>
  <div class="row">
    <div
      class="col"
      v-for="(event, index) in events"
      v-bind:item="event"
      :index="index"
      :key="event.id"
    >
      <div class="card">
        <div class="card-content">
            <div class="card-title">
                <h3>{{ event.title }}</h3>
                <p>{{ event.city }}, {{ event.date }}</p>
                <p class='limit-chars'>{{ event.description }} </p>
                <i class="small material-icons right">favorite_border</i>
            </div>
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


<style scoped>

</style>
