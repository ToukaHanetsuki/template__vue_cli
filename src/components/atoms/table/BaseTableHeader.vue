<template>
  <thead>
    <tr>
      <th
        v-for="({ key, name }) in headers"
        :key="key"
      >
        <slot
          :name="key"
          :column="name"
        >
          {{ name }}
        </slot>
      </th>
    </tr>
  </thead>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

export interface HeaderRecord {
  key: string;
  name: string;
}

@Component({})
export default class BaseTableHeader extends Vue {
  @Prop({required: true}) private headers!: HeaderRecord[];
}
</script>

<style lang="scss" scoped>

</style>