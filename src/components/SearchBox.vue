<template>
    <b-row align-h="center">
        <b-col md="4">
            <b-form-input 
            placeholder="Search for beer name"
            class="search"
            v-model="search"
            @keyup.native.enter="searchBeer(3)"></b-form-input>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: 'SearchBox',
    data() {
        return {
            search: ''
        }
    },
    methods: {
        searchBeer () {
            alert('hola')
        }
    }
}
</script>

<style>

</style>
