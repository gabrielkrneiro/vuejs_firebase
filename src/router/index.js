import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import LandingRoute from './LandingRoute.js';
import SigninRoute from './SigninRoute';
import SignupRoute from './SignupRoute';
import HomeRoute from './HomeRoute';
import InvalidURL from './InvalidURL.js';


Vue.use(Router)

const router = new Router({
  mode : 'history',
  routes: [
    LandingRoute,
    SigninRoute,
    SignupRoute,
    HomeRoute,

    InvalidURL
  ]
})

router.beforeEach( (to, from, next) => {

  const requiresAuth = to.matched.some( record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if( requiresAuth && !isAuthenticated ) {

    next( { name : 'Signin' } );
  }
  else
  {

    next();
  }

})

export default router;