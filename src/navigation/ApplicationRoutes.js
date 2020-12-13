import React from "react";
import { Route } from "react-router-dom";
import { Home } from "../common/views/Home";
import { SeriesRoutes } from "../modules/series/SeriesRoutes";
import { MoviesRoutes } from "../modules/movies/MoviesRoutes";

const Routes = [
  {
    path: "/",
    component: Home,
  },
  ...MoviesRoutes,
  ...SeriesRoutes,
];

export const ApplicationRoutes = () => (
  <>
    {Routes.map((r) => (
      <Route key={r.path} path={r.path} exact component={r.component} />
    ))}
  </>
);
