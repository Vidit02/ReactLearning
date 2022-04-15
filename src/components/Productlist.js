import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Productlist = () => {
    const [products, setproducts] = useState([])
    const getProducts = async () => {
        await axios.get("https://healthy-me-rest-api.herokuapp.com/products").then((res) => {
            setproducts(res.data.data)
        })
    }

    const deleteProduct = async (pId) => {
        await axios.delete("https://healthy-me-rest-api.herokuapp.com/products/" + pId).then((res) => {
                toast.success('🦄 Wow so easy!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                
                getProducts()
        
            
        })
    }

    useEffect(() => {
        getProducts()

        return () => {

        }
    }, [])



    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
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
                                <td><button className="btn btn-outline-danger" onClick={() => { deleteProduct(product.productId) }}>Delete Product</button></td>
                                <td><Link to={`/UpdateProduct/${product.productId}`} className="btn btn-outline-primary">Update Product</Link></td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
