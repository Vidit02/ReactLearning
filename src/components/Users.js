import axios from 'axios'
import React, { useState } from 'react'

export const Users = () => {

    const [users, setusers] = useState([])
    const [name, setname] = useState('')
    const [job, setjob] = useState('')

    const getApi = () => {

        axios.get("https://reqres.in/api/users?page=2").then(res => {

            console.log(res.data.data)
            setusers(res.data.data)
        })

    }
    const postApi = () => {

        var data = {
            "name": "sachin",
            "job": "cricketer"
        }

        axios.post("https://reqres.in/api/users", data).then(res => {
            console.log(res.data)
            alert("data posted")

        })
    }
    const deleteApi = () => {

        axios.delete("https://reqres.in/api/users/2").then(res => {
            console.log(res.status)
            if (res.status == 204) {
                alert("data deleted")
            }
            else {
                alert("data not deleted")
            }
        })
    }
    console.log(users)


    const submit = (e) => {
        e.preventDefault()

        var data = {

            name:name,
            job:job

        }
        axios.post("https://reqres.in/api/users", data).then(res => {   
            alert("data posted")
        })


    }
    return (
        <div>

            <button onClick={getApi}>CLICK</button>
            <button onClick={postApi}>POST</button>
            <button onClick={deleteApi}>delete</button>


            {
                users.length > 0 ?
                    <div>

                        <table class="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user) => {
                                        return (<tr>
                                            <th scope="row">{user.id}</th>
                                            <td>{user.first_name}</td>
                                            <td>{user.last_name}</td>
                                            <td>{user.email}</td>
                                        </tr>

                                        )
                                    })
                                }


                            </tbody>
                        </table>

                    </div>
                    : "NO DATA"
            }


            <form onSubmit={submit}>
                <input type="text" placeholder="Enter your name" onChange={(e) => { setname(e.target.value) }} />
                <input type="text" placeholder="Enter your job" onChange={(e) => { setjob(e.target.value) }} />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}