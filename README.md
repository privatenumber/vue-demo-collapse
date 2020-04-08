# vue-demo-collapse

> Vue component that shows a demo and a "Show Code" button to expand source code

<img src="/.github/screenshot.png">


```vue
<script>
	<demo-collapse>
		<demo />

		<src-file
			name="Demo.vue"
			language="html"
		>
			<template v-pre>
				<!-- source code -->
			</template>
		</src-file>
	</demo-collapse>
</script>

<template>
import { DemoCollapse, SrcFile } from 'vue-demo-collapse';
import Demo from './Demo.vue';

export default {
	components: {
		DemoCollapse,
		SrcFile,
		Demo,
	}
};
</template>

```
