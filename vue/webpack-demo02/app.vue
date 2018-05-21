<template>
	<div>
		<v-title title="Vue组件化"></v-title>
		<v-button @click="handleClick">点击按钮</v-button>
		<p>
			<img src="./images/image.png">
		</p>
	</div>
</template>

<script type="text/javascript">
	//导入组件
	import vTitle from './title.vue'
	import vButton from './button.vue'

	export default {
		components: {
			vTitle: vTitle, 
			vButton: vButton
		},
		methods: {
			handleClick(e) {
				console.log(e);
			}
		}
	}
</script>

<style type="text/css" scoped>
	
</style>