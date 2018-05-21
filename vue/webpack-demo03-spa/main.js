//导入Vue框架
import Vue from 'vue';
import VueRouter from 'vue-router'
//导入app.vue组件
import App from './app.vue'

Vue.use(VueRouter)

const Routers = [
	{
		path: '/index',
		component: (resolve) => require(['./views/index.vue'], resolve)
	},
	{
		path: '/about',
		component: (resolve) => require(['./views/about.vue'], resolve)
	},
	{
		path: '/user/:id',
		component: (resolve) => require(['./views/user.vue'], resolve)
	},
	{
		path: '*',
		redirect: '/index'
	}
];


const RouterConfig = {
    //使用HTML5的History路由模式
    mode: 'history',
    routes: Routers
}

const router = new VueRouter(RouterConfig);

router.afterEach((to, from, next) => {
	window.scrollTo(0, 0);
})
//to   即将要进入的目标的路由对象
//from 当前导航即将要离开的路有对象
//next 调用该方法后，才能进入下一个钩子
router.beforeEach((to, from, next) => {
	window.document.title = to.meta.title;
	next();
	//判断是否登录
	// if (window.localStorage.getItem('token')) {
	// 	next();
	// }
	// else {
	// 	next('/login');
	// }
});

//创建Vue根实例
new Vue({
	el: '#app',
	router: router,
	//render: h => h(App)
	render: function(h) {
		return h(App)
	}
});