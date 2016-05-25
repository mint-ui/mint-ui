import Vue from 'vue';
import App from './app';
import routes from './route';
import Mint from 'src/index';
import VueRouter from 'vue-router';

Vue.use(Mint);
Vue.use(VueRouter);

const router = new VueRouter();

router.map(routes);
router.start(Vue.extend({
  components: {
    app: App
  }
}), 'body');

router.beforeEach(transition => {
  document.title = transition.to.title || document.title;
  transition.next();
});
