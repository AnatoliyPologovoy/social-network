import {ResponseType} from 'DAL/API'
import {AppDispatch} from 'redux/redux-store'
import {setUserInFollowingProgressAC, toggleFollowAC} from 'redux/usersReducer'

export const toggleFollowingUser = async (
    userId: number,
    method: (userId: number) => Promise<ResponseType>,
    dispatch: AppDispatch,
) => {
    dispatch(setUserInFollowingProgressAC(userId, true))
    try {
        const data = await method(userId)
        if (data.resultCode === 0) {
            dispatch(toggleFollowAC(userId))
        } else {
            console.log(data.messages[0])
            //need app errors handler
        }
    } catch (e) {
        console.log(e)
        //need errors handler
    } finally {
        dispatch(setUserInFollowingProgressAC(userId, false))
    }
}
