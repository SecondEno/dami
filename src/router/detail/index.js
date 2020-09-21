// 详情路由
export default {
    path: '/detail/:id',
    name: 'detail',
    component: () => import(/* webpackChunkName: "detail" */ '@/views/Detail/Detail')
}