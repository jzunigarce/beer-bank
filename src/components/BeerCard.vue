<template>
    <article class="beer-card">
        <div class="beer-img">
            <img :src="beer.image_url" alt="">
        </div>
        <div class="beer-favourite">
            <i :class="[{ favorite: beer.favorite}, favoriteIcon, 'fa-star']" @click="toggleFavorite"></i>
        </div>
        <div class="beer-name">
            <strong>{{ beer.name }}</strong>
        </div>
        <p class="beer-tag">
            {{ beer.tagline }}
        </p>
    </article>
</template>

<script>
export default {
    name: 'BeerCard',
    props: ['beer'],
    data() {
        return {
            favoriteIcon: 'far'
        }
    },
    watch: {
    },
    computed: {
    },
    methods: {
        toggleFavorite () {
            this.beer.favorite = !this.beer.favorite
            this.favoriteIcon = !this.beer.favorite ? 'far' : 'fas'
        }
    }
}
</script>

<style>
    .beer-card {
        background-color: #ffffff;
        border-radius: 3px;
        box-shadow: -1px 2px 20px 0px rgba(0, 0, 0, 0.07), 1px 4px 7px rgba(0, 0, 0, 0.06);
        min-height: 230px;
        padding: 10px;
        position: relative;
        transition: all .2s ease-in-out;
    }
    .beer-card:hover {
        box-shadow: -1px 2px 20px 6px rgba(0, 0, 0, 0.07), 1px 4px 7px 4px rgba(0, 0, 0, 0.06);
        cursor: pointer;
        transform: scale(1.05);
    }
    .beer-img {
        display: flex;
        justify-content: center;
    }
    .beer-img img {
        height: 100px;
    }
    .beer-favourite {
        position: absolute;
        top: 5px;
        right: 5px;
    }
    .beer-name {
        color: #f39301;
        margin-top: 5px;
        text-align: center
    }
    .beer-tag {
        color: #b7b7b7;
        font-size: 0.9em;
        text-align: center;
    }
    .favorite {
        color: #f39301;
    }
    @media screen and (max-width: 991px) {
        .beer-card {
            min-height: 300px;
        }
        .beer-img img {
            height: 150px;
        }
    }
     @media screen and (max-width: 767px) {
        .beer-img img {
            height: 170px;
        }
    }
    
</style>
