import Vue from 'vue';
import { VueConstructor } from 'vue/types/umd';

// constants
import { ROUTE_NAME } from '@/constants/routeName';
import { VALIDATE } from '@/constants/validate';

export const CONST = {
  ROUTE_NAME,
  VALIDATE
};

Vue.use({
  install(Vue: VueConstructor) {
    Vue.prototype.$CONST = CONST;
  }
});

declare module 'vue/types/vue' {
  interface Vue {
    $CONST: {
      ROUTE_NAME: typeof ROUTE_NAME;
      VALIDATE: typeof VALIDATE;
    };
  }
}