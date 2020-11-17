import { ROUTE_NAME } from './routeName';
import { VALIDATE } from './validate';

declare module 'vue/types/vue' {
  interface Vue {
    $CONST: {
      ROUTE_NAME: typeof ROUTE_NAME;
      VALIDATE: typeof VALIDATE;
    };
  }
}