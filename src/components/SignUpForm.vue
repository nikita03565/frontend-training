<template>
  <form v-if="!loading" class='form text-light signup' @submit.prevent="signup">
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" id="username" v-model="username" class="form-control validate" placeholder="Enter username"/>
      <span class="helper-text" data-error="Username must not be empty"></span>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" class=" form-control validate" placeholder='example@gmail.com'/>
      <span class="helper-text" data-error="Email must not be empty"></span>
    </div>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name" class="form-control  validate" placeholder="Your name"/>
      <span class="helper-text" data-error="Name must not be empty"></span>
    </div>
    <div class="form-group">
      <label for="password1">Password</label>
      <input type="password" id="password1" v-model="password1" class=" form-control validate" placeholder="Password"/>
      <span class="helper-text" data-error="Password must not be empty"></span>
    </div>
    <div class="form-group">
      <label for="password2">Confirm password</label>
      <input type="password" id="password2" v-model="password2" class=" form-control validate" placeholder="Password again"/>
      <span class="helper-text" data-error="Password must not be empty"></span>
    </div>
    <button type="submit" class="btn btn-primary">SignUp</button>
  </form>
</template>

<script>
export default {
  name: "SignUpForm",
  data() {
    return {
      loading: false,
      name: "",
      username: "",
      email: "",
      password1: "",
      password2: ""
    };
  },
  methods: {
      signup: function () {
        let data = {
          name: this.name,
          username: this.username,
          email: this.email,
          password: this.password,
          //is_admin: this.is_admin
        }
        this.$store.dispatch('signup', data)
       .then(() => this.$router.push('/'))
       .catch(err => console.log(err))
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
