import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UpdateProduct = () => {
    const [products, setproducts] = useState('')
    const [name, setname] = useState('')
    const [price, setPrice] = useState(0)
    const [qty, setQty] = useState(0)
    const dId = useParams().id

    const update = async () => {
        console.log("name  : " + name)
        console.log("price : " + price)
        console.log("This is id " + dId)
        var product = {
            name: name,
            price: price,
            productId : dId,
            qty: qty
        }
        axios.put("https://healthy-me-rest-api.herokuapp.com/products/" + dId, product).then((res) => {
            console.log("Console ==>> " + res);
            toast.success(`${res.data.data.name} is updated`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
    }

    const displayData = async () => {
        console.log("name is this " + name)
        console.log("price is this " + price)   
    }

    const getDataById = async () => {
        axios.get("https://healthy-me-rest-api.herokuapp.com/products/" + dId).then((res) => {
            console.log(res.data.data);
            console.log(res.data.data.name)
            setproducts(res.data.data)
            setname(res.data.data.name)
            setPrice(res.data.data.price)
            setQty(res.data.data.qty)
        })

    }

    useEffect(() => {
        getDataById()

        return () => {

        }
    }, [])

    return (
        <div>
            <button className="btn btn-outline-primary" onClick={displayData}>Display Button</button>
            <form onSubmit={update}>
                <div>
                    <label>Name</label>
                    <input type="text" onChange={(e) => setname(e.target.value)} />
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label>Quantity</label>
                    <input type="text" onChange={(e) => setQty(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>

            </form>
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
        </div>
    )
}
