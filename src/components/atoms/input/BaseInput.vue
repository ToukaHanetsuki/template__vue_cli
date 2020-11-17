<template>
  <input
    v-model="internalValue"
    class="base-input"
    v-bind="$attrs"
  >
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { InternalValueMixin } from '@/mixins/InternalValueMixin';

@Component({})
export default class BaseInput extends mixins<InternalValueMixin<string>>(InternalValueMixin) {}
</script>

<style lang="scss" scoped>
</style>