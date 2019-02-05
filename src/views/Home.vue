<template>
    <section class="beer-list">
        <beer-card v-for="beer in beers" :key="beer.id" :beer="beer" @showModal="showModal"></beer-card>
        <detail-beer :beer="detailBeer"></detail-beer>
        <loading @loading="loading"></loading>
    </section>
</template>

<script>
// @ is an alias to /src
import BeerCard from '@/components/BeerCard'
import DetailBeer from '@/components/DetailBeer'
import Loading from '@/components/Loading'

export default {
    name: 'home',
    components: {
        BeerCard,
        DetailBeer,
        Loading,
    },
    data() {
        return {
            detailBeer: null,
            page: 1,
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
    },
    methods: {
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
        loading () {
            this.page++
            if(!this.$store.getters.getSearch)
                this.fetchBeers({page: this.page})
            else
                this.fetchBeersByName({name: this.$store.getters.getSearch, page: this.page})
        }
    },
    created() {
        this.fetchBeers({page: this.page})
    }
};
</script>

<style scoped>
    
</style>
