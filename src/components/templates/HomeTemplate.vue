<template>
  <div class="home">
    <BaseHeader />
    <HomeMain
      :create-todo-item-form="createTodoItemForm"
      :todos="todos"
      @updateCreateTodoItemForm="updateCreateTodoItemForm"
      @createTodoItem="createTodoItem"
      @deleteItem="deleteItem"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import BaseHeader from '@/components/organisms/header/BaseHeader.vue';
import HomeMain from '@/components/organisms/main/HomeMain.vue';
import { ExampleTodoItem } from '@/domains/ExampleTodoItem';

@Component({
  components: {
    BaseHeader,
    HomeMain
  }
})
export default class HomeTemplate extends Vue {
  @Prop({required: true}) private createTodoItemForm!: CreateExampleTodoItemType;
  @Prop({required: true}) private todos!: ExampleTodoItem[];

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