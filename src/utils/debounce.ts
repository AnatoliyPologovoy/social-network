export const debounce = function (cb: (...arg: any) => void, timeout: number) {
		let idTimeout: any
		return () => {
				const callCB = () => {
						cb()
				}
				clearTimeout(idTimeout)
				idTimeout = setTimeout(callCB, timeout)
		}
}
