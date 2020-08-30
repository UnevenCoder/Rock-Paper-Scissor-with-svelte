import App from "./App.svelte";

const app = new App({
  target: document.body
});
document.querySelector('body').style.margin=0;
export default app;
