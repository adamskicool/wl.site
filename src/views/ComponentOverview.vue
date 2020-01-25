<template>
	<div class="core-components-overview">
		<div class="buttons">
			<h1>Buttons</h1>
			<Button :label="'Primary'" />
			<Button :label="'Not Primary'" :primary="false" />
			<Button :label="'Accent'" :accent="true" />
			<Button :label="'Disabled Button'" :disabled="true" />
		</div>
	</div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import Button from '@/components/core/Button.vue';

@Component({
	components: {
		Button
	}
})
export default class ComponentOverview extends Vue {
	@Prop({default: ''}) label?: string;
}
</script>

<style lang="scss"></style>
