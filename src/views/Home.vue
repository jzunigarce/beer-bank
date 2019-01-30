<template>
    <section class="beer-list">
        <beer-card v-for="beer in beers" :key="beer.id" :beer="beer" @showModal="showModal"></beer-card>
        <b-modal id="detailBeer" ref="detailBeer" class="detail-beer">
            <template v-if="beerDetail">
                <div class="detail-image">
                    <img :src="beerDetail.image_url" alt="">
                </div>
                <div class="info">
                    <div class="detail-name">
                        <strong>{{ beerDetail.name }}</strong>
                    </div>
                    <p class="detail-tag">
                        {{ beerDetail.tagline }}
                    </p>
                    <p class="detail-unity">
                        <strong>IBU:</strong> {{ beerDetail.ibu }}%
                        <strong>ABV:</strong> {{ beerDetail.abv }}%
                        <strong>EBC:</strong> {{ beerDetail.ebc }}%
                    </p>
                    <p class="detail-description">
                        {{ beerDetail.description }}
                    </p>
                    <p class="detail-food-pairing">
                        <strong>Best served with</strong>
                        <ul>
                            <li v-for="food in beerDetail.food_pairing" :key="food">{{ food }}</li>
                        </ul>
                    </p>
                </div>
                <div class="suggestion">
                    <strong>You might also like:</strong>
                    <div class="similar">
                        <div v-for="similar in beerDetail.similar" :key="similar[0].id">
                            <img :src="similar[0].image_url" alt="">
                            <strong>{{ similar[0].name }}</strong>
                        </div>
                    </div>
                </div>
            </template>
            <div slot="modal-footer">

            </div>
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
            this.beerDetail.similar = []
            Promise.all([beerApi.random(), beerApi.random(), beerApi.random()])
            .then(values => {
                this.beerDetail.similar = values
                this.$refs.detailBeer.show()
            })
        }
    },
    created() {
        this.loadBeers()
    }
};
</script>

<style scoped>
    
</style>
