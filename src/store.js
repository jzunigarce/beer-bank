import Vue from 'vue';
import Vuex from 'vuex';

import beerService from '@/services/beer'
import favoriteBeerService from '@/services/favoriteBeer'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        beers: []
    },
    mutations: {
        setBeers (state, beers) {
            state.beers = beers
        }
    },
    actions: {
        fetchBeers (context, payload) {
            return  beerService.paginate(payload.page)
                .then(response => {
                    this.response = response.map(beer => {
                        beer.favorite = favoriteBeerService.exist(beer)
                        return beer
                    })
                    context.commit('setBeers', response)
                    return response
                })
        }
    }
});
