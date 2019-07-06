<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand mr-auto">ITinder</router-link>
    <ul class="nav navbar-nav ml-auto">
      <li class="nav-item">
        <router-link to="/users/me" class='nav-link'>User</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/signin" class='nav-link'>Sign In</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/signup" class='nav-link'>Sign Up</router-link>
      </li>
    </ul>
  </nav>
</template>

<style>
@media (min-width: 768px) {
.navbar-brand
    {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
}
</style>
