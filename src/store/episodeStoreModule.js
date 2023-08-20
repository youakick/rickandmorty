import { fetchEpisodes } from "../services/fetchData";

export const episodeStoreModule = {
    state: () => ({
        episodes: [],
        searchedName:""
    }),
    getters: {
        getEpisodes: (state) => state.episodes
    },
    mutations: {
        setEpisodes(state, list) {
          state.episodes = [...state.episodes,...list]
        },
    },
    actions: {
        async fetchEpisodes({commit}, page) {
          const data = await fetchEpisodes(page)
            commit('setEpisodes', data)
        }
    }
}