<template>
  <div class="container">
    <img crossorigin="anonymous" id="img" src="https://encrypted-  
      tbn0.gstatic.com/imagesq=tbn:ANd9GcQ0ucPLLnB4Pu1kMEs2uRZ
      ISegG5W7Icsb7tq27blyry0gnYhVOfg" alt="Dog" ref="dogId" >
    <div class="row">
      <div class="col">
        <b-list-group>
          <b-list-group-item v-for="tensor in tensors" 
              v-bind:key="tensor.className">
            {{ tensor.className }} - {{ tensor.probability }}
          </b-list-group-item>
        </b-list-group>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    HelloWorld,
  },
})
export interface TensorInformation {
  className: string;
  probability: number;
}

export default class HelloWorld extends Vue {
  private readonly classifier: ImageClassifier = new ImageClassifier();
  private tensors: TensorInformation[] | null = null;
  
  // occurs right as page loads
  constructor() {
    super();
    // this is why we need $nextTick
    this.Classify();
  }

  public Classify(): void {
    // nextTick is when DOM rerenders, so when this occurs, we will have access to image we want to classify
    this.$nextTick().then(async () => {
      // so we can get info in the img element without calling getElementById
      const dog = this.$refs['dogId'];
      // if dog image exists and this.tensors not already running
      if (dog !== null && !this.tensors) {
        // cast dog as HTMLImageElement
        const image = dog as HTMLImageElement;
        // run classification script
        this.tensors = await this.classifier.Classify(image);
      }
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
