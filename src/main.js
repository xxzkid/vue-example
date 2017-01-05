// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App';
import Movies from './components/Movies';
import Login from './components/Login';
import Movie from './components/Movie';


//开启debug模式
Vue.config.debug = true;

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.http.options.headers={
	//'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
};

var routes = [
	// {
	// 	path:'/',
	// 	redirect: '/login'
	// },
	{
		path: '/',
		redirect: '/movies'
	},
	{
		path: '/movies',
		component: Movies
	},
	{
		path: '/movies/:id',
		component: Movie
	},
    {
    	path: '/login',
    	component: Login
    }
];

var router = new VueRouter({
    routes: routes
});

new Vue({
	router: router,
	render: h => h(App)
}).$mount('#app');