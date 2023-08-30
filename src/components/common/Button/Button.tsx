import React, {FC} from 'react'

// type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
// 		HTMLButtonElement>
//
// type SuperButtonPropsType = DefaultButtonPropsType & {
// 		xType?: string
// }

type Props = React.ComponentPropsWithoutRef<'button'> & {
    handlerClickButton?: () => void
    title: string
}

export const Button: FC<Props> = ({handlerClickButton, title, ...resProps}) => {
    return (
        <button onClick={handlerClickButton} {...resProps}>
            {title}
        </button>
    )
}
