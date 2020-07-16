<template>
  <div class="home-view">
    <TopBar />
  </div>
</template>

<script lang="ts">
import { State, Action, Getter } from "vuex-class";
import { Component, Vue, Prop } from "vue-property-decorator";
import TopBar from "@/components/topbar/TopBar.vue";

@Component({
  components: {
    TopBar
  }
})
export default class HomeView extends Vue {}
</script>

<style lang="scss">
.home-view {
  height: 100vh;
  width: 100vw;
  margin: 0px;
  padding: 0px;
}
</style>
