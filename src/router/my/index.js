export default {
        path: '/my',
        component: () => import(/* webpackChunkName: "about" */ '../../views/My')
}