import { LinkCard } from "../../components/LinkCard";

export const Series = () => {
    

    return(
        <>
        <div className="flex flex-column">
            <h1>Séries</h1>
            <div className="flex justify-center">
                <LinkCard title="Mais Votados" url="/Series/TopRated"></LinkCard>
                <LinkCard title="Últimas Estréias" url="/Series/Latest"></LinkCard>
            </div>
            <div className="flex justify-center">
                <LinkCard title="Em Cartaz" url="/Series/NowPlaying"></LinkCard>
                <LinkCard title="Populares" url="/Series/Popular"></LinkCard>
            </div>
        </div>
        </>
    );
}