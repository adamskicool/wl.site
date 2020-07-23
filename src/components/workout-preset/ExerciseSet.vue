<template>
    <div class="preset-exercise-set">
        {{exerciseSet.id}}
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { IPresetExerciseSet } from '../../store/entities/preset-exercise-set';

@Component
export default class ExerciseSet extends Vue {
  @Prop({ default: {} }) exerciseSet?: IPresetExerciseSet;

}
</script>

<style lang="scss">
</style>
