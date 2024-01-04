import './assets/main.css'
import 'vant/lib/index.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Sticky, NavBar,Tabbar, TabbarItem, Tab, Tabs, PullRefresh, List, Card } from 'vant';
import BasicLayout from "./layouts/BasicLayout.vue";

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component("default-layout", BasicLayout)

app.use(createPinia())
app.use(router)
app.use(Sticky)
app.use(NavBar)
app.use(Tabbar);
app.use(TabbarItem);
app.use(Tab);
app.use(Tabs);
app.use(PullRefresh)
app.use(List)
app.use(Card)
app.mount('#app')
