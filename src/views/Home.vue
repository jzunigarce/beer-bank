<template>
    <section class="beer-list">
        <beer-card v-for="beer in beers" :key="beer.id" :beer="beer" @showModal="showModal"></beer-card>
        <detail-beer :beer="detailBeer"></detail-beer>
    </section>
</template>

<script>
// @ is an alias to /src
import beerService from '@/services/beer'
import favoriteBeerService from '@/services/favoriteBeer'
import BeerCard from '@/components/BeerCard'
import DetailBeer from '@/components/DetailBeer'

export default {
    name: 'home',
    components: {
        BeerCard,
        DetailBeer,
    },
    data() {
        return {
            detailBeer: null,
            //beers: [],
        }
    },
    computed: {
        beers () {
            return this.$store.getters.getBeers
        }
    },
    methods: {
       fetchBeers (page) {
           this.$store.dispatch('fetchBeers', page)
            /* let vm = this
            beerService.paginate(page)
            .then(beers => {
                this.beers = beers.map(beer => {
                    beer.favorite = favoriteBeerService.exist(beer)
                    return beer
                })
            })
            .catch(error => {
                alert(error)
            }) */
        },
        showModal (beer) {
            if(!beer.similar)
                this.$set(beer, 'similar', [])
            this.detailBeer = beer
        }
    },
    created() {
        this.fetchBeers({page: 1})
    }
};
</script>

<style scoped>
    
</style>
