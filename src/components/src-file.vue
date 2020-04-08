<template>
	<div
		:class="$s.File"
	>
		<div
			v-if="name"
			:class="$s.Name"
		>
			{{ name }}
		</div>

		<pre :class="$s.Source"><code
			:class="[$s.Code, prismClass]"
			ref="code"
		><slot /></code></pre>
	</div>
</template>

<script>
import prismjs from 'prismjs';

export default {
	name: 'SrcFile',

	props: {
		name: {
			type: String,
			default: undefined,
		},
		language: {
			type: String,
		},
	},

	computed: {
		prismClass() {
			if (this.language) {
				return 'language-' + this.language;
			}
			return '';
		},
	},

	mounted() {
		if (this.language) {
			prismjs.highlightElement(this.$refs.code);
		}
	},
};
</script>

<style module="$s">
.File {
	text-align: left;
	margin: 8px 0;
	border-radius: 4px;
	background-color: #fff;
	border: 1px solid rgba(0, 0, 0, 0.1);
	overflow: hidden;
}

.File:last-of-type {
	margin-bottom: 0;
}

.Name {
	font-family: system-ui;
	font-size: 13px;
	padding: 8px;
	color: #333;
}

.Source {
	font-family: monospace;
	margin: 0 !important;
	padding: 8px;
	background-color: #fff;
	font-size: 11px !important;
	color: #444;
	white-space: pre-wrap;
	max-width: 100%;
}

.Code {
	border-left: 3px solid #52a5e0 !important;
	padding: 1em 2em !important;
	white-space: pre-wrap !important;
}
</style>
