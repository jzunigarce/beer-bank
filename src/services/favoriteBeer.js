const favoriteBeer = {}
const ITEM_NAME = 'favorite'

const getItem = () => JSON.parse(window.localStorage.getItem(ITEM_NAME) || '[]')

const setItem = item => {
    window.localStorage.setItem(ITEM_NAME, JSON.stringify(item))
}

const add = item => {
    const storage = getItem()
    if (!storage.some(el => el.id === item.id)) {
        storage.push(item)
        setItem((storage))
    }
}

const remove = item => {
    const storage = getItem()
    setItem(storage.filter(el => el.id !== item.id))
}

export default {
    exist(item) {
        const storage = getItem()
        return storage.findIndex(el => el.id === item.id) !== -1
    },
    getAll () {
        return getItem()
    },
    toggleFavorite (item) {
        if(item.favorite)
            add(item)
        else
            remove(item)
    }
}
