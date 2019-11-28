import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import all from '@/components/topics/all'
import good from '@/components/topics/good'
import weex from '@/components/topics/weex'
import share from '@/components/topics/share'
import ask from '@/components/topics/ask'
import job from '@/components/topics/job'
import show from '@/components/topics/show'
import user from '@/components/topics/user'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: index,
        children: [{
            path: '/',
            name: 'all',
            component: all
        }, {
            path: '/good',
            name: 'good',
            component: good
        }, {
            path: '/weex',
            name: 'weex',
            component: weex
        }, {
            path: '/share',
            name: 'share',
            component: share
        }, {
            path: '/ask',
            name: 'sak',
            component: ask
        }, {
            path: '/job',
            name: 'job',
            component: job
        }, {
            path: '/show/:id',
            name: 'show',
            component: show
        }]
    }, {
        path: '/user/:loginname',
        name: 'user',
        component: user
    }]
})