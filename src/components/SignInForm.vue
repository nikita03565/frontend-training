<template>
  <form v-if="!loading" v-on:submit="onSubmit" class='form text-light'>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" class=" form-control validate" placeholder='example@gmail.com'/>
      <span class="helper-text" data-error="Email must not be empty"></span>
    </div>
    <div class="form-group">
      <label for="passowrd1">Password</label>
      <input type="password" id="password1" v-model="password" class=" form-control validate" placeholder="Password"/>
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
