import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import CcUI from './../packages';
import Button from './pages/button';
import Color from './pages/color';

import '../src/styles/index.less';
import config from './config';
// import '../dist/styles/cc4j.css';
Vue.use(CcUI);
Vue.use(VueRouter);
Vue.prototype.config = config;
// 开启debug模式
Vue.config.debug = true;

// 路由配置
var router = new VueRouter({
    // history: true,
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/button',
            name: 'button',
            component: Button,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/color',
            // component: Color
            name: 'color',
            component: Color
        }
        
    ]
});

Vue.config.productionTip = false;
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
