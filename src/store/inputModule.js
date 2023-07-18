export const inputModule = {
    state: () => ({
        inputValue: ''
    }),
    getters: {

    },
    mutations: {
        setInputValue(state, value) {
            state.inputValue = value
        }
    },
    actions: {
        saveInputValue({commit}, value) {
            commit('setInputValue', value)
        }
    },
}