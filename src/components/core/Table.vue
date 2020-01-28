<template>
    <md-table
        class="table"
        v-model="items"
        md-card
        :md-fixed-header="fixedHeader"
        @md-selected="handleOnSelect"
    >
        <md-table-toolbar>
            <h1 class="md-title">{{ label }}</h1>
        </md-table-toolbar>

        <md-table-row v-if="selectType === ETableSelectType.none" slot="md-table-row" slot-scope="{item}">
            <md-table-cell
                v-for="term in Object.keys(item)"
                :md-label="getTermLabel(term)"
                :md-sort-by="term"
                :key="term"
                >{{ item[term] }}</md-table-cell
            >
        </md-table-row>

        <md-table-row v-else slot="md-table-row" slot-scope="{item}" :md-selectable="selectType">
            <md-table-cell
                v-for="term in Object.keys(item)"
                :md-label="getTermLabel(term)"
                :md-sort-by="term"
                :key="term"
                >{{ item[term] }}</md-table-cell
            >
        </md-table-row>
    </md-table>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import { ETableSelectType } from '@/types/enums/table-select-type'

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
    @Prop({default: null}) selectType?: ETableSelectType;

    ETableSelectType = ETableSelectType;

	getTermLabel(term: string): string {
		return term.toUpperCase();
    }
    
    handleOnSelect(event: Event){
        this.$emit('select', event);
    }
}
</script>

<style lang="scss" scoped>
.table {
    margin: 1rem;
}
</style>
