<template>
    <article class="beer-card">
        <img :src="beer.image_url" alt="" class=beer-img>
        {{ beer.name }} 
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
        border: 5px solid #f2f2f2;
    }
    .beer-img {
        height: 100px;
    }
</style>
