<template>
  <h2>Task Components</h2>

  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  <div v-else class="row g-3">
    <div class="col-md-12">
      <div class="col-md-3"><Create /></div>
    </div>

    <div class="col-md-12">
      <div class="col-md-3"><FilterTasks /></div>
    </div>

    <div v-for="task in tasks" key="task.id" class="col-md-4">
      <div class="card" :class="{ 'bg-light': task.completed }">
        <div
          class="card-body d-flex justify-content-between align-items-center"
        >
          <div>
            <del v-if="task.completed"> {{ task.title }} </del>
            <div v-else>{{ task.title }}</div>
          </div>

          <UpdateTask :task="task" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useTasksStore } from "../../store/tasks.js";
import FilterTasks from "./FilterTasks.vue";
import Create from "./Create.vue";
import UpdateTask from "./UpdateTask.vue";


export default {
  components: {
    FilterTasks,
    Create,
    UpdateTask,
  },

  setup() {
    const loading = ref(false);
    const store = useTasksStore();

    console.log(store);
    const tasks = computed(() => store.allTasks);

    async function fetchTasks() {
      loading.value = true;
      await store.fetchTasks();
      loading.value = false;
    }
    fetchTasks();

    return {
      tasks,
      loading,

    };
  },
};
</script>

<style>
</style>
