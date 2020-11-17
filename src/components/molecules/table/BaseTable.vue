<template>
  <table>
    <BaseTableHeader :headers="headers">
      <template
        v-for="(_, i) in headers"
        #[i]="{ column }"
      >
        <slot
          :name="`thead_${i}`"
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
import BaseTableHeader from '@/components/atoms/table/BaseTableHeader.vue';
import BaseTableBody from '@/components/atoms/table/BaseTableBody.vue';

@Component({
  components: {
    BaseTableHeader,
    BaseTableBody
  }
})
export default class BaseTable extends Vue {
  @Prop({required: true}) private headers!: (string|Record<string, unknown>)[];
  @Prop({required: true}) private records!: Record<string, unknown>[];
  @Prop({required: true}) private keys!: string[];
}
</script>

<style lang="scss" scoped>

</style>