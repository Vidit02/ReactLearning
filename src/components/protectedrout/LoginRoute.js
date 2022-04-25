import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginRoute = () => {
    const [email, setemail] = useState('abc@gmail.com')
    const [pass, setpass] = useState('12345')
    var navigate = useNavigate()
    const loginFunc = async()=>{
        const formData = new FormData()
        // formData.append('email','abc@gmail.com')
        // formData.append()
        if(email == 'abc@gmail.com' && pass == '12345'){
            console.log("Logged in here")
            sessionStorage.setItem('email',email)
            navigate('/listusers')
        } else {
            console.log("Logged in not possible")
        }
    }
  return (
    <div>
        <h1>Login Here</h1>
        <button className='btn btn-outline-primary' onClick={loginFunc}>Login Here</button>
    </div>
  )
}
