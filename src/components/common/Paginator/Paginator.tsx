import cl from "components/common/Paginator/paginator.module.css";
import React, {FC, MouseEvent, useEffect, useState} from "react";

type Props = {
		maxPage: number
		totalCountUsers: number
		usersPerPage: number
		currentPage: number
		handlerClickPage: (page: number) => void
}

export const Paginator: FC<Props> = (props) => {
		const {
				maxPage, totalCountUsers,
				usersPerPage, currentPage, handlerClickPage
		} = props

		const startPortion = 0
		const totalPages = Math.ceil(totalCountUsers / usersPerPage)
		const lastPortion = Math.floor(totalPages / maxPage)
		const [portion, setPortion] = useState(startPortion)

		useEffect(() => {
				if (portion > lastPortion) {
						setPortion(lastPortion)
				}
		}, [usersPerPage])

		const firstPage = portion * maxPage + 1
		const lastPage = portion >= lastPortion ? totalPages : ((portion + 1) * maxPage)

		let pages = []
		for (let i = firstPage; i <= lastPage; i++) {
				pages.push(i)
		}

		const handlerClickPageCallBack =
				(isCurrentPage: boolean, page: number) => (e: MouseEvent<HTMLLIElement>) => {
						!isCurrentPage && handlerClickPage(page)
				}

		const handlerClickButtonLeft = () => {
				setPortion(prevState => {
						return prevState === startPortion ? 0 : portion - 1
				})
		}

		const handlerClickButtonRight = () => {
				setPortion(prevState => {
						return prevState === lastPortion ? lastPortion : portion + 1
				})
		}

		const buttonRight = <button onClick={handlerClickButtonRight}> {'>>'} </button>
		const buttonLeft = <button onClick={handlerClickButtonLeft}> {'<<'} </button>

		const mappedPages = pages.map((p, i) => {
				const isCurrentPage = p === currentPage
				const className = cl.numberPage + ' ' + (isCurrentPage ? cl.currentPage : '')
				return (
						<li
								key={i}
								className={className}
								onClick={handlerClickPageCallBack(isCurrentPage, p)}
						>
								{p}
						</li>
				)
		})

		const handlerClickBorderPageCallBack = (numberPage: number) => () => {
				currentPage !== numberPage && handlerClickPage(totalPages)
				setPortion(numberPage === 1 ? 0 : lastPortion)
		}

		const totalLastPage =
				<li
						className={cl.numberPage + ' ' + (currentPage === totalPages && cl.currentPage)}
						onClick={handlerClickBorderPageCallBack(totalPages)}
				>
						...{totalPages}
				</li>

		return (
				<ul className={cl.pages}>
						{portion > 0 && buttonLeft}
						{mappedPages}
						{portion !== lastPortion && buttonRight}
						{portion !== lastPortion && totalLastPage}
				</ul>
		)
}