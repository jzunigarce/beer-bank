
const Storage = {
    install(Vue, opt)  {
        Vue.prototype.$add = item => {
            const storage = getItem()
            if (!storage.some(el => el.id === item.id)) {
                storage.push(item)
                setItem((storage))
            }
        }

        Vue.prototype.$exist = item => {
            const storage = getItem()
            return storage.findIndex(el => el.id === item.id) !== -1
        }

        Vue.prototype.$remove = item => {
            const storage = getItem()
            setItem(storage.filter(el => el.id !== item.id))
        }

        Vue.prototype.$getAll = () => getItem()
        
        const getItem = () => JSON.parse(window.localStorage.getItem(opt.name) || '[]')

        const setItem = item => {
            window.localStorage.setItem(opt.name, JSON.stringify(item))
        }

    }

};

export default Storage