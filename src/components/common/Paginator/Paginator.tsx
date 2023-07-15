import cl from "components/common/Paginator/paginator.module.css";
import React, {FC, MouseEvent} from "react";

type Props = {
		maxPage: number
		totalCountUsers: number
		usersPerPage: number
		currentPage: number
		handlerClickPage: (page: number) => void
}

export const Paginator: FC<Props> = (props) => {

		let pages = []
		for (let i = 1; i <= props.maxPage; i++) {
				pages.push(i)
		}

		const totalPages = Math.ceil(props.totalCountUsers / props.usersPerPage)
		pages.push(totalPages)

		const handlerClickPageCallBack =
				(isCurrentPage: boolean, page: number) => (e: MouseEvent<HTMLLIElement>) => {
						!isCurrentPage && props.handlerClickPage(page)
		}

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
						{mappedPages}
				</ul>
		)
}