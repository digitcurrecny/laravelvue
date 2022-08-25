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

    <button @click="mutations" >mutations</button>

        <button @click="actions" >actions</button>

    <!-- <div v-for="todo in todos" :key="todo.id">{{ todo }}</div>

    <div v-for="todo in donetodos" :key="todo.id">{{ todo }}</div>

    <div >{{ donetodosByid }}</div> -->

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
    setup() {
      const store = useStore();
      const count = computed(() => store.state.moduleA.count);




 function mutations() {

   store.commit('moduleA/increment', 2);

 }


 function actions() {

   store.dispatch('moduleA/increment',  { number : 4});

 }



      return {
        count,actions,mutations
      };
    },

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

  //   computed: {
  //     ...mapState(["count"]),
  //   },

//   computed: {
//     todos() {
//       return this.$store.state.todos;
//     },

//     donetodos() {
//       return this.$store.getters.doneTodos;
//     },


//     donetodos() {
//       return this.$store.getters['moduleA/doneTodos'] ;
//     },


//     donetodosByid() {
//       return this.$store.getters.getTodoById(2);
//     },
//   },





    // setup() {
    //   const store = useStore();
    //   const donetodos = computed(() => store.getters.doneTodos);
    //        const donetodosByid = computed(() => store.getters.getTodoById(2));

    //   return {
    //     donetodos,donetodosByid
    //   };
    // },





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
