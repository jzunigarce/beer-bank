<template>
    <section class="beer-list">
        <beer-card v-for="beer in favoriteBeers" :key="beer.id" :beer="beer" @showModal="showModal"></beer-card>
         <detail-beer :beer="detailBeer"></detail-beer>
    </section>
</template>

<script>
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
            detailBeer: null
        }
    },
    computed: {
        search () {
            return this.$store.state.search
        },
        favoriteBeers () {
            return this.$store.getters.getFavoriteBeers
        }
    },
    watch: {
        search (newValue) {
            if(newValue)
                this.$store.dispatch('fetchFavoriteBeersByName', {name: this.search})
            else
                this.$store.dispatch('fetchFavoriteBeers')
        }
    },
    methods:  {
        showModal (beer) {
            if(!beer.similar)
                this.$set(beer, 'similar', [])
            this.detailBeer = beer
        }
    },
    created () {
        this.$store.dispatch('fetchFavoriteBeers')
    }
}
</script>

<style>

</style>
