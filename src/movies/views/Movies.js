
import { ClickableCard } from "../../common/components/ClickableCard";
import ImagePopular from "../../assets/images/movie_popular.jpg"

export const Movies = () => {
    

    return(
        <>
        <div className="flex flex-column">
            <h1>Filmes</h1>
            <div className="flex justify-center">
                <ClickableCard imageSource={ImagePopular} title="Mais Votados" url="/Movies/TopRated"></ClickableCard>
                <ClickableCard imageSource={ImagePopular} title="Próximas Estréias" url="/Movies/Upcoming"></ClickableCard>
            </div>
            <div className="flex justify-center">
                <ClickableCard imageSource={ImagePopular} title="Em Cartaz" url="/Movies/NowPlaying"></ClickableCard>
                <ClickableCard imageSource={ImagePopular} title="Populares" url="/Movies/Popular"></ClickableCard>
            </div>
                {/* <Link to="/Movies/TopRated">Mais Votados </Link>
                <Link to="/Movies/Upcoming">Próximas Estréias </Link>
                <Link to="/Movies/NowPlaying">Em Cartaz </Link>
                <Link to="/Movies/Popular">Populares </Link> */}
        </div>
        </>
    );
}