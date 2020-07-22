<template>
    <md-card class="workout-preset" md-with-hover>
        <md-card-header class="header">
            <div class="md-title">{{name}}</div>
            <div class="md-subhead">{{muscleAreasText}}</div>
        </md-card-header>
        <md-card-content class="content">
            <div v-if="showOverview" class="overview">
                <div class="description">{{description}}</div>
            </div>
            <div v-else>
                <ExerciseSet v-for="set in exerciseSets" :key="set.id" :exercise-set="set"/>
            </div>
        </md-card-content>
        <md-card-actions>
            <Button :label="buttonLabel" :primary="false" :raised="false" @click="handleClick"/>
        </md-card-actions>
    </md-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Button from "@/components/core/Button.vue";
import { PresetExerciseSet } from '../../store/entities/preset-exercise-set';
import ExerciseSet from '@/components/workout-preset/ExerciseSet.vue';
@Component({
    components: {
        Button,
        ExerciseSet
    }
})
export default class WorkoutPreset extends Vue {
  @Prop({ default: "" }) name!: string;
  @Prop({ default: ""}) description?: string;
  @Prop({ default: ""}) muscleAreas?: string[];
  @Prop({ default: () => [] }) exerciseSets?: PresetExerciseSet[];

  showOverview: boolean = true;

  get muscleAreasText(): string {
      if(!this.muscleAreas) {
          return "";
      }
      return this.muscleAreas.join(', ');
  }

  get buttonLabel(): string {
      return this.showOverview ? 'View sets' : 'Back';
  }

  handleClick() {
      this.showOverview = !this.showOverview;
  }
}
</script>

<style lang="scss">
.workout-preset {
  width: 20rem;
  height: auto;
  margin: $spacing-medium;
  .content {
      height: 7rem;
      overflow-y: scroll;
      .overview {
        .header {
            padding: 0;
            margin-bottom: $spacing-small;
        }
    }
  }
}
</style>
