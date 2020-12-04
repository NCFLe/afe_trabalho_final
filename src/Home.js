import React from 'react'
import { Link } from "react-router-dom"
import MoviePoster from "./assets/images/movie_poster.jpg"

export const Home = () => {

    return(
        <>
            <Link to="/Movies" className="flex justify-center items-center center black link dim w-25">
                <div className="bg-near-black br3">
                    <img src={MoviePoster} className="db w-100 br3 br--top" alt="Cartaz" />
                    <span className="f2 fw6 i white-60">Filmes</span>
                </div>
            </Link>
            {/* séries aqui */}
        </>
    );
}