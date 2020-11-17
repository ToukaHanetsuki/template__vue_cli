<template>
  <div class="about">
    <BaseHeader />
    <AboutMain />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseHeader from '@/components/organisms/header/BaseHeader.vue';
import AboutMain from '@/components/organisms/main/AboutMain.vue';

@Component({
  components: {
    BaseHeader,
    AboutMain
  }
})
export default class AboutTemplate extends Vue {}
</script>
