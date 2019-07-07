<template>
  <form v-if="!loading" class='form text-light signin' @submit.prevent="signin">
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" id="username" v-model="username" class="form-control validate" placeholder="Enter username" required/>
      <span class="helper-text" data-error="Username must not be empty"></span>
    </div>
    <div class="form-group">
      <label for="passowrd1">Password</label>
      <input type="password" id="password1" v-model="password" class=" form-control validate" placeholder="Password" required/>
      <span class="helper-text" data-error="Password must not be empty"></span>
    </div>
    <button type="submit" class="btn btn-primary">SignIn</button>
  </form>
</template>

<script>
export default {
  name: "SignInForm",
  data() {
    return {
      loading: false,
      username: "",
      password: ""
    };
  },
  methods: {
      signin: function () {
        let username = this.username 
        let password = this.password
        this.$store.dispatch('signin', { username, password })
       .then(() => this.$router.push('/'))
       .catch(err => console.log(err.response))
      }
    }
};
</script>

<style>
.form {
    margin: auto;
    margin-top: 5%;
    width: 50%;
}
</style>
