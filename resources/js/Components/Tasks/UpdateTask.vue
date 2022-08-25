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
import { useStore } from "vuex";
export default {
  props: ["task"],


  setup() {
    const store = useStore();

    const loading = ref(false);
    async function updaTetaks(task) {

          loading.value = true;

        await store.dispatch("tasksModul/updaTetaks",task);
              loading.value = false;

    };
        async function delteTetaks(task) {

          loading.value = true;

        await store.dispatch("tasksModul/delteTetaks",task.id);
              loading.value = false;

    }

    return { updaTetaks  , delteTetaks ,loading};
  },
};
</script>





<style>
</style>
