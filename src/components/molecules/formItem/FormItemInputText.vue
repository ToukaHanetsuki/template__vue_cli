<template>
  <p class="form-item">
    <BaseLabel
      :for="name"
      class="form-item__label"
    >
      {{ label }}
    </BaseLabel>
    <BaseInput
      :id="name"
      v-model="internalValue"
      class="form-item__input-text"
      :autocomplete="autocomplete"
    />
  </p>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { InternalValueMixin } from '@/mixins/InternalValueMixin';
import BaseInput from '@/components/atoms/input/BaseInput.vue';
import BaseLabel from '@/components/atoms/label/BaseLabel.vue';

@Component({
  components: {
    BaseInput,
    BaseLabel
  }
})
export default class FormItemInputText extends mixins<InternalValueMixin<CreateExampleTodoItemType>>(InternalValueMixin) {
  @Prop({required: true}) private label!: string;
  @Prop({required: true}) private name!: string;
  @Prop({required: true}) private autocomplete!: string;
}
</script>

<style lang="scss" scoped>
</style>