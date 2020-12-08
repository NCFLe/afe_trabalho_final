import { Movies } from "./views/Movies";
import { MovieDetail } from "./views/MovieDetail";
import { TopRated } from "./views/TopRated";
import { Upcoming } from "./views/Upcoming";
import { NowPlaying } from "./views/NowPlaying";
import { Popular } from "./views/Popular";

export const MoviesRoutes = [
    {
        path: "/Movies",
        component: Movies,
      },
      {
        path: "/Movies/TopRated",
        component: TopRated, 
      },
      {
        path: "/MovieDetail",
        component: MovieDetail, 
      },
      {
        path: "/Movies/Upcoming",
        component: Upcoming, 
      },
      {
        path: "/Movies/NowPlaying",
        component: NowPlaying, 
      },
      {
        path: "/Movies/Popular",
        component: Popular, 
      },
];