<template>
    <div>
        <b-jumbotron border-variant="warning" bg-variant="light">
            <b-form inline class="d-flex justify-content-center frmAdvancedSearch mb-3">
                <b-input id="advancedSearch" 
                    v-model.trim="advancedSearch" 
                    label="Advanced Search"
                    class="mr-2"
                    :type="typeInput"></b-input>
                <b-button @click="advancedSearchBeer">Search</b-button>
            </b-form>
            <b-form-group label="" class="text-center">
                <b-form-radio-group id="advancedSearchSelected" v-model="advancedSearchSelected" :options="options">
                </b-form-radio-group >
            </b-form-group>
        </b-jumbotron>
        <section class="beer-list">
         <beer-card v-for="beer in beers" :key="beer.id" :beer="beer" @showModal="showModal"></beer-card>
            <detail-beer :beer="detailBeer"></detail-beer>
            <loading @loading="loading"></loading>
        </section>

    </div>
</template>

<script>
// @ is an alias to /src
import BeerCard from '@/components/BeerCard'
import DetailBeer from '@/components/DetailBeer'
import Loading from '@/components/Loading'

export default {
    name: 'advancedSearch',
    components: {
        BeerCard,
        DetailBeer,
        Loading,
    },
    data() {
        return {
            detailBeer: null,
            advancedSearch: '',
            advancedSearchSelected: '',
            options: [
                { text: 'Max IBU', value: 'ibu_gt' },
                { text: 'Min IBU', value: 'ibu_lt' },
                { text: 'Max ABV', value: 'abv_gt' },
                { text: 'Min ABV', value: 'abv_lt' },
                { text: 'Max EBC', value: 'ebc_gt' },
                { text: 'Min EBC', value: 'ebc_lt' },
                { text: 'Brewed before', value: 'brewed_before'},
                { text: 'Brewed after', value: 'brewed_after' },
            ],
            page: 1,
            query: '',
            typeInput: 'text'
        }
    },
    computed: {
        beers () {
            return this.$store.getters.getBeers
        },
        search () {
            return this.$store.state.search
        },
    },
    watch: {
        search (newValue) {
            this.page = 1
            if(newValue) {
                this.fetchBeersByName({name: newValue, page: this.page})
            } else {
                this.fetchBeers({page: this.page})  
            }
        },
        advancedSearchSelected (newValue) {
            this.advancedSearch = ''
            if(newValue === 'brewed_before' || newValue === 'brewed_after') 
                this.typeInput = 'date'
            else
                this.typeInput = 'text'
        },
    },
    methods: {
        advancedSearchBeer () {
            let queryValue = this.advancedSearch
            if(this.typeInput === 'date' && queryValue) 
                queryValue = this.getFormatDate(queryValue)
            
            this.query = (this.advancedSearchSelected && queryValue) ? 
                `${this.advancedSearchSelected}=${queryValue}` : ''
            this.page = 1
            this.getBeers()
        },
        getFormatDate (date) {
            const selectedDate = new Date(date)
            let mm = selectedDate.getMonth() + 1
            if(mm < 10)
                mm = `0${mm}`
            let yyyy = selectedDate.getFullYear()
            return `${mm}-${yyyy}`
        },
        fetchBeers (page) {
           this.$store.dispatch('fetchBeers', page)
        },
        fetchBeersByName (data) {
           this.$store.dispatch('fetchBeersByName', data)
        },
        showModal (beer) {
            if(!beer.similar)
                this.$set(beer, 'similar', [])
            this.detailBeer = beer
        },
        getBeers () {
            if(!this.$store.getters.getSearch)
                this.fetchBeers({page: this.page, query: this.query })
            else
                this.fetchBeersByName({name: this.$store.getters.getSearch, page: this.page, query: this.query})
        },
        loading () {
            this.page++
            this.getBeers()
        }
    },
    mounted() {
        this.fetchBeers({page: this.page})
    }
};
</script>

<style scoped>
    
</style>

