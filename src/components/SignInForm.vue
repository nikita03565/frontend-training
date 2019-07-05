<template>
  <form v-if="!loading" class="form" v-on:submit="onSubmit">
    <div class="input-field">
      <label for="email">Email</label>
      <input type="email" name="email" v-model="email" class="validate" />
      <span class="helper-text" data-error="Email must not be empty"></span>
    </div>
    <div class="input-field">
      <label for="passowrd">Password</label>
      <input type="password" name="password" v-model="password" class="validate" />
      <span class="helper-text" data-error="Password must not be empty"></span>
    </div>
    <button type="submit" class="waves-effect waves-light btn">SignIn</button>
  </form>
</template>

<script>
export default {
  name: "SignInForm",
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
