import React, {ComponentType} from 'react';
import {Preloader} from "components/common/Preloader";

export function WithSuspenseComponent<T extends JSX.IntrinsicAttributes>(WrappedComponent: ComponentType<T>) {
		return (props: T) => {
				return <React.Suspense fallback={<Preloader/>}>
						<WrappedComponent {...props}/>
				</React.Suspense>
		}
}