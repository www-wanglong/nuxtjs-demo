<template>
  <div>
    <h1>Hello Nuxt.js {{ title }}</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HomePage',

  async asyncData () {
    // 没有　this
    const { data } = await axios({
      method: 'GET',
      url: 'http://localhost:3000/data.json'
    })
    return data
  }
}
</script>

<style>

</style>