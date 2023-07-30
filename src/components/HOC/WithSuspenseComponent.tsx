import React, {FC} from 'react';
import {Preloader} from "components/common/Preloader";

type Props = {
		children: React.ReactNode
}
export const WithSuspenseComponent: FC<Props> = (props) => {
		return <React.Suspense fallback={<Preloader/>}>
				{props.children}
		</React.Suspense>
}
