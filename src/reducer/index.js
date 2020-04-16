import {
    LOGIN
} from '../action'


function rootReducer(state = {}, action) {
    console.log('Reducer', action);
    switch (action.type) {
        case LOGIN:
            console.log('reducer login')
            state = Object.assign({}, state)
            console.log('state', state)
            return state

    }
}

export default rootReducer;