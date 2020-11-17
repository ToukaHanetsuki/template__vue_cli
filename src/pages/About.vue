<template>
  <AboutTemplate />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AboutTemplate from '@/components/templates/AboutTemplate.vue';

@Component({
  components: {
    AboutTemplate
  }
})
export default class About extends Vue {}
</script>
