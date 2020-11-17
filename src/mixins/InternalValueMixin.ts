import { Vue, Emit, Prop, Component } from 'vue-property-decorator';

@Component
export class InternalValueMixin<T> extends Vue {
  @Prop({ required: true }) private value!: T;

  @Emit() private input(newVal: T): T {
    return newVal;
  }

  protected get internalValue(): T {
    return this.value;
  }

  protected set internalValue(newVal: T) {
    this.input(newVal);
  }
}
