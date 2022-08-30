<template>
<div  v-if="loading"> <span   class="spinner-border spinner-border-sm"></span> </div>

  <div v-else>
    <span @click="updaTetaks(task)"
      v-if="task.completed"
      style="font-size: 22px"
      class="bi bi-check-all"
    ></span>
    <span  @click="updaTetaks(task)"  v-else style="font-size: 22px" class="bi bi-check"></span>
    <span  @click="delteTetaks(task)"    style="font-size: 22px" class="bi bi-trash-fill ms-3"></span>

  </div>
</template>

<script>

import { ref } from "vue";
import { useTasksStore } from "../../store/tasks.js";

export default {
  props: ["task"],


  setup() {
    const store = useTasksStore();

    const loading = ref(false);
    async function updaTetaks(task) {

          loading.value = true;

        await store.updaTetaks( task);
              loading.value = false;

    };
        async function delteTetaks(task) {

          loading.value = true;

        await store.delteTetaks(task.id);
              loading.value = false;

    }

    return { updaTetaks  , delteTetaks ,loading};
  },
};
</script>





<style>
</style>
