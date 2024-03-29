import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'rounds',
		meta: {
			description: 'Retrieve contract data for a specific funding round.',
		},
		component: () => import('@/views/Rounds.vue'),
	},
	{
		path: '/factories',
		name: 'factories',
		meta: {
			description: 'Display factories',
		},
		component: () => import('@/views/Factories.vue'),
	},
	{
		path: '/round/:address',
		name: 'round',
		meta: {
			description: 'Retrieve contract data for a specific funding round.',
		},
		component: () => import('@/views/Round.vue'),
	},
	{
		path: '/factory/:address',
		name: 'factory',
		meta: {
			description: 'Retrieve FundingRoundFactory contract data.',
		},
		component: () => import('@/views/Factory.vue'),
	},
	{
		path: '/deploy',
		name: 'deploy',
		meta: {
			description: 'One-click contracts deployment.',
		},
		component: () => import('@/views/Deploy.vue'),
	},
	{
		path: '/user-registry',
		name: 'user-registry',
		meta: {
			description: 'Retrieve SimpleUserRegistry contract data.',
		},
		component: () => import('@/views/UserRegistry.vue'),
	},
	{
		path: '/recipient-registry',
		name: 'recipient-registry',
		meta: {
			description: 'Retrieve Simple Recipient Registry contract data.',
		},
		component: () => import('@/views/RecipientRegistry.vue'),
	},
	{
		path: '/contribute',
		name: 'contribute',
		meta: {
			description: 'Contribute to a funding round.',
		},
		component: () => import('@/views/Contribute.vue'),
	},
	{
		path: '/claim',
		name: 'claim',
		meta: {
			description: 'Claim the acquired funds for a funding round.',
		},
		component: () => import('@/views/Claim.vue'),
	},
	{
		path: '/maci',
		name: 'MACI',
		meta: {
			description: 'Some operations with MACI.',
		},
		component: () => import('@/views/MACI.vue'),
	},
	{
		path: '/viem-ethers',
		name: 'viem-ethers',
		meta: {
			description: 'Compare the speed of obtaining contract data between ethers and viem.',
		},
		component: () => import('@/views/ViemEthers.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		// overflow hidden problem: https://medium.com/@andrewmasonmedia/how-to-fix-scroll-to-top-scrollbehaviour-not-working-in-vue-router-b443c0fecf91
		// hack https://stackoverflow.com/a/57212324/10752354
		// @ts-ignore
		document.getElementById('app').scrollIntoView()
	},
})

export default router
