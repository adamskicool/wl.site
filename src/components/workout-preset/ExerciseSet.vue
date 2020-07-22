<template>
    <div class="preset-exercise-set">
        {{exerciseSet.id}}
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { PresetExerciseSet } from '../../store/entities/preset-exercise-set';

@Component
export default class ExerciseSet extends Vue {
  @Prop({ default: {} }) exerciseSet?: PresetExerciseSet;

}
</script>

<style lang="scss">
</style>
