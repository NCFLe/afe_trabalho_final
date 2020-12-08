import React from 'react'
import { Link } from "react-router-dom"
import MoviePoster from "./assets/images/movie_poster.jpg"
import SeriePoster from "./assets/images/serie_poster.jpg"

export const Home = () => {

    return(
        <>
        <div className='flex justify-center items-center center'>
            <Link to="/Movies" className="black dim w-25 ma2">
                <div className="bg-near-black br3">
                    <img src={MoviePoster} className="db w-100 br3 br--top" alt="Filmes" />
                    <span className="f2 fw6 white-60">Filmes</span>
                </div>
            </Link>
            <Link to="/Series" className="black dim w-25 ma2">
                <div className="bg-near-black br3">
                    <img src={SeriePoster} className="db w-100 br3 br--top" alt="Séries" />
                    <span className="f2 fw6 white-60">Séries</span>
                </div>
            </Link>
        </div>
        </>
    );
}