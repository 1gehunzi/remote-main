<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Remote url="http://127.0.0.1:8080/myLib.umd.js" />
  </div>
</template>

<script>
import Remote from "./components/Remote.vue";

export default {
  name: "App",
  components: {
    Remote,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
