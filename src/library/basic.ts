export class ImageClassifier {
    constructor() {
        tf.ENV.set('WEBGL_PACK', false);
      }
    
    private model: MobileNet | null = null;

}