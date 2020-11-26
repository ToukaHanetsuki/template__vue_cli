<template>
  <BaseTable
    class="todo-list-table"
    :headers="keys"
    :records="todos"
    :keys="keys"
  >
    <template #tbody_delete="{ columns }">
      <BaseButton @click="deleteItem(columns.uuid)">
        DELETE
      </BaseButton>
    </template>
  </BaseTable>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseTable from '@/components/molecules/table/BaseTable.vue';
import BaseButton from '@/components/atoms/button/BaseButton.vue';
import { exampleTodoModule } from '@/store/modules/ExampleTodoModule';

@Component({
  components: {
    BaseTable,
    BaseButton
  }
})
export default class TodoListTable extends Vue {

  private keys = [
    'uuid',
    'title',
    'description',
    'delete'
  ];

  private get todos() {
    return exampleTodoModule.list;
  }

  private deleteTodoItem(uuid: string) {
    exampleTodoModule.delete(uuid);
  }
}
</script>

<style lang="scss" scoped>
</style>