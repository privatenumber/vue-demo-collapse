<template>
	<div :class="$s.ComponentDemo">
		<div :class="$s.Demo">
			<subslot />
		</div>
		<template v-if="$subslots.files">
			<collapse-transition>
				<div
					v-show="!collapsed"
					:class="$s.Files"
				>
					<subslot name="files" />
				</div>
			</collapse-transition>
			<button
				type="button"
				:class="$s.ToggleCode"
				@click="toggleCode"
			>
				{{ buttonLabel }}
			</button>
		</template>
	</div>
</template>

<script>
import Subslot from 'vue-subslot';
import SrcFile from './src-file.vue';
import CollapseTransition from './collapse-transition.vue';

export default {
	name: 'ComponentDemo',

	components: {
		Subslot,
		CollapseTransition
	},

	mixins: [
		Subslot.define({
			files: {
				element: SrcFile,
			},
		}),
	],

	data() {
		return {
			collapsed: true,
		};
	},

	computed: {
		buttonLabel() {
			return this.collapsed ? 'View Code' : 'Hide Code';
		},
	},

	methods: {
		toggleCode() {
			this.collapsed = !this.collapsed;
		},
	},

};
</script>

<style module="$s">
.ComponentDemo {
	background-color: #f9f9fb;
	border-radius: 4px;
	padding: 8px;
}

.Demo {
	background-color: #fff;
	padding: 16px;
	border-radius: 4px;
	border: 1px solid rgba(0, 0, 0, 0.08);
}

.Files {
	margin-top: 16px;
	overflow: hidden;
}

.ToggleCode {
	font-family: system-ui;
	display: block;
	cursor: pointer;
	width: 100%;
	padding: 8px 0;
	border: none;
	background-color: transparent;
	margin-bottom: -8px;
	text-transform: uppercase;
	letter-spacing: 1px;
	color: #444;
	font-size: 10px;
	outline: none;
}
</style>
