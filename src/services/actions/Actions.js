export const addToCart = (product) => {
    console.log("action",product)
    return{
        type : "ADD_TO_CART",
        product : product
    }
}

export const removeFromCart = (product) => {
    return{
        type : "REMOVE_FROM_CART",
        product : product
    }
}