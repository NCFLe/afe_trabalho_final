import { ClickableCard } from "../../../common/components/ClickableCard";

export const Series = () => {

    return(
        <>
        <div className="flex flex-column">
            <h1>Séries</h1>
            <div className="flex justify-center">
                <ClickableCard title="Mais Votadas" url="/Series/TopRated"></ClickableCard>
                <ClickableCard title="Transmitindo Hoje" url="/Series/Latest"></ClickableCard>
            </div>
            <div className="flex justify-center">
                <ClickableCard title="No Ar" url="/Series/NowPlaying"></ClickableCard>
                <ClickableCard title="Populares" url="/Series/Popular"></ClickableCard>
            </div>
        </div>
        </>
    );
}