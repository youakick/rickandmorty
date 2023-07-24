import {fetchCharacters} from "@/services/fetchData";

export const inputModule = {
    state: () => ({
        characters: [],
    }),
    getters: {
        getCharacters: (state) => state.characters,
    },
    mutations: {
        setCharacters(state, list) {
          state.characters = list
        },
    },
    actions: {
        async fetchCharacters({commit}, name) {
          const data = await fetchCharacters(name)
            commit('setCharacters', data)
        }
    }
}