<template>
  <div id="app" class="container">
    <nav-bar class="bar"/>
<!--     <router-view></router-view> -->
      <main-page class="main-page"/>
<!--       <selected-char/> -->
  </div>
</template>

<script>
import MainPage from '@/pages/MainPage.vue'
import NavBar from '@/components/NavBar.vue'
/* import SelectedChar from '@/pages/MainPage.vue' */


export default {
  components: {
    NavBar,
    MainPage,
    /* SelectedChar */
}
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  background-color: rgba(0, 119, 255, 0.2);
}

.main-page {
  margin: 10px 80px 10px 80px;
}
</style>
