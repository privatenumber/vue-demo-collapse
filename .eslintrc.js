module.exports = {
	root: true,

	env: {
		browser: true,
	},

	extends: [
		'airbnb-base',
		'plugin:vue/recommended',
	],

	rules: {
		indent: 'off',
		'indent-legacy': ['error', 'tab'],
		'no-tabs': 'off',
		'vue/html-indent': ['error', 'tab'],
	},
};
