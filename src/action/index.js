export const LOGIN = 'LOGIN';

export function login() {
    console.log("Action LOGIN")
    return { type: LOGIN, state:{screen: 'MainMenu'} }
}