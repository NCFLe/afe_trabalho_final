import React from "react";
import { Route } from "react-router-dom";
import { Home } from "../Home";
import { SeriesRoutes } from "../series/SeriesRoutes";
import { MoviesRoutes } from "../movies/MoviesRoutes";

const Routes = [
  {
    path: "/",
    component: Home,
  },
  ...MoviesRoutes,
  ...SeriesRoutes
];

export const ApplicationRoutes = () => (
  <>
    {Routes.map((r) => (
      <Route key={r.path} path={r.path} exact component={r.component} />
    ))}
  </>
);
