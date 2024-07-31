const ADD_TO_CART = ()=>{
    return{
        type: 'ADD_TO_CART',
        payload: 'Some Values' 
    }
}

const REMOVE_FROM_CART = ()=>{
    return{
        type: 'REMOVE_FROM_CART',
        payload: 'Some Values Removed' 
    }
}


export {ADD_TO_CART, REMOVE_FROM_CART}
