<template>
	<h1>
		<a :href="'#' + title">{{ title }}</a>
	</h1>
</template>

<script type="text/javascript">
	export default {
		props: {
			title: String
		}
	}
</script>

<style type="text/css" scoped>
	h1 a {
		color: #3399ff;
		font-size: 24px;
	}
</style>