import { ethers } from 'ethers'
import { isAddress } from 'ethers/lib/utils'
import { useDappStore } from '@/stores/useDappStore'

export function isSameAddress(address1: string, address2: string): boolean {
	// check for empty address to avoid getAddress() from throwing
	return (
		!!address1 &&
		!!address2 &&
		ethers.utils.getAddress(address1) === ethers.utils.getAddress(address2)
	)
}

// Looks up possible ENS for given 0x address
export async function ensLookup(address: string): Promise<string | null> {
	const dappStore = useDappStore()
	const name: string | null = await dappStore.provider.lookupAddress(address)
	return name
}

// Returns null if the name passed is a 0x address
// If name is valid ENS returns 0x address, else returns null
export async function resolveEns(name: string): Promise<string | null> {
	if (isAddress(name)) return null
	const dappStore = useDappStore()
	return await dappStore.provider.resolveName(name)
}

// Returns true if address is valid ENS or 0x address
export async function isValidEthAddress(address: string): Promise<boolean> {
	const dappStore = useDappStore()
	const resolved = await dappStore.provider.resolveName(address)
	return !!resolved
}

export function noEmptyAddress(addressObj: { [key: string]: string }): boolean {
	for (const [key, address] of Object.entries(addressObj)) {
		if (address === '' || /^0x0+$/.test(address)) {
			throw new Error(`Empty address: no ${key}`)
		}
	}
	return true
}

export function renderAddressOrHash(address: string, digitsToShow?: number): string {
	if (digitsToShow) {
		const beginDigits: number = Math.ceil(digitsToShow / 2)
		const endDigits: number = Math.floor(digitsToShow / 2)
		const begin: string = address.substr(0, 2 + beginDigits)
		const end: string = address.substr(address.length - endDigits, endDigits)
		return `${begin}…${end}`
	}
	return address
}
