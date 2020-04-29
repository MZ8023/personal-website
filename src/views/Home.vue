<template>
  <div class="home">
    <div>
      <header-bar></header-bar>
      <top-nav></top-nav>
      <base-info></base-info>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue'
import TopNav from '@/components/TopNav.vue'
import BaseInfo from '@/components/BaseInfo.vue'

export default {
  name: 'Home',
  components: {
    HeaderBar,
    TopNav,
    BaseInfo
  }
}
</script>
