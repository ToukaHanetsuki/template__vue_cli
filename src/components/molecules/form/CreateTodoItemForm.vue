<template>
  <form
    class="create-todo-item-form"
    @submit.prevent="createTodoItem"
  >
    <p>
      <BaseLabel
        class="create-todo-item-form__label"
        for="Icreate-todo-item-form__label--title"
      >
        title
      </BaseLabel>
      <BaseInput
        id="Icreate-todo-item-form__label--title"
        v-model="internalValue.title"
        autocomplete="title"
      />
    </p>
    <p>
      <BaseLabel
        class="create-todo-item-form__label"
        for="Icreate-todo-item-form__label--description"
      >
        description
      </BaseLabel>
      <BaseTextarea
        id="Icreate-todo-item-form__label--description"
        v-model="internalValue.description"
        autocomplete="description"
        cols="30"
        rows="3"
      />
    </p>
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
import BaseInput from '@/components/atoms/input/BaseInput.vue';
import BaseLabel from '@/components/atoms/label/BaseLabel.vue';
import BaseTextarea from '@/components/atoms/textarea/BaseTextarea.vue';

@Component({
  components: {
    BaseButton,
    BaseInput,
    BaseLabel,
    BaseTextarea
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