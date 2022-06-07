import React from 'react'

export const DeleteArr = (props) => {

    const deleteElementFromArray = (e) =>{
        props.newData(props.data.splice(1))

    }

    return (
        <div>
            {
                console.log(props.data)
            }
            <button class="btn btn-outline-danger" onClick={()=>deleteElementFromArray()}>Delete Element from Array</button>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((book) => {
                            return (
                                <tr>
                                    <td>{book.name}</td>
                                    <td>{book.age}</td>
                                    <td>{book.gender}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
