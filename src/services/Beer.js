import axios from 'axios'

export default {
    getAll () {
        return axios.get('/beers')
        .then(response => response.data)
    },
    
    paginate (page) {
        return axios.get(`/beers?page?${page}`)
        .then(response => response.data)
    }
}