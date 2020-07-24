<template>
  <div class="home-view">
    <h1>Home View</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class HomeView extends Vue {}
</script>

<style lang="scss" scoped>
.home-view{}
</style>
