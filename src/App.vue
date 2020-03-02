<template>
  <div id="app">
    <vue-page-transition name="fade-in-up">
      <router-view />
    </vue-page-transition>
    <Alert />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Alert from "@/components/alert/Alert.vue";

@Component({
  components: {
    Alert
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
