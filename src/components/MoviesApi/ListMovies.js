import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


    export const ListMovies = () => {
        const [movies, setMovies] = useState([])
        const config = {
            headers: {
                'accept': 'application/json',
                'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTk3NmM3YTlhZjFlMjc3MGViMmI4MiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTAwMzA0MDAsImV4cCI6MTY1MDI4OTYwMH0.ZO-DzTBkxpfJvura8CGh3WuyI8YxwjbPiVKf0WnIhqg'
            }
        }

        const deleteMovie = async (movieId) => {
            await axios.delete("https://primeflixapis.herokuapp.com/api/deleteMovie/" + movieId, config).then((res) => {
                toast.error('Movie Deleted', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                getMovies()
            })
        }
        const getMovies = async () => {

            const config = {
                headers: {
                    'accept': 'application/json',
                    'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTk3NmM3YTlhZjFlMjc3MGViMmI4MiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTAwMzA0MDAsImV4cCI6MTY1MDI4OTYwMH0.ZO-DzTBkxpfJvura8CGh3WuyI8YxwjbPiVKf0WnIhqg'
                }
            }
            await axios.get("https://primeflixapis.herokuapp.com/api/getMovies/", config).then((res) => {
                console.log(res.data);
                setMovies(res.data)
            })
        }
        useEffect(() => {
            getMovies()
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
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Movie Name</th>
                            <th scope="col">Movie Genre</th>
                            <th scope="col">Update Movie</th>
                            <th scope="col">Delete Movie</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            movies.map((movie) => {
                                return (
                                    <tr>
                                        <td>{movie.title}</td>
                                        <td>{movie.genre}</td>
                                        <td><Link to={`/updatemovie/${movie._id}`} className='btn btn-outline-info'>Update Movie</Link></td>
                                        <td><button className='btn btn-outline-danger' onClick={() => { deleteMovie(movie._id) }}>Delete Movie</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
