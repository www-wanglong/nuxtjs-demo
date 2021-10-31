<template>
  <div>
    <h1>About</h1>
    <a href="/">首页</a>
    <router-link to="/">router-router-首页</router-link>
    <button @click="onClick">首页</button>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  methods: {
    onClick () {
      console.log('跳转')
      this.$router.push('./')
    }
  }
}
</script>

<style>

</style>