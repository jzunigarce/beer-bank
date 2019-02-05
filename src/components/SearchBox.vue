<template>
    <b-row align-h="center" class="search-box">
        <b-col md="4">
            <b-form-input 
            placeholder="Search for beer name"
            class="search"
            v-model="search"
            @keyup.native.enter="searchBeers"></b-form-input>
            <p class="advanced-search">
                <router-link to='/advanced-search'>Advanced Search</router-link>
            </p>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: 'SearchBox',
    data() {
        return {
            search: '',
        }
    },
    watch: {
        '$route' () {
            this.search = ''
        }
    },
    methods: {
        searchBeers () {
            this.$store.commit('setSearch', this.search.replace(/\s/g, ''))
        }
    }
}
</script>

<style></style>
