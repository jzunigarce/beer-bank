<template>
    <article class="beer-card">
        <div class="beer-img">
            <img :src="beer.image_url" alt="">
        </div>
        <div class="beer-favourite">
            <i class="far fa-star"></i>
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
    props: [
        'beer'
    ],
    data() {
        return {
        }
    },
  
}
</script>

<style>
    .beer-card {
        background-color: #ffffff;
        box-shadow: -1px 2px 20px 0px rgba(0, 0, 0, 0.07), 1px 4px 7px rgba(0, 0, 0, 0.06);
        padding-top: 10px;
        border-radius: 3px;
        position: relative;
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
</style>
