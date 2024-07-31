const LOGIN = ()=>{
    return{
        type: 'LOGIN',
        payload: 'Some Values LOGIN' 
    }
}

const LOGOUT = ()=>{
    return{
        type: 'LOGOUT',
        payload: 'Some Values LOGOUT' 
    }
}


export {LOGIN, LOGOUT}
