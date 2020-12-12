import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators';
import store from '@/store';
import { ExampleTodoItem } from '@/models/ExampleTodoItem';
import { uuid } from '@/modules/uuid';

export interface ExampleTodoState {
  list: ExampleTodoItem[];
}

/** promiseで値を返すためのテストメソッド */
const promiseFunction = (callback: () => void) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = callback();
      resolve(res);
    }, 800);
  });
};

@Module({ dynamic: true, store: store, name: 'exampleTodoModule', namespaced: true })
class ExampleTodoModule extends VuexModule implements ExampleTodoState {

  public list: ExampleTodoItem[] = [
    new ExampleTodoItem({
      title: 'サンプルタイトル',
      description: 'サンプル詳細',
      uuid: uuid()
    })
  ];

  @Action({})
  public async create({ title, description }: CreateExampleTodoItemType) {
    await promiseFunction(() => {
      const id = uuid();
      const newItem = new ExampleTodoItem({ title, description, uuid: id });
      this._add(newItem);
    });
  }

  @Action({})
  public async delete(uuid: string) {
    await promiseFunction(() => {
      this._delete(uuid);
    });
  }

  @Mutation
  private _add(item: ExampleTodoItem) {
    this.list.push(item);
  }

  @Mutation
  private _delete(uuid: string) {
    const index = this.list.findIndex(v => v.uuid === uuid);
    this.list.splice(index, 1);
  }
}

export const exampleTodoModule = getModule(ExampleTodoModule);