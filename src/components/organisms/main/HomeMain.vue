<template>
  <main class="home-main">
    <h1>TODO LIST</h1>
    <CreateTodoItemForm
      v-model="internalCreateTodoItemForm"
      @createTodoItem="createTodoItem"
    />
    <TodoListTable
      :todos="todos"
      @deleteItem="deleteItem"
    />
  </main>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import CreateTodoItemForm from '@/components/molecules/form/CreateTodoItemForm.vue';
import TodoListTable from '@/components/molecules/table/TodoListTable.vue';
import { ExampleTodoItem } from '@/domains/ExampleTodoItem';

@Component({
  components: {
    CreateTodoItemForm,
    TodoListTable
  }
})
export default class HomeMain extends Vue {
  @Prop({required: true}) private createTodoItemForm!: CreateExampleTodoItemType;
  @Prop({required: true}) private todos!: ExampleTodoItem[];

  private get internalCreateTodoItemForm() {
    return this.createTodoItemForm;
  }

  private set internalCreateTodoItemForm(newVal) {
    this.updateCreateTodoItemForm(newVal);
  }

  @Emit() private updateCreateTodoItemForm(newVal: CreateExampleTodoItemType) {
    return newVal;
  }

  @Emit('createTodoItem') private createTodoItem(e: Event) {
    return e;
  }

  @Emit('deleteItem') private deleteItem(uuid: string) {
    return uuid;
  }

}
</script>

<style lang="scss" scoped>
</style>