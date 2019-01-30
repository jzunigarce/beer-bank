<template>
    <section class="beer-list">
        <beer-card v-for="beer in beers" :key="beer.id" :beer="beer" @showModal="showModal"></beer-card>
        <b-modal id="modalBeer" ref="modalBeer">
            <template v-if="beerDetail">
                 <div class="beer-name">
                    <strong>{{ beerDetail.name }}</strong>
                </div>
                <p class="beer-tag">
                    {{ beerDetail.tagline }}
                </p>
            </template>
        </b-modal>
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
            beers: [],
            beerDetail: null,
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
        },
        showModal (beer) {
            this.beerDetail = beer;
            this.$refs.modalBeer.show()
        }
    },
    created() {
        this.loadBeers()
    }
};
</script>

<style scoped>
    
</style>
