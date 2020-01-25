<template>
	<div class="select">
		<div class="md-layout md-gutter">
			<div class="md-layout-item">
				<md-field>
					<label for="movie">{{label}}</label>
					<md-select v-model="selectedItem" :disabled="disabled" :multiple="multiple" @md-selected="handleSelect">
						<md-option v-for="item in items" :value="item.value" :key="item.key">{{item.label}}</md-option>
					</md-select>
				</md-field>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import { ISelectItem } from '@/types/interfaces/select-item'

@Component
export default class Select extends Vue {
	@Prop({default: ''}) label!: string;
    @Prop({default: false}) disabled?: boolean;
    @Prop({default: false}) multiple?: boolean;
    @Prop({default: () => {return []}}) items?: ISelectItem[];
    
    selectedItem: any|any[] = null;

    handleSelect(event: Event) {
        this.$emit('selected', event);
    }
}
</script>

<style lang="scss"></style>
