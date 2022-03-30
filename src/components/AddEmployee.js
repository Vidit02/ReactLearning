import React from 'react'
import { useState } from 'react'
import { ListEmployees } from './ListEmployees'
import { ViewEmployee } from './ViewEmployee'

export const AddEmployee = () => {
    const [first, setfirstname] = useState('')
    const [second, setsecondname] = useState('')
    const [id, setid] = useState('')
    const [users, setusers] = useState([])

    const firstnamehandler = (e) => {
        console.log(e.target.value)
        setfirstname(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault();
        console.log("called...")
        console.log(first)
        console.log(second)
        var obj = {
            firstname : first,
            lastname  : second,
            id        : id
        }

        setusers([...users,obj])


    }
    return (
        <div>
            <h1>AddEmployee</h1>
            <form onSubmit={submit}>
                <div>
                    <label>ID</label>
                    <input type="text" onChange={(e) => setid(e.target.value)} />
                    {id}
                </div>
                <div>
                    <label>First Name</label>
                    <input type="text" onChange={(e) => firstnamehandler(e)} />
                    {first}
                </div>
                <div>
                    <label>First Name</label>
                    <input type="text" onChange={(e) => setsecondname(e.target.value)} />
                    {second}
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
                
            </form>
            {
                users.map((user)=> {
                    return(
                        <ListEmployees users = {user} />
                    )
                })
            }
        </div>
    )
}
