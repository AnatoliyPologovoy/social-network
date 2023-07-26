import cl from "components/common/Paginator/paginator.module.css";
import React, {FC, MouseEvent, useState} from "react";

type Props = {
		maxPage: number
		totalCountUsers: number
		usersPerPage: number
		currentPage: number
		handlerClickPage: (page: number) => void
}

export const Paginator: FC<Props> = (props) => {
		const [portion, setPortion] = useState(0)
		const firstPage = portion * props.maxPage + 1
		const lastPage = (portion + 1) * props.maxPage

		let pages = []
		for (let i = firstPage; i <= lastPage; i++) {
				pages.push(i)
		}

		const totalPages = Math.ceil(props.totalCountUsers / props.usersPerPage)
		pages.push(totalPages)

		const handlerClickPageCallBack =
				(isCurrentPage: boolean, page: number) => (e: MouseEvent<HTMLLIElement>) => {
						!isCurrentPage && props.handlerClickPage(page)
		}

const buttonRight = <button onClick={() => setPortion(portion+1)}> {'>>'} </button>

		const mappedPages = pages.map((p, i) => {
				const dots = i === pages.length - 1 ? '...' : ''
				const isCurrentPage = p === props.currentPage
				const className = cl.numberPage + ' ' + (isCurrentPage ? cl.currentPage : '')
				return (
						<li
								key={p}
								className={className}
								onClick={handlerClickPageCallBack(isCurrentPage, p)}
						>
            {dots}{p}
            </li>
				)
		})
		return (
				<ul className={cl.pages}>
						{mappedPages}
						{buttonRight}
				</ul>
		)
}