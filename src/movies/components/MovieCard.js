import { Tooltip } from '@material-ui/core';
import { Link } from 'react-router-dom'
import T from 'tachyons'
import LiveTvIcon from '@material-ui/icons/LiveTv';
import StarIcon from '@material-ui/icons/Star';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

export const MovieCard = ( {movie} ) => {

    return(
        <div key={movie.id} className="fl fl w-25 h-50 b--gray">
            <div className="pa3 ph4-ns pb4-ns ">
                <img src={`http://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} className="db w-100 br2 br--top" alt="Cartaz" />
                <div>
                    <div className="">
                        <Tooltip title={movie.title}>
                            <h1 className="f5 f4-ns mv0 mw5 truncate">{movie.title}</h1>
                        </Tooltip>
                    </div>
                    <div className="flex justify-between">
                        <Tooltip title="Nota">
                            <div className="flex items-center">
                                <StarIcon className="mr1 gold" />
                                <span className="f4-ns"> {movie.vote_average}</span>
                            </div>
                        </Tooltip>
                        <Tooltip title="Ano de lançamento">
                            <div className="flex items-center">
                                <LiveTvIcon className="mr1 red" />
                                <span className=" f4-ns "> {movie.release_date.split("-")[0]}</span>
                            </div>
                        </Tooltip>
                        <Tooltip title="Quantidade de votos">
                            <div className="flex items-center">
                                <ThumbUpAltIcon className="mr1 blue" />
                                <span className="f4-ns"> {movie.vote_count}</span>
                            </div>
                        </Tooltip>

                    </div>
                    {/* <span className="dtc tr mr0 f5 mv0">{movie.vote_count}</span> */}
                    
                    <Link to={{pathname: "/MovieDetail", aboutProps: {id: movie.id}}}
                        className="f6 link dim ph3 pv2 mb2 dib white bg-near-black fl w-100 mt2">Saiba Mais
                    </Link>
                </div>
            </div>
        </div>
    );
}