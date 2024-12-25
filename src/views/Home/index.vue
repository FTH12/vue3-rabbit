<script setup>
import HomeBanner from './components/HomeBanner.vue'
import HomeCategory from './components/HomeCategory.vue'
import HomeHot from './components/HomeHot.vue'
import HomeNew from './components/HomeNew.vue'
import HomeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory/>
    <HomeBanner/>
  </div>
  <HomeNew/>
  <HomeHot/>
  <HomeProduct/>
  <HomePanel title="新鲜好物" sub-title="新鲜毫无 好多商品">
    <div>我是新鲜毫无</div>
  </HomePanel>
</template>
<style lang="scss" scoped>

</style>
