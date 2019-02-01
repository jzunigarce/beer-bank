<template>
    <section class="beer-list">
        <beer-card v-for="beer in beers" :key="beer.id" :beer="beer" @showModal="showModal"></beer-card>
        <detail-beer :beer="detailBeer"></detail-beer>
    </section>
</template>

<script>
// @ is an alias to /src
import beerApi from '@/services/Beer'
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
            beers: [],
            detailBeer: null
        }
    },
    methods: {
        loadBeers () {
            let vm = this
            beerApi.paginate(1)
            .then(beers => {
                this.beers = beers.map(beer => {
                    beer.favorite = vm.$exist(beer)
                    return beer
                })
            })
            .catch(error => {
                alert(error)
            })
        },
        showModal (beer) {
            if(!beer.similar)
                this.$set(beer, 'similar', [])
            this.detailBeer = beer
        }
    },
    created() {
        this.loadBeers()
    }
};
</script>

<style scoped>
    
</style>
