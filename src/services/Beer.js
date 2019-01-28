import axios from 'axios'

export default {
    getAll () {
        return axios.get('/beers')
        .then(response => response.data)
    }
}