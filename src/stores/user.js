import { createStore } from "vuex";

export default createStore({
    state: {
        email: 'email@pku.edu.cn',
        username: 'Sam Wong',
        token: '0',
        profile: '/src/assets/images/default_profile.png'
    },
    mutations: {
        setEmail(state, email) {
            state.email = email;
        },
        setUsername(state, username) {
            state.username = username;
        },
        setToken(state, token) {
            state.token = token;
        },
        setProfile(state, profile) {
            state.profile = profile;
        },
    }
})
