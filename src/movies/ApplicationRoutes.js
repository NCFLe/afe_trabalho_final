import React from "react";
import { Route } from "react-router-dom";
import { Movies } from "./views/Movies";
import { MovieDetail } from "./views/MovieDetail";
import { TopRated } from "./views/TopRated";
import { Home } from "../Home";

const Routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/Movies",
    component: Movies,
  },
  {
    path: "/TopRated",
    component: TopRated, 
  },
  {
    path: "/MovieDetail",
    component: MovieDetail, 
  },
];

export const ApplicationRoutes = () => (
  <>
    {Routes.map((r) => (
      <Route key={r.path} path={r.path} exact component={r.component} />
    ))}
  </>
);
