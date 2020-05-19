import { stopSubmit } from "redux-form"

const AUTHORIZATION = 'AUTHORIZATION'

let initialState = {
    email: null,
    login: null,
    password: null,
    rememberMe: null,
    isAuth: false
}

const userInfo = {
    email: 'admin@mail.com',
    login: 'Admin',
    password: 'admin',
    isAuth: true
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case AUTHORIZATION:
            return{
                ...state,
                ...action.payload
            }

        default: return state
    }
}

export const SetAuthUser = ( email, login, password, rememberMe, isAuth) =>{
    return{
        type: AUTHORIZATION,
        payload: { email, login, password, rememberMe, isAuth}
    }
}

export const login = (email, password, rememberMe=false) => {
    return (dispatch) => {
        if(userInfo.email === email && userInfo.password === password){
            dispatch(SetAuthUser( userInfo.email, userInfo.login, userInfo.password, rememberMe, userInfo.isAuth, ))
        } else {
            let message = 'Wrong login or password'
            dispatch(stopSubmit('loginform', {_error: message}))
        }
    }
}
export const logout = () =>{
    return (dispatch) => {
        dispatch(SetAuthUser( null, null, null, null, null))
    }
}

export default authReducer;