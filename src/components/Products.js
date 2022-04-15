import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Products = () => {
    const [name, setname] = useState('')
    const [price, setprice] = useState(0)
    const [quantity, setquantity] = useState(0)
    
    
    const submit = (e)=>{
        e.preventDefault()
        var product = {
            name : name,
            price : price,
            qty : quantity
        }

         axios.post("https://healthy-me-rest-api.herokuapp.com/products",product).then((res)=>{
            toast.success(`${res.data.data.name} is Added`, {
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
  return (
    <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
    {/* Same as */}
    <ToastContainer />

       <form onSubmit={submit}>
                <div>
                    <label>Name</label>
                    <input type="text" onChange={(e) => setname(e.target.value)} />
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" onChange={(e) => setprice(e.target.value)} />
                </div>
                <div>
                    <label>Quantity</label>
                    <input type="text" onChange={(e) => setquantity(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
                
        </form>
    </div>
  )
}
