<template>
	<div>
		<md-table
			v-model="items"
			md-sort="''"
			md-card
			:md-fixed-header="fixedHeader"
		>
			<md-table-toolbar>
				<h1 class="md-title">{{ label }}</h1>
			</md-table-toolbar>

			<md-table-row slot="md-table-row" slot-scope="{item}">
				<md-table-cell
					v-for="term in Object.keys(item)"
					:md-label="getTermLabel(term)"
					:md-sort-by="term"
					:key="term"
					>{{ item[term] }}</md-table-cell
				>
			</md-table-row>
		</md-table>
	</div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class Table extends Vue {
	@Prop({default: ''}) label?: string;
	@Prop({
		default: () => {
			return [];
		}
	})
	items?: any[];
	@Prop({default: true}) fixedHeader?: boolean;

	getTermLabel(term: string): string {
		return term.toUpperCase();
	}
}
</script>

<style lang="scss"></style>
