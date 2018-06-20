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

    // store the object state handlers (setters)
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

    // requested by the another components
    actions :   {

        userSignup({commit}, user) {

            commit('setLoading',true);
            firebase
                .auth()
                .createUserWithEmailAndPassword(user.email, user.password)
                .then(
                    
                    firebaseUser => {

                        commit('setUser', { email : firebaseUser.email });
                        commit('setLoading', false);
                        commit('setError',null);
                        router.push({ name : 'Home' });
                    },

                    error => {
                        
                        commit('setError',error.message);
                        commit('setLoading', false);
                    }
                )

        },

        userSignIn({commit}, form)
        {
            commit('setLoading', true);
            firebase
                .auth()
                .signInWithEmailAndPassword(form.email, form.password)
                .then(

                    firebaseUser => {

                        commit('setUser', { email : firebaseUser.email });
                        commit('setLoading', false);
                        commit('setError', null)
                        router.push({ name : 'Home' });
                    },

                    error => {

                        commit('setError', error.message);
                        commit('setLoading', false)
                    }
                )
        },

        autoSignIn( {commit}, firebaseUser ) {

            commit( 'setLoading', true );
            commit( 'setUser', { email : firebaseUser.email } );

            ( firebaseUser.email ) ? console.log('logged') : console.log('not logged');

            commit( 'setLoading', false );
        },

        userSignOut( {commit} ) {

            commit( 'setLoading', true );
            firebase
                .auth()
                .signOut();
            commit( 'setUser', null );
            commit( 'setLoading', false );
            router.push( { name : 'Landing' } );
        },

        setError( {commit}, payload ) {

            commit('setError', payload.message);
        }
    },

    getters : {

        isAuthenticated( state ) {

            return state.user !== null && state.user !== undefined;
        }
    }
});