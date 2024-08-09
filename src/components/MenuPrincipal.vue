<template>
    <div id="app">
      <nav>
      <router-link to="/"> Página Principal</router-link> |
      <router-link to="/videos">Vídeos Diversos</router-link> |
      <router-link to="/imagens">Imagens Diversas</router-link> |
      <router-link to="/tabela"> Tabela Diversos</router-link>  
    </nav>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MenuPrincipal'
  };
  </script>
  
  <style>
  /* estilos do seu app */
  </style>
 
 
