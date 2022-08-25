<template>
  <div>
    <h1>Login</h1>
    <div>
      <label for="email">Email</label>
      <input type="email" v-model="user.email" />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" v-model="user.password" />
    </div>
    <button @click="login">Login</button>
  </div>
</template>

<script>
import Auth from "../../Auth.js";
import swal from "sweetalert";
import { computed } from "vue";
import { useStore } from "vuex";
export default {


//   setup() {
//     const store = useStore();
//     const count = computed(() => store.state.count);

//     return {
//       count
//     };
//   },

  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    login() {
      axios
        .post("/api/v1/login", this.user)
        .then(({ data }) => {
          if (data.status === "error") {
            swal("Oops!", `${data.message}`, "error");
          } else if (data.status === "success") {
            Auth.login(data.data.access_token, data.data.user.email); //set local storage
            swal(
              "success!",
              "You have successfully logged into your account",
              "success"
            );
            this.$router.push("/");
          }
        })
        .catch((error) => {
          swal("Oops!", "Something went wrong!", "error");
        });
    },
  },
};
</script>
