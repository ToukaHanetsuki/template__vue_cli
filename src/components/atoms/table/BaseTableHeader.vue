<template>
  <thead>
    <tr>
      <th
        v-for="(column, i) in headers"
        :key="i"
      >
        <slot
          :name="i"
          :column="column"
        >
          {{ column }}
        </slot>
      </th>
    </tr>
  </thead>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class BaseTableHeader extends Vue {
  @Prop({required: true}) private headers!: (string|Record<string, unknown>)[];
}
</script>

<style lang="scss" scoped>

</style>