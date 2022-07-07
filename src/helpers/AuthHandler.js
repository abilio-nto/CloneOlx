import Cookies from 'js-cookie'

export const isLogged = ()=>{
    const token = Cookies.get('cookie');
    return (token) ? true : false
}