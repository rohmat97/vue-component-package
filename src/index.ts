import "./styles.css";
// src/index.ts
import { App } from "vue";
import MyButton from "./MyButton.vue";

export default {
  install(app: App) {
    app.component("MyButton", MyButton);
  },
};

export { MyButton };
