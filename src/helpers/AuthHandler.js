import Cookies from 'js-cookie'

export const isLogged = ()=>{
    const token = Cookies.get('cookie');
    return (token) ? true : false
}

export const doLogin = (token, rememberPassword) =>{
   if(rememberPassword){
    Cookies.set('token', token, {expires:999})
   }else{
    Cookies.set('token', token)
   }
}