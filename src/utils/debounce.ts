export const debounce = function (cb: (...arg: any) => void, timeout: number) {
		let idTimeout: any
		return function (...arg: any) {
				const callCB = () => {
						cb.apply(null, arg)
				}
				clearTimeout(idTimeout)
				idTimeout = setTimeout(callCB, timeout)
		}
}
