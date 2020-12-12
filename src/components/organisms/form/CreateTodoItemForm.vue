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
      <BaseButton
        :disabled="!isAproveSubmit"
        @click="createTodoItem"
      >
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
   * 進捗フラグ
   */
  private progress = false;

  /**
   * フォーム入力値
   */
  private createTodoItemForm: CreateExampleTodoItemType = {
    title: '',
    description: ''
  };

  /** 進捗状況判定 */
  private get isProgress() {
    return this.progress;
  }

  /**
   * 作成許可判定
   */
  public get isAproveSubmit() {
    return this.validateTitle() && this.validateDescription() && !this.isProgress;
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
  private async createTodoItem() {
    if (!this.isAproveSubmit) return;

    this.progress = true;
    await exampleTodoModule.create(this.createTodoItemForm);
    this.initializeValue();
    this.progress = false;
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
      display: inline-block;
      width: 100px;
    }
  }
</style>