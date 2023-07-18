<script>

import CharList from '@/components/CharList.vue'
import SideBar from '@/components/SideBar.vue'

export default {
  components: {
    CharList,
    SideBar
  }
}
</script>

<template>
    <div class="main-content">
      <char-list class="char-list"/>
      <side-bar/>
    </div>
</template>

<style scoped>
.main-content {
  display: inline-flex;
}

.char-list{
  margin-right: 50px;
}
</style>