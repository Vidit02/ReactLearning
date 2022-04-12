import React from 'react'
import { Link } from 'react-router-dom'

export const Movies = () => {
    var movieObj = [
        {
            id: 1,
            name: "83",
            rating: "4",
            time: "2:30"
        },
        {
            id: 2,
            name: "Pushpa",
            rating: "3",
            time: "3:00"
        },
        {
            id: 3,
            name: "Avengers: Age of Ultron",
            rating: "5",
            time: "3:10"
        },
        {
            id: 4,
            name: "Avengers: EndGame",
            rating: "5",
            time: "3:30"
        }
    ]
    return (
        <div>
            <h1>Movies</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Movieid</th>
                        <th scope="col">Movie Name</th>
                        <th scope="col">Movie Time</th>
                        <th scope="col">Movie Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movieObj.map((moviedet) => {
                            return (
                                <tr>
                                    <td>{moviedet.id}</td>
                                    <td><Link to={`/movies/moviedetails/${moviedet.id}`}>{moviedet.name}</Link></td>
                                    <td>{moviedet.time}</td>
                                    <td>{moviedet.rating}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
