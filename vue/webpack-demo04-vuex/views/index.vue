<template>
	<div>
		<h1>首页</h1>
		{{ count }}
		<br />
		<router-link to="/about">跳转到about</router-link>
		<br />
		<button @click="handleIncrement">+5</button>
		<button @click="handleDecrease">-1</button>
	</div>
</template>

<script type="text/javascript">
	export default {
		computed: {
			count() {
				return this.$store.state.count 
			}
		},
		methods: {
			handleIncrement() {
				this.$store.commit('increment', 5);
			},
			handleDecrease() {
				this.$store.commit('decrease');
			}
		}
	}
</script>