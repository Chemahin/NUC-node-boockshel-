import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        projects: [],
        polls: [],
        questions: []

    },
    mutations: {
        set (state, { type, items }) {
            state[type] = items
        }
    },
    getters: {
        resultsProjectList(state) {
            return state.projects
        },
        resultsPollList(state) {
            return state.polls
        },
        resultsQuestionList(state) {
            return state.questions
        }

    },

    actions: {
        getProjectListAction({ commit, state }) {
            axios
                .get('/api/projects')
                .then(response=> {
                    commit('set', { type: 'projects', items: response.data })
                    state.projects=response.data
                })
        },
        getPollListAction({ commit, state }) {
            axios
                .get('/api/polls')
                .then(response=> {
                    commit('set', { type: 'polls', items: response.data })
                    state.polls=response.data
                })
        },
        getQuestionListAction({ commit, state }) {
            axios
                .get('/api/questions')
                .then(response=> {
                    commit('set', { type: 'questions', items: response.data })
                    state.questions=response.data
                })
        }

    }
})
