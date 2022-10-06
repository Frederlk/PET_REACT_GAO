import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const HomePage = lazy(() => import("../_pages/HomePage"));

export enum RouteNames {
    HOME = "/",
}

export const routesConfig: RouteObject[] = [
    {
        path: RouteNames.HOME,
        element: <HomePage />,
    },
];
