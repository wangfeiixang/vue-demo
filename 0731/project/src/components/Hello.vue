
<template>
  <div class="hello">
    <button @click="reduce">-</button>
    <span>{{num}}</span>
    <span>{{double_num}}</span>
    <button @click="addNumber">+</button>
  </div>
</template>

<script>
	
	import {mapState,mapGetters,mapActions} from 'vuex'
	
export default {
  name: 'hello',
  data () {
    return {
    }
  },
  computed:{ 	
  	...mapState(['num']),
  	...mapGetters({
  		double_num:'doublenum'
  	})
  },
  methods:{
  	addNumber(){
//		this.$store.commit('addNumber')
      let that = this;
      this.$store.dispatch('addNumber',2)
                //  .then(()=>{
                //    that.$store.dispatch('reduceNumber')
                //  })
  	},
  	...mapActions({
  	  	reduce:'reduceNumber'
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
