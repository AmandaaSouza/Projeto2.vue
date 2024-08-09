import { createRouter, createWebHistory } from 'vue-router';
//import VideosDiversos from '@/components/VideosDiversos.vue'; // ajuste o caminho conforme a estrutura do seu projeto
import VideoUnico from './components/VideoUnico.vue';
import ImagensDiversas from './components/ImagensDiversas.vue';
import TabelaDiversos from './components/TabelaDiversos.vue';
import PaginaPrincipal from './components/PaginaPrincipal.vue';

const routes = [
  {
    path: '/',
    name: 'PaginaPrincipal',
    component: PaginaPrincipal
  },
  {
    path: '/videos',
    name: 'VideoUnico',
    component: VideoUnico
  },
  {
    path: '/imagens',
    name: 'ImagensDiversas',
    component: ImagensDiversas
  },
  {
    path: '/tabela',
    name: 'TabelaDiversos',
    component: TabelaDiversos
  }
  // Adicione outras rotas aqui
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
