<template>
  <ul class="navbar-nav ms-auto">
    <li class="nav-item"><router-link to="/">Home</router-link> |</li>
    <li class="nav-item"><router-link to="/login">login</router-link> |</li>
    <li class="nav-item"><router-link to="/register">register</router-link> |</li>


    <li class="nav-item">
      <router-link to="/about">About</router-link
      ><span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style>
</style>
