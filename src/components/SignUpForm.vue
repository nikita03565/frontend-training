<template>
  <form v-if="!loading" class="form" v-on:submit="onSubmit">
    <div class="input-field">
      <label for="username">Username</label>
      <input type="text" name="username" v-model="username" class="validate" />
      <span class="helper-text" data-error="Username must not be empty"></span>
    </div>
    <div class="input-field">
      <label for="email">Email</label>
      <input type="email" name="email" v-model="email" class="validate" />
      <span class="helper-text" data-error="Email must not be empty"></span>
    </div>
    <div class="input-field">
      <label for="name">Name</label>
      <input type="text" name="name" v-model="name" class="validate" />
      <span class="helper-text" data-error="Name must not be empty"></span>
    </div>
    <div class="input-field">
      <label for="passowrd">Password</label>
      <input type="password" name="password" v-model="password" class="validate" />
      <span class="helper-text" data-error="Password must not be empty"></span>
    </div>
    <button type="submit" class="waves-effect waves-light btn">SignUp</button>
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
      name: "",
      password: ""
    };
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
