<script setup lang="ts">
import { EXPLORER_URL } from '@/constants'
import type { Address } from 'viem'
import { computed } from 'vue'

const props = defineProps<{
	address: Address
}>()

const link = computed(() => {
	return EXPLORER_URL + props.address
})
</script>

<template>
	<div class="text-blue-400 flex items-center gap-2">
		<p>{{ address }}</p>

		<div>
			<a target="_blank" :href="link">
				<img class="w-4 h-4 cursor-pointer" src="../assets/link.svg" alt="" />
			</a>
		</div>
	</div>
</template>

<style scoped></style>