import axios, { Axios } from 'axios'
import React, { useState } from 'react'

export const List = () => {
    const [books, setbooks] = useState([])
    const listAllBooks = (e) => {
        axios.get("https://restdemoapividit.herokuapp.com/books").then((res) => {
            setbooks(res.data)
        })
    }
    return (
        <div>

            <button onClick={listAllBooks} class="btn btn-outline-info">List all Books</button>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Author</th>
                        <th scope="col">Category</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book) => {
                            return (
                                <tr>
                                    <td>{book.bookId}</td>
                                    <td>{book.name}</td>
                                    <td>{book.author}</td>
                                    <td>{book.category}</td>
                                    <td>{book.price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
