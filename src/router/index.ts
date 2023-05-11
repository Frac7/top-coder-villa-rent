import { createRouter, createWebHistory } from "vue-router";
import DisplayVillas from "../views/DisplayVillas.vue";
import VillaDetail from "../views/VillaDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:id",
      name: "villa",
      component: VillaDetail,
    },
    {
      path: "/",
      name: "villas",
      component: DisplayVillas,
    },
  ],
});

export default router;
