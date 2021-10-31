<template>
  <div>
    <h1>article page</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ArticlePage',
  async asyncData (context) {
    console.log(context.params)
    const { data } = await axios({
      methdo: 'GET',
      url: 'http://localhost:3000/data.json'

    })
  }
}
</script>

<style>

</style>