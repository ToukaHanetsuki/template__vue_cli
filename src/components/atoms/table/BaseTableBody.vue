<template>
  <tbody>
    <tr
      v-for="(columns, i) in records"
      :key="i"
    >
      <td
        v-for="key in keys"
        :key="key"
      >
        <slot
          :columns="columns"
          :name="key"
        >
          {{ columns[key] }}
        </slot>
      </td>
    </tr>
  </tbody>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class BaseTableBody extends Vue {
  @Prop({required: true}) private records!: Record<string, unknown>[];
  @Prop({required: true}) private keys!: string[];
}
</script>

<style lang="scss" scoped>

</style>