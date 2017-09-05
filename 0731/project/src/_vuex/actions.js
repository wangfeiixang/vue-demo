
const actions = {
	
	addNumber({commit},add_num){
		console.log('actions')

		//  return new Promise((resolve, reject) => {
		// 	setTimeout(() => {
		// 		commit('addNumber',add_num)
		// 		console.log( resolve )
		// 		resolve()
		// 	}, 1000)
		// })

		commit('addNumber',add_num)
		
		
		// setTimeout(()=>{
		// 	commit('addNumber',add_num)
		// },1000)
		
		
	},
	reduceNumber({commit}){
		console.log('reduceNumber','执行')
		commit('reduceNumber')
	}
	
}

export default actions
