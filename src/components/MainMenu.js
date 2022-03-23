import React from 'react'
import { Link } from 'react-router-dom'

export const MainMenu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={"/movies"}>Movies</Link>
                </li>
            </ul>

        </div>

    )
}
