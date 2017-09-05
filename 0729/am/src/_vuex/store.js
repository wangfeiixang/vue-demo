
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
Vue.use(Vuex)

const state={
	position:{
		latitude:null,
		longitude:null,
		address:''
	}
}

const mutations={
	getPosition(state,position){
		state.position=position
	}
}

const store = new Vuex.Store({
	state,
	actions,
	mutations
})


export default store