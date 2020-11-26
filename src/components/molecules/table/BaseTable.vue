<template>
  <table>
    <BaseTableHeader :headers="headers">
      <template
        v-for="({ key }) in headers"
        #[key]="{ column }"
      >
        <slot
          :name="`thead_${key}`"
          :column="column"
        >
          {{ column }}
        </slot>
      </template>
    </BaseTableHeader>
    <BaseTableBody
      :records="records"
      :keys="keys"
    >
      <template
        v-for="key in keys"
        #[key]="{ columns }"
      >
        <slot
          :name="`tbody_${key}`"
          :columns="columns"
        >
          {{ columns[key] }}
        </slot>
      </template>
    </BaseTableBody>
  </table>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import BaseTableHeader, { HeaderRecord } from '@/components/atoms/table/BaseTableHeader.vue';
import BaseTableBody from '@/components/atoms/table/BaseTableBody.vue';

@Component({
  components: {
    BaseTableHeader,
    BaseTableBody
  }
})
export default class BaseTable extends Vue {
  @Prop({required: true}) private headers!: HeaderRecord[];
  @Prop({required: true}) private records!: Record<string, unknown>[];

  private get keys() {
    return this.headers.map(v => v.key);
  }
}
</script>

<style lang="scss" scoped>

</style>