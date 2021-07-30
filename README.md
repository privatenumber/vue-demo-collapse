# vue-demo-collapse

> Vue component that shows a demo and a "Show Code" button to expand source code

<img src="/.github/screenshot.png">

## Install
```sh
$ npm i vue-demo-collapse prismjs
```

## Usage
Create a `<demo-collapse>` component, pass your demo in and the source code for that demo wrapped in the `<src-file>` component.
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
import 'vue-demo-collapse/dist/style.css'; // Import styles from vue-demo-collapse
import 'prismjs/themes/prism-coy.css'; // Import styles from prism-coy

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

## License
MIT
