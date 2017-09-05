<template>
  <div class="outmai root-box">
  	<outmai-header :position="position"></outmai-header>
   <nav-tab></nav-tab>
  </div>
</template>

<script>
import NavTab from './NavTab'
import OutmaiHeader from './OutmaiComponents/OutmaiHeader'
export default {
  name: 'outmai',
  data () {
    return {
     		position:{
     			latitude:40.11722,
     			longitude:116.25003,
     			address:'北京科技职业学院'
     		}
    }
  },
  components:{
  	OutmaiHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
