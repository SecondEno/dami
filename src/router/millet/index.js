// 首页路由
export default {
    path: '/home',
    component: () => import(/* webpackChunkName: "millet" */ '@/views/Millet/Millet')

}