<template>

    <div class="row">
      <div class="col">
        <input :disabled="loading ? true : disabled"  v-model="title" type="text" class="form-control" placeholder="Store Task" />
        <code>{{titleErrorText}}</code>
      </div>
      <div class="col">
        <button :disabled="loading ? true : disabled"  @click="StoreTask" class="btn btn-primary">Store Task

        <span   v-if="loading" class="spinner-border spinner-border-sm"></span>
        </button>
      </div>
    </div>

</template>

<script>
import { ref } from "vue";

import { useTasksStore } from "../../store/tasks.js";

export default {
  setup() {
    const store = useTasksStore();
    const title = ref("");
    const titleErrorText = ref("");
    const loading = ref(false);
    async function StoreTask() {
      if (title.value == "") {
        titleErrorText.value = "Titile text Required";
      } else {
          loading.value = true;
          titleErrorText.value = '';
        await store.storeTask( title.value);
              loading.value = false;
      }
    }

    return { StoreTask, title,titleErrorText ,loading};
  },
};
</script>


<style>
</style>
