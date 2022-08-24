<template>
  <ul class="navbar-nav ms-auto">
    <div class="navbar-nav" v-if="loggedUser">
      <li class="nav-item"><router-link to="/">Dashbord</router-link> |</li>
      <li class="nav-item">
        <a href="javascript:void(0)" @click="logout()">Logout</a>
      </li>
    </div>
    <div class="navbar-nav" v-else>
      <li class="nav-item"><router-link to="/login">login</router-link> |</li>
      <li class="nav-item">
        <router-link to="/register">register</router-link>
      </li>
    </div>

    <li class="nav-item">
      <router-link to="/register"> |{{ count }} |</router-link>
    </li>
    <!--
    <li class="nav-item">
      <router-link to="/about">About</router-link
      ><span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
    </li> -->
  </ul>
</template>

<script>
import Auth from "../../Auth.js";
import swal from "sweetalert";
//import store from "../../store/index.js";
import { computed } from "vue";
import { mapState, useStore } from "vuex";
export default {
  //   setup() {
  //     const store = useStore();
  //     const count = computed(() => store.state.count);

  //     return {
  //       count
  //     };
  //   },

  // computed: {
  //   count() {
  //     return store.state.count;
  //   },
  // },

  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //     console.log(this.$store.state.count);
  //   },
  // },

  computed: {
    ...mapState(["count"]),
  },

  data() {
    return {
      loggedUser: Auth.user,
    };
  },
  mounted() {
    console.log(Auth.user);
  },
  methods: {
    logout() {
      axios
        .post("/api/v1/logout")
        .then(({ data }) => {
          Auth.logout(); //reset local storage

          if (data.status === "success") {
            swal("success!", `${data.message}`, "success");

            this.$router.push("/login");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>
