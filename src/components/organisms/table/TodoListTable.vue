<template>
  <BaseTable
    class="todo-list-table"
    :headers="headers"
    :records="todos"
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
import { HeaderRecord } from '@/components/atoms/table/BaseTableHeader.vue';

@Component({
  components: {
    BaseTable,
    BaseButton
  }
})
export default class TodoListTable extends Vue {

  /**
   * ヘッダー情報
   */
  private headers: HeaderRecord[] = [
    { key: 'uuid', name: 'uuid' },
    { key: 'title', name: 'title' },
    { key: 'description', name: 'description' },
    { key: 'delete', name: 'delete' }
  ];

  /**
   * TODO一覧
   */
  private get todos() {
    return exampleTodoModule.list;
  }

  /**
   * TODO削除メソッド
   */
  private deleteTodoItem(uuid: string) {
    exampleTodoModule.delete(uuid);
  }
}
</script>

<style lang="scss" scoped>
</style>