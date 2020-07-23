<template>
    <div v-if="type === 'reps'" class="reps-indicator">
        <div class="reps">{{reps}}</div>
        <div class="weight">{{weight}}</div>
    </div>
    <div v-else class="time-indicator">
        <div class="time">{{time}}</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { IPresetExerciseSet } from '../../store/entities/preset-exercise-set';

@Component
export default class SetIndicator extends Vue {
  @Prop({ default: 0 }) reps!: number;
  @Prop({ default: 0 }) weight!: number;
  @Prop({ default: 0 }) time!: number;
  @Prop({ default: 'reps' }) type?: string;
}
</script>

<style lang="scss">
.reps-indicator {
    display: grid;
    grid-template-areas: 
    'a'
    'b';
    grid-template-columns: 1.5rem;
    grid-template-rows: 1rem 1rem;
    margin-left: $spacing-small;

    .reps, .weight {
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        color: $white;
    }

    .reps {
        grid-area: 'a';
        background-color: $blue;
        border-radius: 4px 4px 0px 0px;
        overflow: hidden;
    }

    .weight {
        grid-area: 'b';
        background-color: $red;
        border-radius: 0px 0px 4px 4px;
        overflow: hidden;
    }
}
</style>
