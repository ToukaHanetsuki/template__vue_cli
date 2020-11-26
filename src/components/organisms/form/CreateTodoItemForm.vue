<template>
  <form
    class="create-todo-item-form"
    @submit.prevent="createTodoItem"
  >
    <FormItemInputText
      v-model="createTodoItemForm.title"
      label="title"
      name="title"
      autocomplete="title"
    />
    <FormItemTextarea
      v-model="createTodoItemForm.description"
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
import { Vue, Component } from 'vue-property-decorator';
import BaseButton from '@/components/atoms/button/BaseButton.vue';
import FormItemInputText from '@/components/molecules/formItem/FormItemInputText.vue';
import FormItemTextarea from '@/components/molecules/formItem/FormItemTextarea.vue';
import { exampleTodoModule } from '@/store/modules/ExampleTodoModule';

@Component({
  components: {
    BaseButton,
    FormItemInputText,
    FormItemTextarea
  }
})
export default class CreateTodoItemForm extends Vue {

  /**
   * フォーム入力値
   */
  private createTodoItemForm: CreateExampleTodoItemType = {
    title: '',
    description: ''
  };

  /**
   * 作成許可判定
   */
  public get isAproveSubmit() {
    return this.validateTitle() && this.validateDescription();
  }

  /**
   * タイトルバリデーション
   */
  private validateTitle() {
    const length = this.createTodoItemForm.title.length;
    return this.$CONST.VALIDATE.TODO_ITEM.TITLE.MIN < length
        && length < this.$CONST.VALIDATE.TODO_ITEM.TITLE.MAX;
  }

  /**
   * 本文バリデーション
   */
  private validateDescription() {
    const length = this.createTodoItemForm.description.length;
    return this.$CONST.VALIDATE.TODO_ITEM.DESCRIPTION.MIN < length
        && length < this.$CONST.VALIDATE.TODO_ITEM.DESCRIPTION.MAX;
  }

  /**
   * TODO作成メソッド
   */
  private createTodoItem() {
    if (!this.isAproveSubmit) return;

    exampleTodoModule.create(this.createTodoItemForm);

    this.initializeValue();
  }

  /**
   * 初期化メソッド
   */
  private initializeValue() {
    this.createTodoItemForm = {
      title: '',
      description: ''
    };
  }
}
</script>

<style lang="scss" scoped>
  .create-todo-item-form {
    text-align: left;
  }

  ::v-deep .form-item {
    &__label {
      width: 100px;
      display: inline-block;
    }
  }
</style>