import React from 'react'
import { useState } from 'react'

export const AddEmployee = () => {
    const [first, setfirstname] = useState('')
    const [second, setsecondname] = useState('')
    
    const firstnamehandler = (e)=>{
        console.log(e.target.value)
        setfirstname(e.target.value)
    }

    const submit = (e)=>{
        e.preventDefault();
        console.log("called...")
        console.log(first)
        console.log(second)

    }
  return (
    <div>
        <h1>AddEmployee</h1>
        <form onSubmit={submit}>
            <div>
                <label>First Name</label>
                <input type="text" onChange={(e)=>firstnamehandler(e)} />
                {first}
            </div>
            <div>
                <label>First Name</label>
                <input type="text" onChange={(e)=>setsecondname(e.target.value)} />
                {second}
            </div>
            <div>
                <input type="submit" value="Submit" />
            </div>
        </form>
        <div>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                <tr>
                    <th>{first}</th>
                    <th>{second}</th>
                </tr>
            </table>
        </div>
    </div>
  )
}
