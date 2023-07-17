const paddingWrapper = 30
const itemUserWidth = 130
const itemUserHeight = 200

export const getNeedUsesPerPage =
		(elemWidth: number, elemHeight: number) => {
				const usersPerWidth =
						Math.floor((elemWidth - paddingWrapper) / itemUserWidth)
				const usersPerHeight =
						Math.floor((elemHeight - paddingWrapper) / itemUserHeight)
				return usersPerWidth * usersPerHeight
		}