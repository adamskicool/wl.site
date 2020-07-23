<template>
    <div v-if="type === 'reps'" class="reps-indicator">
        <div class="reps">{{reps}}</div>
        <div class="weight-guide">{{weightGuideSymbol}}</div>
    </div>
    <div v-else class="time-indicator">
        <div class="time">{{time}}</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { IPresetExerciseSet } from '../../store/entities/preset-exercise-set';
import { EWeightGuide } from '@/store/entities/types/weight-guide';

@Component
export default class SetIndicator extends Vue {
  @Prop({ default: 0 }) reps!: number;
  @Prop({ default: 0 }) weightGuide!: EWeightGuide;
  @Prop({ default: 0 }) time!: number;
  @Prop({ default: 'reps' }) type?: string;

  EWeightGuide = EWeightGuide;

  get weightGuideSymbol(): string {
      switch(this.weightGuide) {
          case EWeightGuide.Start:
              return 'B';
          case EWeightGuide.Increase:
              return '+';
          default:
              return '-';
      }
  }
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

    .reps, .weight-guide {
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

    .weight-guide {
        grid-area: 'b';
        background-color: $red;
        border-radius: 0px 0px 4px 4px;
        overflow: hidden;
    }
}
</style>
