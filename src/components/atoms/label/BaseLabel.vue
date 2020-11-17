<template>
  <label
    v-bind="$attrs"
    class="base-label"
    :style="styledLabel"
  >
    <slot />
  </label>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class BaseLabel extends Vue {
  @Prop({default: 'top'}) private verticalType!: string;

  private get styledLabel() {
    return {
      ...this.verticalAlign
    };
  }

  private get verticalAlign() {
    return {
      verticalAlign: this.verticalType
    };
  }

}
</script>

<style lang="scss" scoped>

</style>