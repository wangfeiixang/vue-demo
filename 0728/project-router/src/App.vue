<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='scss'>
	/*写一些通用样式*/
	
	@import './styles/_base.scss';
	@import './styles/_reset.scss';
	@import './styles/_common.scss';
	
</style>
