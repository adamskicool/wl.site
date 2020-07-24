<template>
  <div class="workout-selector-view">
    <transition-group class="presets" name="move">
        <!-- TODO: Swapp out muscle areas for calculated propery from BE... -->
        <WorkoutPreset v-for="preset in workoutPresets" v-bind:key="preset.id" :name="preset.name" :description="preset.description" :muscle-areas="['bicep', 'tricep', 'pectoral major']" :exercise-sets="preset.presetExerciseSets"/>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
import { namespace as libraryNamespace } from "@/store/modules/library/library.store";
import WorkoutPreset from "@/components/workout-preset/WorkoutPreset.vue";
import {IWorkoutPreset} from '@/store/entities/workout-preset';

@Component({
    components: {
        WorkoutPreset
    }
})
export default class WorkoutSelectorView extends Vue {
    @Getter("workoutPresets", { namespace: libraryNamespace }) workoutPresets!: IWorkoutPreset[];
}
</script>

<style lang="scss" scoped>
// .flip-list-move {
//   transition: transform 1s;
// }
.presets {
    display: flex;
    flex-wrap: wrap;
}
</style>