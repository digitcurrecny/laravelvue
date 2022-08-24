<template>
  <div>
    <div class="form-group">
      <router-link :to="{ name: 'createCompany' }" class="btn btn-success"
        >Create new company</router-link
      >
    </div>

    <div class="panel panel-default">
      <div class="panel-heading">Companies list new</div>

      <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>

      <div v-else class="panel-body">
        <table class="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Company Name </th>
              <th>Address</th>
              <th>Website</th>
              <th>Email</th>
              <th width="100">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(company, index) in companies">
              <td>{{ company.name }}</td>
              <td>{{ company.address }}</td>
              <td>{{ company.website }}</td>
              <td>{{ company.email }}</td>
              <td>
                <router-link
                  :to="{ name: 'editCompany', params: { id: company.id } }"
                  class="btn btn-xs btn-default"
                >
                  Edit
                </router-link>
                <a
                  href="#"
                  class="btn btn-xs btn-danger"
                  v-on:click="deleteEntry(company.id, index)"
                >
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>

<Pagination :data="listPagination" @pagination-change-page="getCompanies" />


      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import LaravelVuePagination from 'laravel-vue-pagination';
import { onMounted } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "compay lit",
  components: {
        'Pagination': LaravelVuePagination
  },
  beforeRouteEnter(to, fro, next) {
    next();
    // next(false);
  },

   setup() {




    const store = useStore();
     console.log('tets');
     // const count = computed(() => store.state.count);


   const companies = ref([]);
    const listPagination = ref([]);
   const loading = ref(true);
   const route = useRoute();

   const getCompanies = async (page) => {
      axios
        .get('/api/v1/companies?page=' + page)
        .then(function (resp) {
          // handle success
          companies.value = resp.data.data;
          listPagination.value = resp.data;

          loading.value = false;
          //   console.log(response);
        })
        .catch(function (error) {
          console.log(error);
          alert("Could not load companies");
        })
        .then(function () {
          // always executed
        });
   };
 getCompanies();

   const deleteEntry = async (id, index) => {

                if (confirm("Do you really want to delete it?")) {
                    var app = this;
                    axios.delete('/api/v1/companies/' + id)
                        .then(function (resp) {
                          companies.value.splice(index, 1);
                        })
                        .catch(function (resp) {
                            alert("Could not delete company");
                        });
                }
            };



   return { companies, getCompanies, loading, route ,listPagination,deleteEntry};
   },


};
</script>
