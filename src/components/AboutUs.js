import React from 'react'

export default function AboutUs(props) {
    var stage = {
        color : "red ",
        backgroundColor : "black"
    }
    var stdage = {
        color : "blue"
    }
    return (
        <div>
            <h2>About us Page</h2>
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
                        props.students.map((students) => {
                            return (<tr>
                                <td>{students.name}</td>
                                <td>
                                    {students.age}
                                    {
                                        students.age <= 25 ? <h4 style={stage}>You are young</h4> : <h4 style={stdage}>You are old</h4>
                                    }
                                </td>
                                <td>{students.gender}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
