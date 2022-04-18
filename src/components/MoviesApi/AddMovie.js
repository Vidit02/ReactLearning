import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ListMovies } from './ListMovies';

export const AddMovie = () => {
  const [title, settitle] = useState('')
  const [genre, setgenre] = useState('')
  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTk3NmM3YTlhZjFlMjc3MGViMmI4MiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTAwMzA0MDAsImV4cCI6MTY1MDI4OTYwMH0.ZO-DzTBkxpfJvura8CGh3WuyI8YxwjbPiVKf0WnIhqg';
  const addMovie = (e) => {
    e.preventDefault()
    console.log("Add movie is Called...");
    const movie = {
      title: title,
      genre: genre
    }
    const config = {
      headers: {
        'accept': 'application/json',
        'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTk3NmM3YTlhZjFlMjc3MGViMmI4MiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTAwMzA0MDAsImV4cCI6MTY1MDI4OTYwMH0.ZO-DzTBkxpfJvura8CGh3WuyI8YxwjbPiVKf0WnIhqg',
        'Content-Type': 'application/json'
      }
    }

    axios.post("https://primeflixapis.herokuapp.com/api/addMovie", movie, config).then((res) => {
      toast.success(`${res.data.title} added successfully...`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
  }

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form onSubmit={addMovie}>
        <div class="form-group">
          <label >Movie Title</label>
          <input type="text" class="form-control" placeholder="Enter title of Movie" onChange={(e) => settitle(e.target.value)} />
        </div>
        <div class="form-group">
          <label >Movie Genre</label>
          <input type="text" class="form-control" placeholder="Enter the genre of Movie" onChange={(e) => setgenre(e.target.value)} />
        </div>
        <button type="submit" class="btn btn-outline-primary">Submit</button>
      </form>
    </div>
  )
}
