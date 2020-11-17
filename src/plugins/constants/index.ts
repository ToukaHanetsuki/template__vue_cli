import { VueConstructor } from 'vue/types/umd';

// constants
import { ROUTE_NAME } from './routeName';
import { VALIDATE } from './validate';

export const CONST = {
  ROUTE_NAME,
  VALIDATE
};

export const constantPlugin = {
  install(Vue: VueConstructor) {
    Vue.prototype.$CONST = CONST;
  }
};