import { createRouter, createWebHistory } from "vue-router";
import MainChatComponent from "../components/MainChatComponent.vue";
import SignInComponent from "../components/auth/SignInComponent.vue";
import SignUpComponent from "../components/auth/SignUpComponent.vue";

const history = createWebHistory();
const routes = [
  {
    path: "/",
    component: MainChatComponent,
  },
  {
    path: "/signin",
    component: SignInComponent,
  },
  {
    path: "/signup",
    component: SignUpComponent,
  },
];
const router = createRouter({
  history,
  routes,
});

export default router;
