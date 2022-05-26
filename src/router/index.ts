import { createRouter, createWebHistory } from "vue-router";
import Test from '@/views/index/test.vue'
import Index from '@/views/index/index.vue'
// 路由信息
const routes = [
  {
    path: "/",
    name: "Test",
    component: Test,
  },
  {
    path: "/index",
    name: "Index",
    component: Index,
  },
];

// 导出路由
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
