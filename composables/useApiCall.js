// This call blocks the page until the api call is resolved
// arguably this should only be used for SEO calls
// usage: const data = await useLazyFetchCall('settings/Site/general')
export const useFetchCall = async (endpoint) => {
	console.log(11);
	const runtimeConfig = useRuntimeConfig();
	const { locale } = useI18n()
	const { data } = await useFetch(`${runtimeConfig.public.apiUrl}/api/${endpoint}`, {
		headers: {
			'BU-ID': runtimeConfig.public.buId,
			'lang': locale
		}
	});

	return data;
}

// this call doesn't block the page load, it should be used with a loading animation
// this should help increase performance ratings and user experience overall
// usage: const { pending, data } = await useLazyFetchCall('settings/Site/general')
// where pending can be used a loading indicator
export const useLazyFetchCall = async (endpoint) => {
	console.log(22);
	const runtimeConfig = useRuntimeConfig();
	const { locale } = useI18n()
	const { pending, data } = await useFetch(`${runtimeConfig.public.apiUrl}/api/${endpoint}`, {
		headers: {
			'BU-ID': runtimeConfig.public.buId,
			'lang': locale
		},
		server: false,
		lazy: true
	});

	return { pending, data };
}