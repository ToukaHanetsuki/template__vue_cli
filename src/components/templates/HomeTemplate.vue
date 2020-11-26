<template>
  <div class="home">
    <BaseHeader />
    <main class="home-main">
      <h1>TODO LIST</h1>
      <CreateTodoItemForm />
      <TodoListTable />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseHeader from '@/components/organisms/header/BaseHeader.vue';
import CreateTodoItemForm from '@/components/organisms/form/CreateTodoItemForm.vue';
import TodoListTable from '@/components/organisms/table/TodoListTable.vue';

@Component({
  components: {
    BaseHeader,
    CreateTodoItemForm,
    TodoListTable
  }
})
export default class HomeTemplate extends Vue {
}
</script>

<style lang="scss" scoped>
.todo-list-table {
  width: 100%;
}
</style>