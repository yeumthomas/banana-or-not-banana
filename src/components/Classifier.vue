<template>
  <div class="container">
    <h1>Banana or Not Banana</h1>
    <!-- <el-radio-group v-model="radio">
      <el-radio label='bananaID1' v-on:click="ReRender">Image 1</el-radio>
      <el-radio label='bananaID2' v-on:click="ReRender">Image 2</el-radio> 
      <el-radio label="3" v-on:click="reRender">Image 3</el-radio>
    </el-radio-group> -->
    <!-- <p> {{ radio }} </p> -->
    <img v-if=' radio === "bananaID1"' crossorigin="anonymous" style="border: solid 2px grey;" src='@/assets/banana1.jpeg' alt="Banana" ref='bananaID1'>
    <!-- <img v-else=' radio === "bananaID2"' crossorigin="anonymous" style="border: solid 2px grey;" src="@/assets/andy.png" alt="Banana" ref='bananaID2'> -->

    <div class="row">
      <div class="col">
        <b-list-group>
          <b-list-group-item class="stats" v-for="tensor in tensors" v-bind:key="tensor.className">
            <!-- <el-alert v-if=" tensor.probability > .75 " class="alert"
            title="I am more than 75% sure this is a banana"
            type="success">
          </el-alert>
          <el-alert v-else class="alert"
            title="This is not a banana"
            type="success">
          </el-alert> -->
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
export default class Classifier extends Vue {
  private readonly classifier: ImageClassifier = new ImageClassifier();
  public tensors: TensorInformation[] | null = null;
  public radio : string = 'bananaID1';

  constructor() {
    super();
    this.Classify();
  }

  public ReRender(): void {
    this.Classify();
  }

  public Classify(): void {
    this.$nextTick().then(async () => {
      const banana = this.$refs[this.radio];
      if (banana !== null && !this.tensors) {
        const image = banana as HTMLImageElement;
        this.tensors = await this.classifier.Classify(image);
      }
    });
  }
}
</script>

<style scoped>
* {
  min-width: 700px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}
.container {
  margin-top: 50px;
}

img {
  margin-bottom: 50px;
  min-width: 400px;
}

.stats {
  min-width: 700px;
}
</style>