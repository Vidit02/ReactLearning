import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UpdateMovie = () => {

    const [movie, setmovie] = useState('')
    const [title, settitle] = useState('')
    const [genre, setgenre] = useState('')
    const config = {
        headers: {
            'accept': 'application/json',
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTk3NmM3YTlhZjFlMjc3MGViMmI4MiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTAwMzA0MDAsImV4cCI6MTY1MDI4OTYwMH0.ZO-DzTBkxpfJvura8CGh3WuyI8YxwjbPiVKf0WnIhqg'
        }
    }
    const dId = useParams().id

    const updateMovie = async (e) => {
        e.preventDefault()
        var movie = {
            title: title,
            genre: genre
        }
        console.log("UPdate movie is called");

        axios.put("https://primeflixapis.herokuapp.com/api/updateMovie/" + dId, movie, {headers : { 'token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTk3NmM3YTlhZjFlMjc3MGViMmI4MiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTAwMzA0MDAsImV4cCI6MTY1MDI4OTYwMH0.ZO-DzTBkxpfJvura8CGh3WuyI8YxwjbPiVKf0WnIhqg'}}).then((res) => {
            console.log("Out ois called")
            toast.info(`${res.data.title} is updated`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            console.log(res.status)
        })
    }

    const getDataById = async () => {
        axios.get("https://primeflixapis.herokuapp.com/api/getMovie/" + dId, config).then((res) => {
            setmovie(res.data)
            settitle(res.data.title)
            setgenre(res.data.genre)
        })
    }

    useEffect(() => {
        getDataById()

        return () => {

        }
    }, [])

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
            <form onSubmit={updateMovie}>
                <div class="form-group">
                    <label >Movie Title</label>
                    <input type="text" class="form-control" placeholder="Enter title of Movie" defaultValue={movie.title}  onChange={(e) => settitle(e.target.value)} />
                </div>
                <div class="form-group">
                    <label >Movie Genre</label>
                    <input type="text" class="form-control" placeholder="Enter the genre of Movie" defaultValue={movie.genre} onChange={(e) => setgenre(e.target.value)} />
                </div>
                <button type="submit" class="btn btn-outline-primary">Submit</button>
            </form>
        </div>
    )
}
