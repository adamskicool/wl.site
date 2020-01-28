<template>
  <div class="text-input">
    <md-field>
      <label>{{ label }}</label>
      <md-input v-model="value" :type="type"></md-input>
      <span v-if="helperText" class="md-helper-text">{{ helperText }}</span>
    </md-field>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { EInputType } from "@/types/enums/input-type.ts";

@Component({})
export default class TextInput extends Vue {
  @Prop({ default: "" }) label!: string;
  @Prop({ default: EInputType.text }) type!: EInputType;
  @Prop({ default: false })
  disabled?: boolean;
  @Prop({ default: "" }) helperText?: string;

  value: string = "";

  @Watch("value")
  onValueChange() {
    this.$emit("change", this.value);
  }
}
</script>

<style lang="scss"></style>
