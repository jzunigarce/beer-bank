<template>
    <b-row align-h="center">
        <b-col md="4">
            <b-form-input 
            placeholder="Search for beer name"
            class="search"
            v-model="search"
            @keyup.native.enter="searchBeers"></b-form-input>
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
        searchBeers () {
            if(this.search)
                this.$store.dispatch('fetchBeersByName', {name: this.search})
            else
                this.$store.dispatch('fetchBeers', {page: 1})
        }
    }
}
</script>

<style></style>
