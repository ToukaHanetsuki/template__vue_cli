<template>
  <p class="form-item">
    <BaseLabel
      class="form-item__label"
      :for="name"
    >
      {{ label }}
    </BaseLabel>
    <BaseTextarea
      :id="name"
      v-model="internalValue"
      class="form-item__textarea"
      :autocomplete="autocomplete"
      :cols="cols"
      :rows="rows"
    />
  </p>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { InternalValueMixin } from '@/mixins/InternalValueMixin';
import BaseTextarea from '@/components/atoms/textarea/BaseTextarea.vue';
import BaseLabel from '@/components/atoms/label/BaseLabel.vue';

@Component({
  components: {
    BaseTextarea,
    BaseLabel
  }
})
export default class FormItemTextarea extends mixins<InternalValueMixin<CreateExampleTodoItemType>>(InternalValueMixin) {
  @Prop({required: true}) private label!: string;
  @Prop({required: true}) private name!: string;
  @Prop({required: true}) private autocomplete!: string;
  @Prop({required: true}) private cols!: number;
  @Prop({required: true}) private rows!: number;
}
</script>

<style lang="scss" scoped>
</style>