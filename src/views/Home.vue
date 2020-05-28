<template>
  <div class="home">
    <Classifier />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Classifier from '@/components/Classifier.vue';

@Component({
  components: {
    Classifier,
  },
})
export default class Home extends Vue {}
</script>
