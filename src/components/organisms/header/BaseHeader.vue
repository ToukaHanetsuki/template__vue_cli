<template>
  <header class="base-header">
    <nav>
      <router-link :to="{name: $CONST.ROUTE_NAME.HOME}">
        Home
      </router-link> |
      <router-link :to="{name: $CONST.ROUTE_NAME.ABOUT}">
        About
      </router-link> |
      <a
        href="https://github.com/ToukaHanetsuki/template__vue_cli"
        target="_blank"
      >
        Repository
      </a>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class BaseHeader extends Vue {
}
</script>

<style lang="scss" scoped>
.base-header {
  padding: 30px;
  a {
    color: #2c3e50;
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>