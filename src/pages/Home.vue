<template>
  <HomeTemplate />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeTemplate from '@/components/templates/HomeTemplate.vue';

@Component({
  components: {
    HomeTemplate
  }
})
export default class Home extends Vue {
}
</script>

<style lang="scss" scoped>

</style>