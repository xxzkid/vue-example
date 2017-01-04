// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App';
import Index from './components/Index';
import Login from './components/Login';
import List from './components/List';


//开启debug模式
Vue.config.debug = true;

Vue.use(VueResource);
Vue.use(VueRouter);

var routes = [
	// {
	// 	path:'/',
	// 	redirect: '/login'
	// },
	{
		path: '/',
		component: Index
	},
    {
    	path: '/login',
    	component: Login
    },
    {
    	path: '/list',
    	component: List
    }
];

var router = new VueRouter({
    routes: routes
});

new Vue({
	router: router,
	render: h => h(App)
}).$mount('#app');