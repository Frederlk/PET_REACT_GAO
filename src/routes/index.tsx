import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const HomePage = lazy(() => import("../_pages/HomePage")),
    RegistrationPage = lazy(() => import("../_pages/RegistrationPage")),
    Page404 = lazy(() => import("../_pages/Page404"));

export enum RouteNames {
    HOME = "/",
    SIGN = "/sign",
    REGISTRATION = "/registration",
}

export const routesConfig: RouteObject[] = [
    {
        path: RouteNames.HOME,
        element: <HomePage />,
    },
    {
        path: RouteNames.SIGN,
        element: <Page404 />,
    },
    {
        path: RouteNames.REGISTRATION,
        element: <RegistrationPage />,
    },
];
