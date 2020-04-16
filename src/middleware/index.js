import {
    LOGIN
} from '../action'

export function Middleware() {
    return function (next) {
        return async function (action) {
            if (action.type == LOGIN) {
                console.log('middleware login')
                dispatch({ type: LOGIN, state: { screen: 'MainMenu' } })
                //action.state = {screen: 'MainMenu'}
            }
        }
    }
}