// import Home from '../components/home/Home'

// using Lazy loading
const Home = () => System.import('@/components/home/Home.vue');

export default  {
    path        : '/home',
    name        : 'Home',
    component   : Home,
    meta        : {
        requiresAuth : true
    } 
}