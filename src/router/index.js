import Vue from 'vue'
import Router from 'vue-router'

import LandingRoute from './LandingRoute.js';
import SigninRoute from './SigninRoute';
import SignupRoute from './SignupRoute';
import HomeRoute from './HomeRoute';


Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    LandingRoute,
    SigninRoute,
    SignupRoute,
    HomeRoute
  ]
})
