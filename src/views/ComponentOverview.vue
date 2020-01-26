<template>
    <div class="wrapper">
        <div class="core-components-overview">
            <div class="date-picker">
                <h1>Date Picker</h1>
                <DatePicker :label="'Pick A Date'" :immediately="true"/>
            </div>
            <div class="tables">
                <h1>Tables</h1>
                <Table :label="'Single Select'" :items="exercises" :selectType="ETableSelectType.single"/>
                <Table :label="'Multiple Select'" :items="exercises" :selectType="ETableSelectType.multiple"/>
                <Table :label="'No Select'" :items="exercises" :selectType="ETableSelectType.none"/>
            </div>
            <div class="buttons">
                <h1>Buttons</h1>
                <Button :label="'Primary'" />
                <Button :label="'Not Primary'" :primary="false" />
                <Button :label="'Accent'" :accent="true" />
                <Button :label="'Disabled Button'" :disabled="true" />
            </div>
            <div class="selectors">
                <h1>Selectors</h1>
                <Select :label="'Select Item'" :items="[{label: 'label', value: 'value'}]"/>
                <Select :label="'Disabled Selector'" :disabled="true"/>
                <Select :label="'Select Multiple Item'" :multiple="true" :items="[{label: 'label', value: 'value'}, {label: 'label2', value: 'value2'}]"/>
            </div>
            <div class="charts">
                <h1>Google Charts</h1>
                <GoogleChart :label="'Bicep Curl Progression'" :input="chart_input"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import Button from '@/components/core/Button.vue';
import Select from '@/components/core/Select.vue';
import DatePicker from '@/components/core/DatePicker.vue';
import Table from '@/components/core/Table.vue';
import GoogleChart from '@/components/google-chart/GoogleChart.vue';
import { ETableSelectType } from '@/types/enums/table-select-type';
import { IGoogleChartInput } from '@/types/interfaces/google-chart-input';
import { EGoogleChartType } from '@/types/enums/google-chart-type';

@Component({
	components: {
        Button,
        Select,
        DatePicker,
        Table,
        GoogleChart
    },
})
export default class ComponentOverview extends Vue {
    @Prop({default: ''}) label?: string;

    ETableSelectType = ETableSelectType;

    exercises: any[] = [
        {
            id: 1,
            name: 'Bicep curl',
            type: 'Isolation',
            weight: 18,
            reps: 10,
            mother: 'Thereze Torkkeli'
        },
        {
            id: 3,
            name: 'Bicep curl',
            type: 'Isolation',
            weight: 20,
            reps: 8,
            mother: 'Dick Torkkeli'
        }
    ];

    chart_input: IGoogleChartInput = {
        type: EGoogleChartType.line,
        labels: ['Date', 'Max Weight', 'Reps'],
        data: [
            ['2019-01-12', 12, 10],
            ['2019-01-13', 14, 8],
            ['2019-01-14', 16, 6]
        ]
    }
}
</script>

<style lang="scss">
.wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
}
</style>
