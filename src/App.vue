<template>
  <div id="app">
      <Navbar/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Navbar from '@/components/Navbar'
@Component({
  components: {
      Navbar
  },
})
export default class App extends Vue {
}
</script>

<style>
#app {
    height: 1000px;
}
</style>
