<template>
	<button class="my-btn"><slot></slot></button>
</template>

<script>
	
	export default {
		props:{
			
		}
	}
	
</script>

<style scoped>
	.my-btn{
		cursor: pointer;
		    -webkit-appearance: none;
	    -moz-appearance: none;
	    appearance: none;
	    border-radius: 4px;
	    border: 0;
	    box-sizing: border-box;
	    color: inherit;
	    display: block;
	    font-size: 18px;
	    height: 41px;
	    outline: 0;
	    overflow: hidden;
	    position: relative;
	    text-align: center;
	    display: inline-block;
	    padding: 0px 20px;
	}
	.my-btn[type="default"]{
		color: #656b79;
	    background-color: #f6f8fa;
	    box-shadow: 0 0 1px #b8bbbf;
	}
	.my-btn[type="primary"]{
		color: #fff;
    	background-color: #26a2ff;
	}
	    
</style>