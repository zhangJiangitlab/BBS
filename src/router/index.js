import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("@/views/Home.vue");
const About = () => import("@/views/About.vue");
const EditPost = () => import("@/views/EditPost.vue");
const Error = () => import("@/views/404.vue");
const Post = () => import("@/views/Post.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "homeLink",
    component: Home
  },
  // 查询标题或内容
  {
    path: "/search/:content",
    name: "searchLink",
    component: Home
  },
  // 个人首页
  {
    path: "/about/:id",
    name: "aboutLink",
    component: About
  },
  // 编辑文章界面
  {
    path: "/editPost",
    name: "editPostLink",
    component: EditPost
  },
  // 某个文章
  {
    path: "/post/:post_id",
    name: "postLink",
    component: Post
  },
  // 404
  {
    path: "*",
    name: "errorLink",
    component: Error
  }
];

const router = new VueRouter({
  mode: "hash",
  routes
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export default router;
