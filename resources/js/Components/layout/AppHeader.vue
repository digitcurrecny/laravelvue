<template>
  <nav class="navbar navbar-expand-lg bg-light shadow-sm">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">DIGITCURRENCY</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link " aria-current="page"  to="/">Home</router-link>
          </li>
            <li class="nav-item">
            <router-link class="nav-link " aria-current="page"  to="/tasks">Tasks</router-link>
          </li>

            <li class="nav-item">
            <router-link class="nav-link " aria-current="page"  to="/products">Products</router-link>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <!-- <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li> -->
        </ul>


        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link p-1 me-3" to="/cart">
                <span class="badge rounded-pill bg-primary me-1">{{ countCartItems }}</span>
                <i class="bi bi-basket-fill" style="font-size:23px"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed } from 'vue';

export default {

  setup(){

    const countCartItems = 22;

    return{
      countCartItems
    }
  }
};
</script>


<style>


.router-link-active{
    color: black !important;
    border-bottom: 2px solid  black !important;
}
</style>
