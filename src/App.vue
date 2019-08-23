<template>
  <div id="app">
    <transition name="fade" mode="in-out">
      <router-view v-wechat-title="$route.meta.title" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
</style>
