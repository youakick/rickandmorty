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
          state.episodes = list
        },
    },
    actions: {
        async fetchEpisodes({commit}) {
          const data = await fetchEpisodes('episodes')
            commit('setEpisodes', data)
        }
    }
}