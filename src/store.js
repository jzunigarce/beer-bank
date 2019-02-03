import Vue from 'vue';
import Vuex from 'vuex';

import beerService from '@/services/beer'
import favoriteBeerService from '@/services/favoriteBeer'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        beers: [],
        search: '',
        favoriteBeers: []
    },
    getters: {
        getBeers (state) {
            return state.beers
        },
        getSearch (state) {
            return state.search
        },
        allFavoriteBeer (state) {
            return state.favoriteBeer
        }
    },
    mutations: {
        setBeers (state, beers) {
            state.beers = beers.map(beer => {
                beer.favorite = favoriteBeerService.exist(beer)
                return beer
            })
        },
        toggleFavoriteBeer (state, beer) {
            let index = state.beers.findIndex(b => beer.id === b.id)
            state.beers[index].favorite = !state.beers[index].favorite
            favoriteBeerService.toggleFavorite(state.beers[index])
        },
        setSearch (state, search) {
            state.search = search
        }
    },
    actions: {
        fetchBeers (context, payload) {
            return  beerService.paginate(payload.page)
                .then(response => {
                    /* this.response = response.map(beer => {
                        beer.favorite = favoriteBeerService.exist(beer)
                        return beer
                    })  */
                    context.commit('setBeers', response)
                    return response
                })
        },
        fetchBeersByName (context, payload) {
            return beerService.getByName(payload.name)
                .then(response => {
                    context.commit('setBeers', response)
                    return response
                })
        }
    }
});
