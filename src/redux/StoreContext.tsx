import React, {FC, ReactNode} from "react";
import {StoreType} from "./State";

export const StoreContext = React.createContext({} as StoreType)

type ProviderPropsType = {
    store: StoreType
    children: ReactNode
}

export const Provider: FC <ProviderPropsType> = (props) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>

    )
}