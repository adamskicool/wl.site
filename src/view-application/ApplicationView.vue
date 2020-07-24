<template>
  <div class="application-view">
    <TopBar />
    <vue-page-transition name="fade-in-up" class="app-router-wrapper">
        <router-view></router-view>
    </vue-page-transition>
  </div>
</template>

<script lang="ts">
import {
  actionLoadLibrary,
} from "@/store/modules/library/library.actions";
import { namespace as libraryNamespace } from "@/store/modules/library/library.store";

import { State, Action, Getter } from "vuex-class";
import { Component, Vue, Prop } from "vue-property-decorator";
import TopBar from "@/components/topbar/TopBar.vue";

@Component({
  components: {
    TopBar
  }
})
export default class HomeView extends Vue {
    @Action(actionLoadLibrary, {
    namespace: libraryNamespace
  })
  actionLoadLibrary: any;

  async created() {
      this.actionLoadLibrary();
  }
}
</script>

<style lang="scss">
.application-view {
  height: 100vh;
  width: 100vw;
  margin: 0px;
  padding: 0px;

  .app-router-wrapper {
    height: calc(100vh - #{$top-bar-height});
    overflow-y: scroll;
  }
}
</style>
