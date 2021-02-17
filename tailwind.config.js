const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	purge: [
		'./src/**/*.html',
		'./src/**/*.njk',
		'./src/**/*.md',
		'./src/_data/colors.js',
		'./src/_data/structure.js',
	],
	experimental: {
		applyComplexClasses: true,
	},
	future: {
		removeDeprecatedGapUtilities: true,
	},
	theme: {
		extend: {
			opacity: (theme) => ({
				5: '.05',
				10: '.1',
				15: '.15',
				20: '.2',
			}),
			// created my own heights so can specify for Heros
			height: (theme) => ({
				'1/2': '50vh',
				'3/4': '75vh',
				'9/10': '90vh',
				'1/1': '100vh',
				'1/3': 'calc(100vh / 3)',
				'1/4': 'calc(100vh / 4)',
				'1/5': 'calc(100vh / 5)',
				96: '24rem',
				128: '32rem',
			}),
			minHeight: (theme) => ({
				'0': '0',
				'1/4': '25vh',
				'2/5': '40vh',
				'1/2': '50vh',
				'3/5': '60vh',
				'3/4': '75vh',
				'full': '100%',
				'screen': '100vh'
			}),
			colors: (theme) => ({
				'pumpkin': '#FE7F2D',
				'sunglow': '#FCCA46',
				'charcoal': '#233D4D',
				'olivine': '#A1C181',
				'pine': '#619B8A'
			}), 
			textColor: (theme) => ({
				'primary': '#A1C181',
				'secondary': '#619B8A',
				'danger': '#FE7F2D',
				'info': '#FCCA46',
				'dark': '#233D4D'
			}),
			fontFamily: (theme) => ({
				'sans': ['Lato', 'san-serif'],
				'body': ['Lato', 'san-serif'],
			}),
			variants: (theme) => ({
				display: ["group-hover"],
				textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
			}),
		},
	},
	variants: {},
	plugins: [require('@tailwindcss/custom-forms')],
}
