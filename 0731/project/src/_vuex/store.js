

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import actions from './actions'
const state = {
	num:1,
	a:1,
	b:2
}


const getters = {
	doublenum:function(state){
		return state.num*2
	}
}

const mutations = {
	addNumber(state,add_num){
		var add_num=add_num||1
		state.num+=add_num
		console.log('store执行','add',state.num)
	},
	reduceNumber(state){
		state.num--
		console.log('store执行','reduce',state.num)
	}
}


const store = new  Vuex.Store({
	state,
	mutations,
	getters,
	actions
})

export default store