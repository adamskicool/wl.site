<template>
  <div id="app">
    <vue-page-transition name="fade-in-up" class="router-wrapper">
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
  height: 100vh;

  .router-wrapper {
    height: 100%;
  }
}
</style>
