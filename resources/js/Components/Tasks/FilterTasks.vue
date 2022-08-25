<template>
  <h2>Filter tasks</h2>

  <select v-model="number" @change="FilterTasks" class="form-select form-select-sm">
    <option value="5">5</option>
    <option value="10">10</option>
    <option value="20">20</option>
    <option value="50">50</option>
    <option value="100">100</option>
  </select>
</template>

<script>

import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {


  setup() {

    const loading = ref(false);
        const number = ref();
    const store = useStore();
    const tasks = computed(() => store.getters["tasksModul/allTasks"]);


  async  function FilterTasks() {

    console.log(number.value);
      await store.dispatch("tasksModul/filterTasks",number.value);

    }


      return  {FilterTasks,number}

  },


};

</script>

<style>
</style>
