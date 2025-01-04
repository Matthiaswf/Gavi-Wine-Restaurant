import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MenuView from '@/views/MenuView.vue';
import ReserveView from '@/views/ReserveView.vue';
import WineView from '@/views/WineView.vue';
import StoryView from '@/views/StoryView.vue';
import EventsView from '@/views/EventsView.vue';
import ContactView from '@/views/ContactView.vue';
import PhotosView from '@/views/PhotosView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuView,
  },
  {
    path: '/reserve',
    name: 'reserve',
    component: ReserveView,
  },
  {
    path: '/wine',
    name: 'wine',
    component: WineView,
  },
  {
    path: '/story',
    name: 'story',
    component: StoryView,
  },
  {
    path: '/events',
    name: 'events',
    component: EventsView,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },
  {
    path: '/photos',
    name: 'photos',
    component: PhotosView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
