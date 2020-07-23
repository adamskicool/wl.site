<template>
    <div class="preset-exercise">
        <div class="name">{{exerciseName}}</div>
        <div class="sets">
            <SetIndicator v-for="set in exerciseSets" :key="set.id" :weight-guide="set.weightGuide" :reps="set.reps" :time="set.time"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { IPresetExerciseSet } from '../../store/entities/preset-exercise-set';
import SetIndicator from '@/components/workout-preset/SetIndicator.vue';

@Component({
    components: {
        SetIndicator
    }
})
export default class Exercise extends Vue {
  @Prop({ default: {} }) exerciseSets?: IPresetExerciseSet[];


  get exerciseName(): string {
      return this.exerciseSets && this.exerciseSets[0] && this.exerciseSets[0].exercise && this.exerciseSets[0].exercise.name || 'Unknown exercise' 
  }
}
</script>

<style lang="scss">
.preset-exercise {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .name {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .sets {
        display: flex;
    }
}
</style>
