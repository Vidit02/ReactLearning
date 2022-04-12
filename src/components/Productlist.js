import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Productlist = () => {
    const [products, setproducts] = useState([])
    const getProducts = async() =>{
        axios.get("https://healthy-me-rest-api.herokuapp.com/products").then((res)=>{
            setproducts(res.data.data)
        })
    }

    useEffect(() => {
      getProducts()
    
      return () => {
        
      }
    }, [])
    
  return (
    <div>
        <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => {
                            return (<tr>
                                <th scope="row">{product.productId}</th>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.qty}</td>
                            </tr>

                            )
                        })
                    }
                </tbody>
            </table>
    </div>
  )
}
