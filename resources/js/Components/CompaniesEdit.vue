<template>


        <div v-if="pageloding" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>




  <Forms v-else  @formData="updatepost" :butten-loading="loading"  :post="post" />
</template>

<script>
import { ref } from "@vue/reactivity";
import layoutsForm from "./Forms.vue";
import axios from "axios";
import { useRoute } from "vue-router";
export default {
  name: "Create",
  components: {
    Forms: layoutsForm,
  },

  setup() {
    const loading = ref(false);
    const route = useRoute();
    const post = ref(false);
    const pageloding = ref(true);

    function updatepost(formData) {
      loading.value = true;
      axios
          .put(`/api/v1/companies/${route.params.id}`, {
          name: formData.name,
          address: formData.address,
          website: formData.website,
          email: formData.email,

        })

        .catch(function (error) {
          // handle error


          console.log(error);
        })
        .then(function () {
          // always executed
        });
    };




 function getpost() {
      axios
     .get(`/api/v1/companies/${route.params.id}`)
        .then(function (response) {
          // handle success
          post.value = response.data;
          loading.value = false;
          pageloding.value = false;

        })
        .catch(function (error) {
          // handle error

        })
        .then(function () {
          // always executed
        });
    }

    getpost();




    return { post, loading, updatepost,pageloding };


  },










};
</script>
