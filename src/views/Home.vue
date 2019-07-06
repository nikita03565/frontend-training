<template>
  <div class="row">
    <div
      class="col"
      v-for="(event, index) in getAllEvents"
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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  computed: mapGetters(["getAllEvents"]),
  methods: mapActions(["fetchAllEvents"]),
  async mounted() {
    this.fetchAllEvents(); 
  }
};
</script>


<style>
body {
  background-color: #0d0d0d;
}

.card {
  margin-top: 5px;
}
</style>
