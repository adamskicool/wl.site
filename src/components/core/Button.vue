<template>
	<div class="button">
		<md-button
			:class="{
				'md-raised': this.raised,
				'md-primary': this.primary,
				'md-accent': this.accent
			}"
			:disabled="this.disabled"
            @click="this.handleClick"
			>{{ label }}</md-button
		>
	</div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class Button extends Vue {
	@Prop({default: ''}) label!: string;
	@Prop({default: false}) disabled?: boolean;
	@Prop({default: true}) raised?: boolean;
	@Prop({default: true}) primary?: boolean;
    @Prop({default: false}) accent?: boolean;
    
    handleClick(event: Event) {
        this.$emit('click', event)
        console.log('clicked!')
    }
}
</script>

<style lang="scss"></style>
