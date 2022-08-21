<template>
  <Forms @formData="createpost" :butten-loading="loading" />
</template>

<script>
import { ref } from "@vue/reactivity";
import layoutsForm from "./Forms.vue";
import axios from "axios";

export default {
  name: "Create",
  components: {
    Forms: layoutsForm,
  },

  setup() {
    const loading = ref(false);
    function createpost(formData) {
      loading.value = true;
      axios
        .post("/api/v1/companies", {
          name: formData.name,
          address: formData.address,
          website: formData.website,
          email: formData.email,

        })
        .then(function (response) {
          loading.value = false;


          console.log(response);
        })
        .catch(function (error) {
          // handle error


          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }

    return { createpost, loading };
  },

  //   data: function () {
  //     return {
  //       company: {
  //         name: "",
  //         address: "",
  //         website: "",
  //         email: "",
  //       },
  //     };
  //   },
  //   methods: {
  //     saveForm() {
  //       event.preventDefault();
  //       var app = this;
  //       var newCompany = app.company;
  //       axios
  //         .post("/api/v1/companies", newCompany)
  //         .then(function (resp) {
  //           app.$router.push({ name: "companiesIndex" });
  //         })
  //         .catch(function (resp) {
  //           console.log(resp);
  //           alert("Could not create your company");
  //         });
  //     },
  //   },
};
</script>
