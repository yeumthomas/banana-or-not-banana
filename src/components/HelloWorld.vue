<template>
  <div class="container">
    <img crossorigin="anonymous" id="img" src="
    data:image/jpeg;base64,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
    " alt="Dog" ref="dogId" >
    <!-- https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ucPLLnB4Pu1kMEs2uRZISegG5W7Icsb7tq27blyry0gnYhVOfg -->
    <div class="row">
      <div class="col">
        <b-list-group>
          <b-list-group-item v-for="tensor in tensors" v-bind:key="tensor.className">
            {{ tensor.className }} - {{ tensor.probability }}
          </b-list-group-item>
        </b-list-group>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {ImageClassifier} from '@/Models/ImageClassifier';
  import {TensorInformation} from '@/Models/TensorInformation';

  @Component
export default class HelloWorld extends Vue {
  private readonly classifier: ImageClassifier = new ImageClassifier();
  private tensors: TensorInformation[] | null = null;

  constructor() {
    super();
    this.Classify();
  }
  public Classify(): void {
    this.$nextTick().then(async () => {
      /* tslint:disable:no-string-literal */
      const dog = this.$refs['dogId'];
      /* tslint:enable:no-string-literal */
      if (dog !== null && !this.tensors) {
        const image = dog as HTMLImageElement;
        this.tensors = await this.classifier.Classify(image);
      }
    });
  }
}
</script>
