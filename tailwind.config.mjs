/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'red': '#FF6766',
            'yellow': '#FFC000',
            'blue': '#1AB8FF',
            'green': '#2CB276',
				'black': '#000000',
				'white': '#FFFFFF'
			},
         fontFamily: {
            'poppins': ['Poppins', 'sans-serif'],
         }
		},
	},
	plugins: [],
}