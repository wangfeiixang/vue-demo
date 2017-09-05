<template>
  <div class="finder root-box">
  	<mt-button @click="alert" type="danger">danger</mt-button>
    <nav-tab></nav-tab>
  </div>
</template>

<script>
	import { Toast } from 'mint-ui';
import NavTab from './NavTab'
export default {
  name: 'finder',
  data () {
    return {
     
    }
  },
  methods:{
  	alert(){
  		Toast({
			  message: '哈哈哈',
//			  position: 'bottom',
			  duration: 1000
			})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
