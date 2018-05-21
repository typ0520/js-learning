<template>
  <div>
    <div>每日推荐</div>
    <div @click="showThemes = !showThemes">主题日报</div>
    <ul v-if="showThemes">
      <li v-for="item in themes">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import $ from '../libs/util'

export default {
  name: 'App',
  data () {
    return {
      'showThemes': false,
      'themes': []
    }
  },
  methods: {
    getThemes () {
      $.ajax.get('themes').then(res => {
        this.themes = res.others
        console.log('res: ' + this.themes)
      })
    }
  },
  mounted () {
    this.getThemes()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
