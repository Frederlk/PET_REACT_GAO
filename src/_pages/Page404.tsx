import { FC } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { RouteNames } from "../routes";
import { defaultImages } from "../constants/images";

const { logo } = defaultImages;

const Page404: FC = () => {
    return (
        <>
            <Helmet>
                <meta name="404" content="Error 404" />
                <title>Error 404</title>
            </Helmet>

            <section className="page404">
                <div className="page404__container">
                    <Link to={RouteNames.HOME} className="logo">
                        <img src={logo} alt="GAO Logo" />
                    </Link>
                    <h2 className="title">Error 404</h2>
                    <div className="text">Are you lost?</div>
                    <Link to={RouteNames.HOME} className="page404__button button">
                        To Home Page
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Page404;
