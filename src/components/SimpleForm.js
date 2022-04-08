import userEvent from '@testing-library/user-event'
import React, { useRef } from 'react'
import { useState } from 'react'

export const SimpleForm = () => {
    const [name, setName] = useState("")
    const [email, setemail] = useState("")
    var password = useRef()
    const [namevldtor, setnamevldtor] = useState(true)
    const [emailvldtor, setemailvldtor] = useState(true)



    const nameHandler = (e) => {
        if (e.target.value === "") {
            setnamevldtor(true)
        } else {
            setnamevldtor(false)
            setName(e.target.value)
        }
        console.log(e.target.value)
    }
    const emailHandler = (e) => {
        if (e.target.value.length < 5) {
            setemailvldtor(true)
        } else {
            setemailvldtor(false)
            setemail(e.target.value)
        }
        console.log(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()
        if(password.current.value === ""){
            alert("Password is required")
        }
        console.log(name + email + password.current.value)
    }



    return (
        <div>
            <form onSubmit={submit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                        onChange={(e) => nameHandler(e)}
                    />
                    {
                        namevldtor ? <h5 style={{ color: "red" }}>Name is Required</h5> : null
                    }
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                        onChange={(e) => emailHandler(e)}
                    />
                    {
                        emailvldtor ? <h5 style={{ color: "red" }}>Email is Required</h5> : null
                    }

                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                        ref={password}
                    />

                </div>
                <button type="submit" class="btn btn-primary" disabled={emailvldtor || namevldtor}>Submit</button> 
            </form>
        </div>
    )
}
