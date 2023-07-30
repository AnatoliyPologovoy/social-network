const paddingWrapper = 30
const itemUserWidth = 135
const itemUserHeight = 220

export const getNeedUsesPerPage =
		(elemWidth: number, elemHeight: number) => {
				const usersPerWidth =
						Math.floor((elemWidth - paddingWrapper) / itemUserWidth)
				const usersPerHeight =
						Math.floor((elemHeight - paddingWrapper) / itemUserHeight)
				return usersPerWidth * usersPerHeight
		}