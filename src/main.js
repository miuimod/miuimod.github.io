import Vue from 'vue'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'github-markdown-css'
import 'highlight.js'

import '../public/css/style.css'
import '../public/css/miuimod.css'
import '../public/css/miuihomer.css'

Vue.use(ElementUI);

import App from './App.vue'
import Sider from './Sider.vue'
import Donate from "@/md/donate.vue"
import QQchannel from "@/md/QQchannel"

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
new Vue({
    router,
    render: h => h(Sider)
}).$mount('#sider')
new Vue({
    router,
    render: h => h(Donate)
}).$mount('#donate')
new Vue({
    router,
    render: h => h(QQchannel)
}).$mount('#qqchannel')