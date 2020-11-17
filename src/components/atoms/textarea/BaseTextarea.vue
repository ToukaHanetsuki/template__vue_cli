<template>
  <textarea
    v-model="internalValue"
    class="base-textarea"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { InternalValueMixin } from '@/mixins/InternalValueMixin';

@Component({})
export default class BaseTextarea extends mixins<InternalValueMixin<string>>(InternalValueMixin) {}
</script>

<style lang="scss" scoped>
</style>