import { Series } from "../series/Views/Series";

export const SeriesRoutes = [
    {
      path: "/Series",
      component: Series,
    },
    {
        path: "Series/TopRated",
        // component: TopRated, 
    },
    {
        path: "SerieDetail/{id}",
        // component: MovieDetail, 
    },
];