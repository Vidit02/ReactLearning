import axios, { Axios } from 'axios'
import React, { useState } from 'react'

export const Form = () => {
    const [bookname, setbookname] = useState('')
    const [bookauthor, setbookauthor] = useState('')
    const [bookcategory, setbookcategory] = useState('')
    const [bookprice, setbookprice] = useState('')


    const addBook = (e) => {
        e.preventDefault()
        console.log("Add Book is called...")
        const book = {
            name: bookname,
            author: bookauthor,
            category: bookcategory,
            price: bookprice
        }
        axios.post("https://restdemoapividit.herokuapp.com/book",book).then((res)=>{
            console.log("Data added successfully");
        })
    }
  return (
    <div>
        <h1>Add book</h1>
        <form onSubmit={addBook}>
            <div>
                <label>Book Name</label>
                <input type="text" onChange={(e) => setbookname(e.target.value) } />
            </div>
            <div>
                <label>Book Author</label>
                <input type="text" onChange={(e) => setbookauthor(e.target.value) } />
            </div>
            <div>
                <label>Book Category</label>
                <input type="text" onChange={(e) => setbookcategory(e.target.value) } />
            </div>
            <div>
                <label>Book Price</label>
                <input type="text" onChange={(e) => setbookprice(e.target.value) } />
            </div>
            <button type="submit" class="btn btn-outline-primary">Submit</button>
        </form>
    </div>
  )
}
