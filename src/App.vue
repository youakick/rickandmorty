<template>
  <div id="app" class="container">
    <nav-bar class="bar"/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
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
  min-height:auto;
}

.main-page {
  margin: 10px 80px 10px 80px;
}
</style>
