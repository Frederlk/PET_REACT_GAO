import React, { FC } from "react";
import { Link } from "react-router-dom";
import { defaultImages } from "../constants/images";
import { RouteNames } from "../routes";
import { Picture } from "../_components";

const { bg, bg_WEBP, logo } = defaultImages;

const HomePage: FC = () => {
    return (
        <section className="home">
            <div className="home__item">
                <div className="home__img-ibg">
                    <Picture srcWebp={bg_WEBP} fallbackSrc={bg} alt="GAO" />
                </div>
            </div>
            <div className="home__item">
                <div className="home__container">
                    <div className="home__body">
                        <div className="home__top">
                            <Link to={RouteNames.HOME} className="logo">
                                <img src={logo} alt="GAO Logo" />
                            </Link>
                            <h2 className="title">Create Account</h2>
                            <div className="text">Please register your account!</div>
                            <Link to={RouteNames.REGISTRATION} className="home__button button _icon-arrow">
                                Create Account
                            </Link>
                        </div>
                        <div className="home__bottom">
                            Already have an Account?
                            <Link to={RouteNames.SIGN} className="home__link">
                                {" "}
                                Sign In
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
