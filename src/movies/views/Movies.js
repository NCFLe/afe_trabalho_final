
import { Link } from "react-router-dom"
import { LinkCard } from "../components/LinkCard";

export const Movies = () => {
    

    return(
        <>
        <div className="flex flex-column">
            <h1>Filmes</h1>
            <div className="flex justify-center">
                <LinkCard imageSource="" title="Mais Votados" url="/Movies/TopRated"></LinkCard>
                <LinkCard imageSource="" title="Próximas Estréias" url="/Movies/Upcoming"></LinkCard>
            </div>
            <div className="flex justify-center">
                <LinkCard imageSource="" title="Em Cartaz" url="/Movies/NowPlaying"></LinkCard>
                <LinkCard imageSource="" title="Populares" url="/Movies/Popular"></LinkCard>
            </div>
                {/* <Link to="/Movies/TopRated">Mais Votados </Link>
                <Link to="/Movies/Upcoming">Próximas Estréias </Link>
                <Link to="/Movies/NowPlaying">Em Cartaz </Link>
                <Link to="/Movies/Popular">Populares </Link> */}
        </div>
        </>
    );
}