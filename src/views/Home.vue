<template>
    <section class="beer-list">
        <beer-card v-for="beer in beers" :key="beer.id" :beer="beer"></beer-card>
    </section>
</template>

<script>
// @ is an alias to /src
import beerApi from '@/services/Beer'
import BeerCard from '@/components/BeerCard'

export default {
    name: 'home',
    components: {
        BeerCard
    },
    data() {
        return {
            beers: []
        }
    },
    methods: {
        loadBeers () {
            beerApi.paginate(1)
            .then(beers => {
                this.beers = beers.map(beer => {
                    beer.favorite = false
                    return beer
                })
            })
            .catch(error => {
                alert(error)
            })
        }
    },
    created() {
        this.loadBeers()
    }
};
</script>

<style scoped>
    .beer-list {
        display: grid;
        grid-template-columns: repeat(3, 200px);
        grid-column-gap: 20px;
        grid-auto-rows: 1fr;
        grid-row-gap: 20px;
        justify-content: center;
    }
    @media screen and (max-width: 991px) {
        .beer-list {
            grid-template-columns: repeat(2, 350px);
        }
    }
    @media screen and (max-width: 767px) {
        .beer-list {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>
