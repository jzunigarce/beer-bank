<template>
    <div id="app">
        <b-container fluid class="main-header pb-5">
           <main-menu></main-menu>
            <b-row class="text-center title">
                <b-col>
                    <h1 class="text-white mb-0">The Beer Bank</h1>
                    <p class="text-white">Find your favourite beer here</p>
                </b-col>
            </b-row>
            <search-box></search-box>
        </b-container>
        <b-container fluid class="content">
            <router-view />
        </b-container>
    </div>
</template>
<script>

import MainMenu from '@/components/MainMenu'
import SearchBox from '@/components/SearchBox'

export default {
    components: {
        MainMenu,
        SearchBox,
    }
}
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.css';
@import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
@import 'assets/css/style.css';
</style>
