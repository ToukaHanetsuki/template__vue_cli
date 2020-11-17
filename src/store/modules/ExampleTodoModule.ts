import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators';
import store from '@/store';
import { ExampleTodoItem } from '@/domains/ExampleTodoItem';
import { uuid } from '@/plugins/uuid';

export interface ExampleTodoState {
  list: ExampleTodoItem[];
}

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
  public create({ title, description }: CreateExampleTodoItemType) {
    const id = uuid();
    const newItem = new ExampleTodoItem({ title, description, uuid: id });
    this._add(newItem);
  }

  @Action({})
  public delete(uuid: string) {
    this._delete(uuid);
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