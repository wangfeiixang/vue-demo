<template>
  <div id="app">
    <router-view></router-view>
    
    <hr />
    {{num}}
  </div>
</template>

<script>
	import {mapState} from 'vuex'
export default {
  name: 'app',
  computed:{
  	...mapState(['num'])
  }
}
</script>

<style>
</style>
