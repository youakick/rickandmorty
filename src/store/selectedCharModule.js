import { fetchData } from "../services/fetchData"

export const selectedCharModule = {
    state: () => ({
        charData: [],
    }),
    getters: {
        getExactChar: (state) => state.charData
    },
    mutations: {
        setCharData(state, data) {
            state.charData = data
        }
    },
    actions: {
        async fetchSelectedChar({commit}, id) {
            const data = await fetchData(id)
            commit('setCharData', data)
        }
    }
}