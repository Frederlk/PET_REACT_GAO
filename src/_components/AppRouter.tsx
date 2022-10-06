import { useEffect, FC } from "react";
import { useLocation, useRoutes } from "react-router-dom";

import { useEffectOnce } from "../hooks";
import { routesConfig } from "../routes";

const PageChange: FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const AppRouter: FC = () => {
    const routes = useRoutes(routesConfig);

    useEffectOnce(() => {
        const onPageLoad = () => {
            document.documentElement.classList.add("_loaded");
        };

        // Check if the page has already loaded
        if (document.readyState === "complete") {
            onPageLoad();
        } else {
            window.addEventListener("load", onPageLoad);
            // Remove the event listener when component unmounts
            return () => window.removeEventListener("load", onPageLoad);
        }
    });

    return (
        <>
            <PageChange />
            {routes}
        </>
    );
};

export default AppRouter;
