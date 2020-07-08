<template>
  <md-snackbar
    :md-position="position"
    :md-duration="duration"
    :md-active="show"
  >
    <span>{{ message }}</span>
  </md-snackbar>
</template>

<script lang="ts">
import { State, Action, Getter } from "vuex-class";
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

import { namespace as alertNamespace } from "@/store/modules/alert/alert.store";

@Component
export default class Alert extends Vue {
  @State("message", { namespace: alertNamespace }) message!: string;
  @State("duration", { namespace: alertNamespace }) duration!: number;
  @State("show", { namespace: alertNamespace }) show!: boolean;

  position: string = "center";
}
</script>

<style lang="scss"></style>
