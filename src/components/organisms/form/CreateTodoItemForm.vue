<template>
  <form
    class="create-todo-item-form"
    @submit.prevent="createTodoItem"
  >
    <FormInputText
      v-model="internalValue.title"
      label="title"
      name="title"
      autocomplete="title"
    />
    <FormInputTextarea
      v-model="internalValue.description"
      label="description"
      name="description"
      autocomplete="description"
      cols="30"
      rows="3"
    />
    <p>
      <BaseButton :disabled="!isAproveSubmit">
        CREATE
      </BaseButton>
    </p>
  </form>
</template>

<script lang="ts">
import { Component, Emit } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { InternalValueMixin } from '@/mixins/InternalValueMixin';
import BaseButton from '@/components/atoms/button/BaseButton.vue';
import FormInputText from '@/components/molecules/form/FormInputText.vue';
import FormInputTextarea from '@/components/molecules/form/FormInputTextarea.vue';

@Component({
  components: {
    BaseButton,
    FormInputText,
    FormInputTextarea
  }
})
export default class CreateTodoItemForm extends mixins<InternalValueMixin<CreateExampleTodoItemType>>(InternalValueMixin) {
  private get isTitle() {
    const length = this.internalValue.title.length;
    return this.$CONST.VALIDATE.TODO_ITEM.TITLE.MIN < length
        && length < this.$CONST.VALIDATE.TODO_ITEM.TITLE.MAX;
  }

  private get isDescription() {
    const length = this.internalValue.description.length;
    return this.$CONST.VALIDATE.TODO_ITEM.DESCRIPTION.MIN < length
        && length < this.$CONST.VALIDATE.TODO_ITEM.DESCRIPTION.MAX;
  }

  public get isAproveSubmit() {
    return this.isTitle && this.isDescription;
  }

  @Emit('createTodoItem') private createTodoItem(e: Event) {
    return e;
  }
}
</script>

<style lang="scss" scoped>
.create-todo-item-form {
  text-align: left;

  &__label {
    width: 100px;
    display: inline-block;
  }
}
</style>