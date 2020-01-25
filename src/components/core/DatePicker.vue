<template>
	<div class="date-picker">
		<md-datepicker v-model="selectedDate" :class="{ 'md-immediately': this.immediately}">
            <label>{{label}}</label>
        </md-datepicker>
	</div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class DatePicker extends Vue {
	@Prop({default: ''}) label!: string;
    @Prop({default: false}) immediately?: boolean;
    
    selectedDate: any = null;
}
</script>

<style lang="scss"></style>
