<template>
    <div class="wrapper">
        <div class="core-components-overview">
            <div class="date-picker">
                <h1>Date Picker</h1>
                <DatePicker :label="'Pick A Date'" :immediately="true"/>
            </div>
            <div class="tables">
                <h1>Tables</h1>
                <Table :label="'Custom Table'" :items="users"/>
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
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import Button from '@/components/core/Button.vue';
import Select from '@/components/core/Select.vue';
import DatePicker from '@/components/core/DatePicker.vue';
import Table from '@/components/core/Table.vue';

@Component({
	components: {
        Button,
        Select,
        DatePicker,
        Table
    },
})
export default class ComponentOverview extends Vue {
    @Prop({default: ''}) label?: string;
    
    users: any[] = [
        {
            id: 1,
            name: 'Adam',
            email: 'adamtorkkeli@gmail.com',
            gender: 'Male',
            title: 'Full stack developer',
        },
        {
            id: 2,
            name: 'Sara',
            email: 'sara@langefors.se',
            gender: 'Female',
            title: 'Social Science Major',
        },{
            id: 3,
            name: 'Adam',
            email: 'adamtorkkeli@gmail.com',
            gender: 'Male',
            title: 'Full stack developer',
        },
        {
            id: 4,
            name: 'Sara',
            email: 'sara@langefors.se',
            gender: 'Female',
            title: 'Social Science Major',
        },
        {
            id: 5,
            name: 'Sara',
            email: 'sara@langefors.se',
            gender: 'Female',
            title: 'Social Science Major',
        },{
            id: 6,
            name: 'Adam',
            email: 'adamtorkkeli@gmail.com',
            gender: 'Male',
            title: 'Full stack developer',
        },
        {
            id: 7,
            name: 'Sara',
            email: 'sara@langefors.se',
            gender: 'Female',
            title: 'Social Science Major',
        },{
            id: 8,
            name: 'Adam',
            email: 'adamtorkkeli@gmail.com',
            gender: 'Male',
            title: 'Full stack developer',
        },
        {
            id: 9,
            name: 'Sara',
            email: 'sara@langefors.se',
            gender: 'Female',
            title: 'Social Science Major',
        },{
            id: 10,
            name: 'Adam',
            email: 'adamtorkkeli@gmail.com',
            gender: 'Male',
            title: 'Full stack developer',
        },
        {
            id: 11,
            name: 'Sara',
            email: 'sara@langefors.se',
            gender: 'Female',
            title: 'Social Science Major',
        }
    ]
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
