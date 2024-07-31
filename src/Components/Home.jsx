import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../Redux/Actions/CartActions'
import { LOGIN, LOGOUT } from '../Redux/Actions/UserLoginOpn'


function Home() {

    const storeData = useSelector((state)=>{return(state.CartOperations)})
    // console.log(storeData)
    const dispatch = useDispatch()
    return (
    <div>
        <button onClick={()=>{dispatch(ADD_TO_CART())}}>ADD_TO_CART</button>
        <button onClick={()=>{dispatch(REMOVE_FROM_CART())}}>REMOVE_FROM_CART</button>
        <button onClick={()=>{dispatch(LOGIN())}}>LOGIN</button>
        <button onClick={()=>{dispatch(LOGOUT())}}>LOGOUT</button>



        <div>
            {storeData.map((item, index)=>{
                return <h1 key={index}>{item.data}</h1>
            })}
        </div>

    </div>
  )
}

export default Home