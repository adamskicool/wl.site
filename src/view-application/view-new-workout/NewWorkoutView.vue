<template>
  <div class="new-workout-view">
    <transition-group class="presets" name="move">
        <WorkoutPreset v-for="preset in presets" v-bind:key="preset" :name="'Arm blaster'" :description="'This is an awesome workout. This is an awesome workout. This is an awesome workout. This is an awesome workout. This is an awesome workout. This is an awesome workout. This is an awesome workout.'" :muscle-areas="['bicep', 'tricep', 'pectoral major']"/>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import WorkoutPreset from "@/components/workout-preset/WorkoutPreset.vue";

@Component({
    components: {
        WorkoutPreset
    }
})
export default class NewWorkoutView extends Vue {
    get presets(): number[] {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
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