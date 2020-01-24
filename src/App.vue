<template>
  <div id="app">
      <h1>Hejsan</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {},
})
export default class App extends Vue {
}
</script>

<style lang="scss">
@import "@/assets/scss/colors.scss";
h1 {
    color: $color-main-green;
}
</style>
