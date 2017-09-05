
const actions = {
	
	addNumber({commit},add_num){
		console.log('actions')
		
		setTimeout(()=>{
			commit('addNumber',add_num)
		},1000)
		
		
	},
	reduceNumber({commit}){
		commit('reduceNumber')
	}
	
}

export default actions
