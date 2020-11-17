<template>
  <button
    v-bind="$attrs"
    class="base-button"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';

@Component({})
export default class BaseButton extends Vue {
  @Emit('click') private onClick(e: MouseEvent) {
    return e;
  }
}
</script>

<style lang="scss" scoped>

</style>