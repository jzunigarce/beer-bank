<template>
    <section class="beer-list">
        <beer-card v-for="beer in beers" :key="beer.id" :beer="beer" @showModal="showModal" @removeFavorite="removeFavorite"></beer-card>
         <detail-beer :beer="detailBeer"></detail-beer>
    </section>
</template>

<script>
import favoriteBeerService from '@/services/favoriteBeer'
import BeerCard from '@/components/BeerCard'
import DetailBeer from '@/components/DetailBeer'

export default {
    name: 'favorite',
    components: {
        BeerCard,
        DetailBeer,
    },
    data () {
        return {
            // beers: this.$getAll(),
            detailBeer: null
        }
    },
    computed: {
        beers () {
            return favoriteBeerService.getAll()
        }
    },
    methods:  {
        showModal () {

        }, 
        removeFavorite () {
            //this.beers = this.$getAll()
        },
        showModal (beer) {
            if(!beer.similar)
                this.$set(beer, 'similar', [])
            this.detailBeer = beer
        }
    }
}
</script>

<style>

</style>
