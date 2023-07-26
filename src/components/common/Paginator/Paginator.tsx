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
		const totalPages = Math.ceil(props.totalCountUsers / props.usersPerPage)
		const startPortion = 0
		const lastPortion = Math.floor(totalPages / props.maxPage)
		const [portion, setPortion] = useState(startPortion)

		useEffect(() => {
				if (portion > lastPortion) {
						setPortion(lastPortion)
				}
		}, [props.usersPerPage])

		const firstPage = portion * props.maxPage + 1
		const lastPage = portion >= lastPortion ? totalPages : ((portion + 1) * props.maxPage)

		let pages = []
		for (let i = firstPage; i <= lastPage; i++) {
				pages.push(i)
		}

		pages.push(totalPages)

		const handlerClickPageCallBack =
				(isCurrentPage: boolean, page: number) => (e: MouseEvent<HTMLLIElement>) => {
						!isCurrentPage && props.handlerClickPage(page)
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
				const dots = i === pages.length - 1 ? '...' : ''
				const isCurrentPage = p === props.currentPage
				const className = cl.numberPage + ' ' + (isCurrentPage ? cl.currentPage : '')
				return (
						<li
								key={i}
								className={className}
								onClick={handlerClickPageCallBack(isCurrentPage, p)}
						>
								{dots}{p}
						</li>
				)
		})
		return (
				<ul className={cl.pages}>
						{startPortion ? null : buttonLeft}
						{mappedPages}
						{portion === lastPortion? null : buttonRight}
				</ul>
		)
}