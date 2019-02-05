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
        getFavoriteBeers (state) {
            return state.beers.filter(beer => beer.favorite)
        }
    },
    mutations: {
        setBeers (state, data) {
            const beers = data.beers.map(beer => {
                beer.favorite = favoriteBeerService.exist(beer)
                return beer
            })
            if(data.page === 1)
                state.beers = beers
            else {
                state.beers = state.beers.concat(beers)
            }
        },
        setFavoriteBeers (state) {
            state.beers = favoriteBeerService.getAll()
        },
        toggleFavoriteBeer (state, beer) {
            let index = state.beers.findIndex(b => beer.id === b.id)
            state.beers[index].favorite = !state.beers[index].favorite
            favoriteBeerService.toggleFavorite(state.beers[index])
        },
        setSearch (state, search) {
            state.search = search
        },
        setFavoriteBeersByName (state, name) {
            state.beers = state.beers.filter(beer => beer.name.toLowerCase().includes(name))
        }
    },
    actions: {
        fetchBeers (context, payload) {
            return  beerService.paginate(payload)
            .then(response => {
                context.commit('setBeers', { beers: response, page: payload.page })
                return response
            })
        },
        fetchBeersByName (context, payload) {
            return beerService.getByName(payload)
            .then(response => {
                context.commit('setBeers', { beers: response, page: payload.page })
                return response
            })
        },
        fetchFavoriteBeers (context) {
            context.commit('setFavoriteBeers')
        },
        fetchFavoriteBeersByName (context, payload) {
            context.commit('setFavoriteBeersByName', payload.name)
        }
    }
});
