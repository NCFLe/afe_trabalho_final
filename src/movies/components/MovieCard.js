import { Link, BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import T from 'tachyons'

export const MovieCard = ( {movie} ) => {
    // const[detail, setDetail] = false;

    // const handleDetails = () => {
    //     setDetail(true)
    // }

    return(
        <div key={movie.id} className="fl fl w-25 h-50 b--gray">
            <div className="pa3 ph4-ns pb4-ns ">
                <img src={`http://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} className="db w-100 br2 br--top" alt="Cartaz" />
                <div>
                    <div className="dtc tl">
                        <h1 className="f5 f4-ns mv0">{movie.title}</h1>
                    </div>
                    <div className="dtc tr"> 
                        <h2 className="f5 mv0">{movie.vote_average}</h2>
                    </div>
                    <div>
                        Lançamento:
                        <span className="f5 mv0">{movie.release_date}</span>
                    </div>
                    <Link to={{pathname: "/MovieDetail", aboutProps: {id: movie.id}}} > + </Link>
                </div>
            </div>
        </div>
    );
}