import { createRouter, createWebHistory } from "vue-router";
import DisplayVillas from "../views/DisplayVillas.vue";
import VillaDetail from "../views/VillaDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/villas",
      name: "villas",
      component: DisplayVillas,
    },
    {
      path: "/villas/:id",
      name: "villa",
      component: VillaDetail,
    },
  ],
});

export default router;
