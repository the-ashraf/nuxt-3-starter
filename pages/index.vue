<script setup>
import { useFetchCall, useLazyFetchCall } from '~/composables/useApiCall';

const { pending, data } = await useLazyFetchCall('settings/Site/general')

</script>

<template>
	<div class="flex flex-col items-center bg-red-300">
		<p class="text-center text-2xl">
			{{ $t('welcome') }}
		</p>

		<div v-if="pending" class="w-10 h-10 border-4 border-l-pink-600 rounded-full animate-spin" />
		<template v-else>{{ data.data.general['site.address_ar'] }}</template>
	</div>
</template>