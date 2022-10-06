import React from "react";

const HomePage = () => {
    return (
        <section className="header">
            <div className="header__item">
                <div className="header__img-ibg">
                    <img src="@img/bg.jpg" alt="Happy woman" />
                </div>
            </div>
            <div className="header__item">
                <div className="header__container">
                    <div className="header__body">
                        <div className="header__top">
                            <a href="#" className="logo">
                                <img src="@img/logo.svg" alt="Logo" />
                            </a>
                            <h2 className="header__title title">Create Account</h2>
                            <div className="header__text text">Please register your account!</div>
                            <a href="./form.html" className="header__button button">
                                Create Account
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M14.43 18.8201C14.24 18.8201 14.05 18.7501 13.9 18.6001C13.61 18.3101 13.61 17.8301 13.9 17.5401L19.44 12.0001L13.9 6.46012C13.61 6.17012 13.61 5.69012 13.9 5.40012C14.19 5.11012 14.67 5.11012 14.96 5.40012L21.03 11.4701C21.32 11.7601 21.32 12.2401 21.03 12.5301L14.96 18.6001C14.81 18.7501 14.62 18.8201 14.43 18.8201Z" />
                                    <path d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z" />
                                </svg>
                            </a>
                        </div>
                        <div className="header__bottom">
                            Already have an Account?
                            <a href="#" className="header__link">
                                Sign In
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
