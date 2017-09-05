<template>
  <div class="mine  root-box">
   mine
    <nav-tab></nav-tab>
    <el-rate v-model="value1" :allow-half="true"></el-rate>
    {{value1}}
    <el-carousel trigger="click" type="card" height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
	import NavTab from './NavTab'
export default {
  name: 'mine',
  data () {
    return {
     value1:null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-carousel__item{
	background: deepskyblue;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
