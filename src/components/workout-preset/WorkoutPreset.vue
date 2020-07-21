<template>
    <md-card class="workout-preset" md-with-hover>
      <md-card-header>
        <div class="md-title">{{name}}</div>
        <div class="md-subhead">{{muscleAreasText}}</div>
      </md-card-header>
      <md-card-content>{{description}}</md-card-content>
      <md-card-actions>
        <Button :label="buttonLabel" :primary="false" :raised="false"/>
      </md-card-actions>
    </md-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Button from "@/components/core/Button.vue";

@Component({
    components: {
        Button
    }
})
export default class WorkoutPreset extends Vue {
  @Prop({ default: "" }) name!: string;
  @Prop({ default: ""}) description?: string;
  @Prop({ default: ""}) muscleAreas?: string[];

  get muscleAreasText(): string {
      if(!this.muscleAreas) {
          return "";
      }
      return this.muscleAreas.join(', ');
  }

  get buttonLabel(): string {
      return 'view';
  }
}
</script>

<style lang="scss">
.workout-preset {
  width: 20rem;
  height: auto;
  margin: $spacing-medium;
}
</style>
