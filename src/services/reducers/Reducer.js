export default function cartData(state=[],action){
    switch(action.type){
        case "ADD_TO_CART" : 
            // console.log("add to cart action is called",action.product);
            // return [...state , action.product];
            var temp = -1
            for(let i in state){
                if(state[i].productName === action.product.productName){
                    temp = i
                    break;
                }
            }
            if(temp == -1){
                action.product.qty = 1
                return[...state,action.product]
            } else{
                state[temp].qty = state[temp].qty + 1
                return[...state]
            }

        case "REMOVE_FROM_CART" :
            var temp = -1
            for(let i in state){
                // console.log(state[i].productName);
                // console.log("Action Product : ",action.product.productName)
                if(state[i].productName === action.product.productName){
                    temp = i
                    break
                }
            }
            if(temp == -1){
                alert("Product not found")
            } else{
                if(state[temp].qty == 1){
                    state.splice(temp,1)
                } else {
                    state[temp].qty = state[temp].qty - 1
                }

            }
            return[...state]    
        default :
            return state;    

    }
}