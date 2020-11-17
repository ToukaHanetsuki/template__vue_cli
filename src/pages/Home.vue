<template>
  <HomeTemplate
    :create-todo-item-form="createTodoItemForm"
    :todos="todos"
    @createTodoItem="createTodoItem"
    @deleteItem="deleteTodoItem"
  />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { exampleTodoModule } from '@/store/modules/ExampleTodoModule';
import HomeTemplate from '@/components/templates/HomeTemplate.vue';

@Component({
  components: {
    HomeTemplate
  }
})
export default class Home extends Vue {
  private createTodoItemForm: CreateExampleTodoItemType = {
    title: '',
    description: ''
  };

  private get todos() {
    return exampleTodoModule.list;
  }

  private createTodoItem() {
    exampleTodoModule.create(this.createTodoItemForm);

    this.initializeValue();
  }

  private deleteTodoItem(uuid: string) {
    exampleTodoModule.delete(uuid);
  }

  private initializeValue() {
    this.createTodoItemForm = {
      title: '',
      description: ''
    };
  }
}
</script>

<style lang="scss" scoped>

</style>