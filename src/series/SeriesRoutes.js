import { Series } from "../series/Views/Series";
import { TopRated } from "./Views/TopRated";

export const SeriesRoutes = [
    {
      path: "/Series",
      component: Series,
    },
    {
        path: "Series/TopRated",
        component: TopRated, 
    },
    {
        path: "SerieDetail/{id}",
        // component: , 
    },
    {
        path: "Series/Latest",
        // component: , 
    },
    {
        path: "Series/NowPlaying",
        // component: , 
    },
    {
        path: "Series/Popular",
        // component: , 
    },
];