<template>
  <div class="topbar">
    <Button
      v-for="option in topBarOptions"
      :key="option.name"
      :label="option.name"
      @click="handleClick(option)"
    />
  </div>
</template>

<script lang="ts">
import { State, Action, Getter } from "vuex-class";
import { Component, Vue, Prop } from "vue-property-decorator";
import { topBarOptions } from "@/components/topbar/constants/options";
import Button from "@/components/core/Button.vue";
import { IRouterNav } from '../../types/interfaces/router-nav';

@Component({
  components: {
    Button
  }
})
export default class TopBar extends Vue {
  topBarOptions = topBarOptions;

  handleClick(option: IRouterNav) {
      this.$router.push(option.path);
  }
}
</script>

<style lang="scss">
.topbar {
  display: flex;
  width: 100%;
  height: $top-bar-height;
}
</style>
