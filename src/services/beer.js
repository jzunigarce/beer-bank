import axios from 'axios'

const END_POINT = '/beers'
export default {
    getAll () {
        return axios.get(`${END_POINT}`)
        .then(response => response.data)
    },
    
    paginate (data) {
        const query = data.query ? `&${data.query}` : ''
        return axios.get(`${END_POINT}?page=${data.page}${query}`)
        .then(response => response.data)
    },

    getByName (data) {
        const query = data.query ? `&${data.query}` : ''
        return axios.get(`${END_POINT}?beer_name=${data.name}&page=${data.page}${query}`)
            .then(response => response.data)
    },

    random () {
        return axios.get(`${END_POINT}/random`)
        .then(response => response.data)
    }

}