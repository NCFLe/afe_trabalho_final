import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import MoviePoster from "./assets/movie_poster.jpg"

export const Home = () => {

    return(
        <>
            <Link to="/Movies">
                <div className="fl fl w-25 h-50 b--gray bg-washed-blue">
                    <div className="pa3 ph4-ns pb4-ns ">
                        <img src={MoviePoster} className="db w-100 br2 br--top" alt="Cartaz" />
                    </div>
                        <h1 className="f5 f4-ns mv0">Filmes</h1>
                </div>
            </Link>
            {/* séries aqui */}
        </>
    );
}