Vue.component('input-number', {
	props: {
		value: {
			type: Number,
			default: 0
		},
		max: {
			type: Number,	
			default: Infinity
		},
		min: {
			type: Number,	
			default: -Infinity
		}
	},
	template: "<div><input type='text' :value='currentValue' @change='handleChange' /><button @click='handleDown' :disabled='currentValue <= min'>-</button><button @click='handleUp' :disabled='currentValue >= max'>+</button></div>",
	data: function() {
		return {
			currentValue: this.value
		}
	},
	methods: {
		handleDown: function() {
			console.log('sub: ' + this.value + " " + this.min)
			if (this.currentValue <= this.min) {
				return;
			}
			this.currentValue--;
		},
		handleUp: function() {
			console.log('add: ' + this.value + " " + this.max)
			if (this.currentValue >= this.max) {
				return;
			}
			this.currentValue++;
		},
		updateValue: function (val) {
			if (val > this.max) val = this.max;
			if (val < this.min) val = this.min;
			this.currentValue = val;
		},
		handleChange: function (event) {

		}
	},
	watch: {
		currentValue: function (val) {
			this.$emit('input', val);
			this.$emit('on-change', val);
		},
		value: function (val) {
			this.updateValue(val);
		}
	}
})