import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


type MapStateToProps = {
    isAuth: boolean
}

const mpstp = (state: AppStateType): MapStateToProps => {
    return {
        isAuth: state.auth.isAuthorized
    }
}

export function WithAuthRedirect(Component: ComponentType<any>) {

    const RedirectComponent = (props: MapStateToProps) => {
        // console.log(props)  в пропсах сидят пропсы от mpstp + withRouter + connect
        const {isAuth, ...restProps} = props

        if (!isAuth) {
            return <Redirect to={'/login'}/>
        }

        return <Component {...restProps}/>
        //вызов этой функции возвращает компоненту,
        // которая принимает входящие пропсы (все накопившиеся от других НОС)
        //и возвращает компоненту, взятую из параметров
        // и передает ей пропсы,
        // которые остались(достались) от входящих пропсов
    }

    return connect(mpstp)(RedirectComponent)
}


// export const User = (props: { name: string, age: number }) => {
//     return (
//         <div>
//             {props.name}
//             {props.age}
//         </div>
//     )
// }
//
//
// export function WithAuthRedirect2(Component: ComponentType<any>) {
//
//     return (props: any) => {
//
//         return <Component {...props}/>
//     }
//
// }
//
//
// WithAuthRedirect2(User)({name: 'Tom', age: 20})



