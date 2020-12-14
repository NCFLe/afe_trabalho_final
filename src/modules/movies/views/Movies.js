
import { ClickableCard } from "../../../common/components/ClickableCard";

export const Movies = () => {

    return(
        <>
        <div className="flex flex-column">
            <h1>Filmes</h1>
            <div className="flex justify-center">
                <ClickableCard title="Mais Votados" url="/Movies/TopRated"></ClickableCard>
                <ClickableCard title="Próximas Estréias" url="/Movies/Upcoming"></ClickableCard>
            </div>
            <div className="flex justify-center">
                <ClickableCard title="Em Cartaz" url="/Movies/NowPlaying"></ClickableCard>
                <ClickableCard title="Populares" url="/Movies/Popular"></ClickableCard>
            </div>
        </div>
        </>
    );
}