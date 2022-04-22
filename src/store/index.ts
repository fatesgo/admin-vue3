import { createStore } from 'vuex'
import user from './modules/user'
import routes from './modules/routes'
import getters from './getters'
const store = createStore({
    modules: {
        user,
        routes
    },
    getters: {
        ...getters,
    }
})
export default store
