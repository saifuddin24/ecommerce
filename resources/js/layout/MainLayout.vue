<script setup lang="ts">
import SiteDrawer from "@/js/components/SiteDrawer.vue"
import SiteHeader from "@/js/components/SiteHeader.vue";
import SiteFoooter from "@/js/components/SiteFoooter.vue";
</script>
<template>
  <div>
    <SiteHeader></SiteHeader>
    <SiteDrawer></SiteDrawer>
    <main>
      <slot></slot>
    </main>
    <SiteFoooter></SiteFoooter>
  </div>
</template>
<style scoped>

</style>
