const businessUnits = {
	adc: {
		uid: 'B48D8E40-899E-4DCF-A704-B05EC5881E14',
		code: 63
	},
	aeh: {
		uid: '19545534-6B61-40F3-8169-B1EF6075AB6B',
		code: 59
	},
	alw: {
		uid: '1FA00430-BD8D-469B-B222-D7ECB8976336',
		code: 60
	},
	akw: {
		uid: '9C8ABD8B-935A-40D3-8A7E-BD520FE01D10',
		code: 60
	},
	apc: {
		uid: '3CEAC6AE-5A04-44F9-91D6-31133E148CAC',
		code: 66
	},
	hjh: {
		uid: '7D93A7F1-EE72-4A39-A2F2-EFECC97E974C',
		code: 62
	},
	mt: {
		uid: '226C567B-1807-40CF-A29B-35F0E624DFFD',
		code: 59
	}
}

export default defineNuxtConfig({
	modules: [
		'@pinia/nuxt',
		'@nuxtjs/i18n',
		'@nuxtjs/device',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/eslint-module',
		'@nuxtjs/stylelint-module'
	],

	i18n: {
		legacy: false,
		defaultLocale: 'en',
		fallbackLocale: 'en',
		langDir: 'lang/',
		locales: [
			{
				name: 'English',
				code: 'en',
				iso: 'en-US',
				file: 'en.js'
			},
			{
				name: 'العربية',
				code: 'ar',
				iso: 'ar-EG',
				file: 'ar.js'
			}
		]
	},

	css: ['~/assets/css/main.css'],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	},

	runtimeConfig: {
		public: {
			buId: businessUnits[process.env.BU_NAME.toLowerCase()].uid,
			buCode: businessUnits[process.env.BU_NAME.toLowerCase()].code,
			buName: process.env.BU_NAME,
			bookingUrl: process.env.BOOKING_URL,
			apiUrl: process.env.API_URL
		}
	}
});
