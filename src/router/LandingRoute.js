// import Landing from '../components/landing/Landing';

//using Lazy loading
const Landing = () => System.import('@/components/landing/Landing');


export default  {
    path : '/',
    name : 'Landing',
    component : Landing
}