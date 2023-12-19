import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import JobsList from "@/views/JobsList.vue";
import VideoPlayer from "@/views/VideoPlayer.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/jobs-list",
    name: "JobsList",
    component: JobsList,
  },
  {
    path: "/video-player",
    name: "VideoPlayer",
    component: VideoPlayer,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
  },
});

export default router;
