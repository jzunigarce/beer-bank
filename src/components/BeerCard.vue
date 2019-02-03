<template>
    <article class="beer-card">
        <div class="beer-favourite">
            <i :class="[{ favorite: beer.favorite}, favoriteIcon, 'fa-star']" @click="toggleFavorite"></i>
        </div>
        <div @click="showDetail">
            <div class="beer-img">
                <img :src="beer.image_url" alt="">
            </div>
            <div class="beer-name">
                <strong>{{ beer.name }}</strong>
            </div>
            <p class="beer-tag">
                {{ beer.tagline }}
            </p>
        </div>
        
    </article>
</template>

<script>
import favoriteBeerService from '@/services/favoriteBeer'

export default {
    name: 'BeerCard',
    props: ['beer'],
    data() {
        return {
            favoriteIcon: ''
        }
    },
    watch: {
    },
    computed: {

    },
    methods: {
        toggleFavorite () {
            /*this.beer.favorite = !this.beer.favorite
            if(this.beer.favorite)
                favoriteBeerService.add(this.beer)
            else {
                favoriteBeerService.remove(this.beer)
                this.$emit('removeFavorite')
            }*/
            this.$store.commit('toggleFavoriteBeer', this.beer)
            this.toggleIconFavorite ()
        },
        toggleIconFavorite () {
            this.favoriteIcon = !this.beer.favorite ? 'far' : 'fas'
        },
        showDetail () {
            this.$emit('showModal', this.beer)
        },
    },
    mounted () {
        this.toggleIconFavorite()
    }
}
</script>

<style>
</style>
