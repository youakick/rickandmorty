import axios from "axios"

export const inputModule = {
    state: () => ({
        inputValue: '',
        character: []
    }),
    getters: {

    },
    mutations: {
        setInputValue(state, value) {
            state.inputValue = value
        },
        setCharacters(state, value) {
            state.character = value
        }
    },
    actions: {
        saveInputValue({commit}, value) {
            commit('setInputValue', value)
        },
        async fethedData(state) {
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${state.inputValue}`);
                return response.data.results;
              } catch (error) {
                console.error('Error fetching data:', error);
                throw error;
              }
        },
        saveChar({commit, state}, value = state.inputValue){
            commit('setCharacters', value)
        }
    }
}