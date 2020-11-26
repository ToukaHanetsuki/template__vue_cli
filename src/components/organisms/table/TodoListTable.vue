<template>
  <BaseTable
    class="todo-list-table"
    :headers="headers"
    :records="todos"
  >
    <template #tbody_delete="{ columns }">
      <BaseButton
        :disabled="isProgress"
        @click="deleteTodoItem(columns.uuid)"
      >
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
   * 進捗フラグ
   */
  private progress = false;

  /**
   * ヘッダー情報
   */
  private headers: HeaderRecord[] = [
    { key: 'uuid', name: 'uuid' },
    { key: 'title', name: 'title' },
    { key: 'description', name: 'description' },
    { key: 'delete', name: 'delete' }
  ];

  /** 進捗状況判定 */
  private get isProgress() {
    return this.progress;
  }

  /**
   * TODO一覧
   */
  private get todos() {
    return exampleTodoModule.list;
  }

  /**
   * TODO削除メソッド
   */
  private async deleteTodoItem(uuid: string) {
    if (this.progress) return;

    this.progress = true;
    await exampleTodoModule.delete(uuid);
    this.progress = false;
  }
}
</script>

<style lang="scss" scoped>
</style>