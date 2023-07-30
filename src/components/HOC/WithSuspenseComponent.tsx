<<<<<<< HEAD
import React, {ComponentType} from 'react';
import {Preloader} from "components/common/Preloader";

export function WithSuspenseComponent<T extends JSX.IntrinsicAttributes>(WrappedComponent: ComponentType<T>) {
		return (props: T) => {
				return <React.Suspense fallback={<Preloader/>}>
						<WrappedComponent {...props}/>
				</React.Suspense>
		}
=======
import React, {FC} from 'react';
import {Preloader} from "components/common/Preloader";

type Props = {
		children: React.ReactNode
}
export const WithSuspenseComponent: FC<Props> = (props) => {
		return <React.Suspense fallback={<Preloader/>}>
				{props.children}
		</React.Suspense>
>>>>>>> origin/main
}
