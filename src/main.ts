import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import ArticleList from './components/article/ArticleList.vue';
import ArticleDetail from './components/article/ArticleDetail.vue';
import TournamentList from './components/tournament/TournamentList.vue';
import TournamentDetail from './components/tournament/TournamentDetail.vue';
import MissionPack from './components/missionpack/MissionPack.vue';
import Banner from './components/content/Banner.vue';
import About from './components/about/About.vue';
import store from './store';

import "@/scss/main.scss";

const Home = { template: '<div>Home 123</div>' }

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Banner },
    { path: '/article', component: ArticleList },
    { path: '/article/:articleID', component: ArticleDetail },
    { path: '/tournament', component: TournamentList },
    { path: '/tournament/:tournamentID', component: TournamentDetail },
    { path: '/mission-pack', component: MissionPack },
    { path: '/about', component: About },
  ],
})

const app = createApp(App)

app.use(router);
app.use(store);
app.mount('#app');
