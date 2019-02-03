import axios from 'axios'

const END_POINT = '/beers'
export default {
    getAll () {
        return axios.get(`${END_POINT}`)
        .then(response => response.data)
    },
    
    paginate (page) {
        return axios.get(`${END_POINT}?page?${page}`)
        .then(response => response.data)
    },

    getByName (name) {
        return axios.get(`${END_POINT}?beer_name=${name}`)
            .then(response => response.data)
    },

    random () {
        return axios.get(`${END_POINT}/random`)
        .then(response => response.data)
    }

}