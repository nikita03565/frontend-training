<template>
  <nav>
    <div class="nav-wrapper grey darken-3">
      <div class="container">
        <router-link to='/' class='brand-logo center'>Vue App</router-link>
        <ul id="nav-mobile" class="left">
          <li>
            <router-link to='/'><i class="large material-icons">home</i></router-link>
          </li>
          <li>
            <router-link to='/users/me'><i class="large material-icons">account_circle</i></router-link>
          </li>
        </ul>
        <ul id="nav-mobile" class="right">
          <li>
            <router-link to='/signin'>Sign In</router-link>
          </li>
          <li>
            <router-link to='/signup'>Sign Up</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
