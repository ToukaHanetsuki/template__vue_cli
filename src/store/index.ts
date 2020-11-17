import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import { ExampleTodoState } from './modules/ExampleTodoModule';

interface State {
  exampleTodo: ExampleTodoState;
}

export default new Vuex.Store<State>({});