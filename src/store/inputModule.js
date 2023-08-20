import {fetchCharacters} from "@/services/fetchData";
import { fetchPageWithCharacters } from "../services/fetchData";

export const inputModule = {
    state: () => ({
        characters: [],
        inputSearch: false
    }),
    getters: {
        getCharacters: (state) => state.characters,
        getInputSearch: (state) => state.inputSearch
    },
    mutations: {
        setCharacters(state, list) {
        if(state.inputSearch === false){
            return state.characters = [...state.characters, ...list]
            } else {
                return state.characters = list
            }
        },
        setInputToogler(state) {
            state.inputSearch = true
        }
    },
    actions: {
        async fetchCharacters({commit}, name) {
          const data = await fetchCharacters(name)
            commit('setCharacters', data)
        },
        async fetchCharPages({commit}, page) {
            const data = await fetchPageWithCharacters(page)
            commit('setCharacters', data)
        }
    }
}