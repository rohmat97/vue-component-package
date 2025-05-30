import MyButton from './src/MyButton.vue';

export default {
  install(app) {
    app.component('MyButton', MyButton);
  }
}

export { MyButton };
