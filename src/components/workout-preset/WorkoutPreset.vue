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
            <div v-else class="exercises">
                <Exercise class="exercise" v-for="groupedSet in groupedExerciseSets" :key="groupedSet.exerciseNumber" :exercise-sets="groupedSet.presetExerciseSets"/>
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
import { IPresetExerciseSet } from '../../store/entities/preset-exercise-set';
import Exercise from '@/components/workout-preset/Exercise.vue';
import {groupExerciseSets} from '@/components/workout-preset/helper';

@Component({
    components: {
        Button,
        Exercise
    }
})
export default class WorkoutPreset extends Vue {
  @Prop({ default: "" }) name!: string;
  @Prop({ default: ""}) description?: string;
  @Prop({ default: ""}) muscleAreas?: string[];
  @Prop({ default: () => [] }) exerciseSets?: IPresetExerciseSet[];

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

  get groupedExerciseSets(): any {
      return groupExerciseSets(this.exerciseSets ? this.exerciseSets : [])
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
        .exercises {
            .exercise {
                margin-top: $spacing-small;
            }
        }
  }
}
</style>
