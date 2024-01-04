<script setup lang="ts">
  import {computed} from "vue";
  import {useRoute} from "vue-router";
  let route = useRoute();
  //layout的值由(route.meta.layout || default_layout) + '-layout'决定
  let default_layout = "default"
  let activeLayout = computed(() => {
      return (route.meta.layout || default_layout) + '-layout'
  })
</script>

<template>
  <div id="app">
    <component :is="activeLayout">
      <router-view />
    </component>
  </div>
</template>

<style scoped>

</style>
