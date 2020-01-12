<template>
    <b-navbar :fixed-top="true">
        <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <img
                src="../assets/logo.png"
                alt=""
            >
        </b-navbar-item>
    </template>
    <template slot="start">
        <b-navbar-item href="#">
            Add Workout
        </b-navbar-item>
        <b-navbar-item href="#">
            History
        </b-navbar-item>
        <b-navbar-dropdown label="Info">
            <b-navbar-item href="#">
                About
            </b-navbar-item>
            <b-navbar-item href="#">
                Contact
            </b-navbar-item>
        </b-navbar-dropdown>
    </template>

    <template slot="end">
        <b-navbar-item tag="div">
            <div class="buttons">
                <a class="button is-primary">
                    <strong>Sign up</strong>
                </a>
                <a class="button is-light">
                    Log in
                </a>
            </div>
        </b-navbar-item>
    </template>
    </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {

  },
})
export default class Navbar extends Vue {
}
</script>

<style>
</style>
