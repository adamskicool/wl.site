<template>
  <div class="google-chart-line">
    <md-card>
      <md-card-header>
        <div class="md-title">{{ label }}</div>
      </md-card-header>
      <GChart :type="this.input.type" :data="this.getFormattedData()" />
    </md-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { GChart } from "vue-google-charts";
import { EGoogleChartType } from "@/types/enums/google-chart-type";
import { IGoogleChartInput } from "@/types/interfaces/google-chart-input";

@Component({
  components: {
    GChart
  }
})
export default class GoogleChart extends Vue {
  @Prop({ default: "" }) label!: string;
  @Prop() input!: IGoogleChartInput;

  EGoogleChartType = EGoogleChartType;

  getFormattedData() {
    return [this.input.labels, ...this.input.data];
  }
}
</script>

<style lang="scss"></style>
