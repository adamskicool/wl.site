<template>
    <md-snackbar :md-position="position" :md-duration="isInfinity ? Infinity : duration" :md-active.sync="showSnackbar">
        <span>{{message}}</span>
    </md-snackbar>
</template>

<script lang="ts">
import { State, Action, Getter } from "vuex-class";
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

import {namespace as alertNamespace} from '@/store/modules/alert/alert.store';

@Component
export default class Alert extends Vue {
    @State('message', {namespace: alertNamespace}) message!: string;
    @State('duration', {namespace: alertNamespace}) duration!: number;
    
    @Watch('message')
    status(oldValue, newValue) {
        if(!newValue) {
            this.showSnackbar = false;
        }
        this.showSnackbar = true;
    }

    position: string = 'center';
    showSnackbar: boolean = false;
    isInfinity: boolean = false;
}
</script>

<style lang="scss"></style>
