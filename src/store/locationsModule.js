import { fetchLocations } from "../services/fetchData"

export const locationsModule = {
    state: () => ({
        locations: [],
    }),
    getters: {
        getLocations: (state) => state.locations,
    },
    mutations: {
        setLocations(state, list) {
          state.locations = [...state.locations, ...list]
        },
    },
    actions: {
        async fetchLocations({commit}, page) {
          const data = await fetchLocations(page)
            commit('setLocations', data)
        }
    }
}