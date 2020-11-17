<template>
  <BaseTable
    class="home-main__todos"
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
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import BaseTable from '@/components/molecules/table/BaseTable.vue';
import BaseButton from '@/components/atoms/button/BaseButton.vue';
import { ExampleTodoItem } from '@/domains/ExampleTodoItem';

@Component({
  components: {
    BaseTable,
    BaseButton
  }
})
export default class TodoListTable extends Vue {
  @Prop({required: true}) private todos!: ExampleTodoItem[];

  private keys = [
    'uuid',
    'title',
    'description',
    'delete'
  ];

  @Emit('deleteItem') private deleteItem(uuid: string) {
    return uuid;
  }
}
</script>

<style lang="scss" scoped>
.home-main__todos {
  width: 100%;
}
</style>