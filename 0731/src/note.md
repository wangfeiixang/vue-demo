

# 如何封装自定义组件或者组件库

### 知识点：传参
       
> 因为用户在使用的时候，只能对组件进行参数的设置，在组件内部需要通过props接受这些参数，然后再去进行相应的设置

### 知识点：slot
       
> 用户在使用的时候，有的内容等部分是需要在使用的过程中进行编写的，就不能在组件内部写死，多用slot来进行内容的保存与位置显示

### 如何使组件能use

> 在暴露组件的时候，不要直接暴露组件对象，而是暴露一个有install方法的对象，在这个方法里能接受到Vue实例构造器，方法内部对某一个组件进行全局注册，这样的话，用户在使用的时候就可以通过Vue.use来注册组件，其实是在调用install方法

`
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

`

`
//完整引入
import {MyUI} from '../my-ui'
	
Vue.use(MyUI)
`
`
//按需引入
import {MyButton,MyLoading} from '../my-ui'
Vue.use(MyButton)
Vue.use(MyLoading)
`
