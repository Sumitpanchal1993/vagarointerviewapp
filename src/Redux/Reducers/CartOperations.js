
const initialState = [
   {data:'Default Data'}
]

export default function CartOperations(state = initialState, action){
    switch(action.type){
        case "ADD_TO_CART":
        
            return [...state, {data:'One Thing added'}] 

        case "REMOVE_FROM_CART":
            let delArr = state.filter((item)=>{return!item})
            return delArr

        default:
            return state 
    }
}


