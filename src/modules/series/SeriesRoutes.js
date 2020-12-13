import { Latest } from "./views/Latest";
import { NowPlaying } from "./views/NowPlaying";
import { Popular } from "./views/Popular";
import { SerieDetail } from "./views/SerieDetail";
import { Series } from "./views/Series";
import { TopRated } from "./views/TopRated";

export const SeriesRoutes = [
    {
        path: "/Series",
        component: Series,
    },
    {
        path: "/Series/TopRated",
        component: TopRated, 
    },
    {
        path: "/SerieDetail",
        component: SerieDetail, 
    },
    {
        path: "/Series/Latest",
        component: Latest, 
    },
    {
        path: "/Series/NowPlaying",
        component: NowPlaying, 
    },
    {
        path: "/Series/Popular",
        component: Popular, 
    },
];