

import Button from './button/Button'
import Loading from './loading/Loading'

//export {MyButton,MyLoading}

const MyLoading = {
	install:(Vue)=>{
		Vue.component('my-loading',Loading)
	}
}
const MyButton = {
	install:(Vue)=>{
		Vue.component('my-button',Button)
	}
}

const MyUI = {
	install:(Vue)=>{
		Vue.component('my-loading',Loading)
		Vue.component('my-button',Button)
	}
}

export {MyButton,MyLoading,MyUI}

