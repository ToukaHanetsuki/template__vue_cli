<template>
  <div class="about">
    <BaseHeader />
    <main class="about-main">
      <h1>About</h1>
      <p>Do what you like and live</p>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseHeader from '@/components/organisms/header/BaseHeader.vue';

@Component({
  components: {
    BaseHeader
  }
})
export default class AboutTemplate extends Vue {}
</script>
