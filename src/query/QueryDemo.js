import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { ClipLoader } from 'react-spinners'
import { useGetUserData } from '../service/QueryService'

export const QueryDemo = () => {
    // var isLoad;
    // const Demo = () => {
    //     const { isLoading, isError, data, error } = useGetUserData()
    //     console.log("Islodading = ", isLoading)
    //     isLoad = isLoading
    //     console.log("IsError    = ", isError);
    //     console.log("IsData     = ", data);
    //     console.log("errrorr    = ", error);
    //     console.log("Is error");
    // }


    // const Demo = () => {
    //     return useQuery('d',async()=>{
    //         return await axios.get("https://reqres.in/api/users?page=2");
    //     })
    // }

    const [user1, setuser1] = useState('')
    // const [user2, setuser2] = useState('')

    const res1 = useGetUserData()

    const [isLoading, setisLoading] = useState(false)

    const demo1 = async () => {
        console.log("res1==>", res1)
        if (res1.isLoading) {
            setisLoading(true)
        } else if (res1.error) {
            return <div>Error....</div>
        } else {
            setisLoading(false)
            setuser1(res1.data.data.data)
        }
    }

    return (
        <div>
            <button className='btn btn-outline-primary' onClick={() => { demo1() }}>Click HEre</button>
            {
                isLoading ? <ClipLoader size={50} color={"#123abc"} loading={isLoading} />
                    :
                    <h1>It is success</h1>
            }

        </div>
    )
}
