<template>
    <b-modal id="detailBeer" ref="detailBeer" class="detail-beer" v-if="beer">
        <div class="detail-image">
            <img :src="beer.image_url" alt="">
        </div>
        <div class="info">
            <div class="detail-name">
                <strong>{{ beer.name }}</strong>
            </div>
            <p class="detail-tag">
                {{ beer.tagline }}
            </p>
            <p class="detail-unity">
                <strong>IBU:</strong> {{ beer.ibu }}%
                <strong>ABV:</strong> {{ beer.abv }}%
                <strong>EBC:</strong> {{ beer.ebc }}%
            </p>
            <p class="detail-description">
                {{ beer.description }}
            </p>
            <p class="detail-food-pairing">
                <strong>Best served with</strong>
                <ul>
                    <li v-for="food in beer.food_pairing" :key="food">
                        {{ food }}
                    </li>
                </ul>
            </p>
        </div>
        <div class="suggestion">
            <strong>You might also like:</strong>
            <div class="similar">
                <div v-for="similar in beer.similar" :key="similar.id">
                    <img :src="similar.image_url" alt="">
                    <strong>{{ similar.name }}</strong>
                </div>
            </div>
        </div>
        <div slot="modal-footer"></div>
    </b-modal>
</template>

<script>
import beerApi from '@/services/beer'

export default {
    props: ['beer'],
    watch: {
        beer (b) {
            if (b) {
                b.similar = []
                Promise.all([beerApi.random(), beerApi.random(), beerApi.random()])
                .then(data => {
                    data.forEach(d => {
                        b.similar.push(d[0])
                    })
                    this.$refs.detailBeer.show()
                })
            }
        }
    }
}
</script>

<style>

</style>
