<template>
  <div class="outmai root-box">
  	<outmai-header :position="position" :showPosition="showPosition"></outmai-header>
  	
  	<transition enter-active-class="animated slideInRight"  leave-active-class="animated fadeOut">
  		<outmai-position v-if="isShow"></outmai-position>
  	</transition>
  	
   <nav-tab></nav-tab>
  </div>
</template>

<script>
	import {mapState,mapActions} from 'vuex'
import NavTab from './NavTab'
import OutmaiHeader from './OutmaiComponents/OutmaiHeader'
import OutmaiPosition from './OutmaiComponents/OutmaiPosition'
export default {
  name: 'outmai',
  data () {
    return {
    	isShow:false
    }
  },
  computed:{
  	...mapState(['position'])
  },
  methods:{
  	...mapActions(['getPosition']),
  	showPosition(){
  		this.isShow=!this.isShow
  	}
  },
  mounted(){
  	if(!this.position.latitude){
  		this.getPosition()
  	}
  	
  },
  components:{
  	OutmaiHeader,
  	OutmaiPosition
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
