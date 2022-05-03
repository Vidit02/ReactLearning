import React from 'react'

export const CartComponent = (props) => {
    console.log("Cart Component", props.cartData.cartData);
    var cart = props.cartData.cartData;
    return (
        <div>
            <h1>Number of Products in Cart : {props.cartData.cartData.length}</h1>
            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">Name Of Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((product)=>{
                            return(
                                <tr>
                                    <td>{product.productName}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <button className='btn btn-outline-danger' onClick={()=>props.removeFromCartHandler(product)}>Remove From Cart</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
