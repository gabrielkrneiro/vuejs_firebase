/**
 * 
 * According to best practices, here is the central state management 
 * using Vuex
*/

import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
import router from '@/router';

Vue.use(Vuex);

export const store = new Vuex.Store( {

    state : {

        appTitle    : "My Awesome App",
        user        : null,
        error       : null,
        loading     : false

    },

    mutations : {
        
        setUser(state, payload) {

            state.user = payload;
        },

        setError(state, payload) {

            state.error = payload;
        },

        setLoading(state, payload) {

            state.loading = payload;
        }

    },

    actions :   {

        userSignup({commit}, user) {

            commit('setLoading',true);
            firebase
                .auth()
                .createUserWithEmailAndPassword(user.email, user.password)
                .then(
                    firebaseUser => {

                        commit('setUser', {email : firebaseUser.email});
                        commit('setLoading', false);
                        commit('setError',null);
                        router.push({name : 'Home'});
                    },

                    error => {
                        
                        commit('setError',error.message);
                        commit('setLoading', false);
                    }
                )

        }
    },

    getters : {

        getUser(state) {
            
            return state.user;
        }

    }
});