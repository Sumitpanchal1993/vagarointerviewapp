
const initialState = [
    {id :100,
        username: 'Sumit',
        password: '123456'
    }
]

export default function UserLoginOperations(state = initialState, action){
    switch(action.type){
        case "LOGIN":
            console.log('Login Hua', state)
            sessionStorage.setItem('key', 132456)
            return [...state, {data:'onemore'}] 

        case "LOGOUT":
            console.log('Logout Hua', state)
            sessionStorage.clear('key')
            return [...state, {data:'Ek Kam Hua'}] 

        default:
            return state 
    }
}
