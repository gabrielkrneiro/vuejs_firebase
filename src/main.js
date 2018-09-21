// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import {store} from './store/index.js'
import configure from './firebaseConfigure.js'
import firebase from 'firebase'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { dom } from '@fortawesome/fontawesome-svg-core'

Vue.use(Vuetify)
Vue.component('font-awesome-icon', FontAwesomeIcon)
dom.watch();

firebase.initializeApp(configure);

Vue.config.productionTip = false

/* eslint-disable no-new */
const unsubscribe = firebase
  .auth()
  .onAuthStateChanged((firebaseUser) => {
    new Vue({
      el: '#app',
      router,
      store,
      render: h => h( App ),
      created () {

        if ( firebaseUser ) {

          store.dispatch( 'autoSignIn', firebaseUser )
        }
      }
    })

    unsubscribe()
  })
