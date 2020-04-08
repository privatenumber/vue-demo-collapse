<template>
	<transition
		v-bind="$attrs"

		:enter-active-class="$s.transitioning"
		:leave-active-class="$s.transitioning"

		@before-enter="zeroHeight"
		@enter="setContentHeight"
		@after-enter="removeHeight"

		@before-leave="setContentHeight"
		@leave="onLeave"
		@after-leave="removeHeight"
	>
		<slot />
	</transition>
</template>

<script>
export default {
	methods: {
		zeroHeight(el) {
			el.style.height = '0px';
		},

		removeHeight(el) {
			el.style.height = 'auto';
		},

		setContentHeight(el) {
			const newHeight = this.$el ? this.$el.scrollHeight : 0;
			el.style.height = `${newHeight}px`;
		},

		onLeave(el) {
			this.setContentHeight(el);
			this.zeroHeight(el);
		},
	},
};
</script>

<style module="$s">
.transitioning {
	transition: height 0.25s ease-in-out;
	overflow: hidden;
}
</style>
