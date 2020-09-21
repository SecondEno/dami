export default {
    path: '/login',
    component: () => import(/* webpackChunkName: "about" */ '../../views/Login')
}