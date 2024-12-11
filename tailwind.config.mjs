/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
        typewriter: "typewriter 2s steps(11) forwards"
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%"
          }
        },
        incline: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(20px) translateY(-10px)' },
          '100%': { transform: 'translateX(0) translateY(0)' },
        },
      },
      animation: {
        incline: 'incline 2s infinite linear',
        incline: 'incline 2s infinite linear',
      },
      dropShadow: {
        '3xl': '0 0 20px rgba(42, 193, 126 , 0.35)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
		},
		theme: "dark"
	},
	plugins: [],
}
