import { FC } from "react";

const RegistrationPage: FC = () => {
    return (
        <section className="form-page">
            <div className="form-page__container">
                <div className="form-page__content">
                    <a href="#" className="logo">
                        <img src="@img/logo.svg" alt="Logo" />
                    </a>

                    <form action="#" className="form-page__form form">
                        <div className="form__progress progress">
                            <div className="progress__step">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M20.62 8.45C19.57 3.83 15.54 1.75 12 1.75C12 1.75 12 1.75 11.99 1.75C8.45997 1.75 4.41997 3.82 3.36997 8.44C2.19997 13.6 5.35997 17.97 8.21997 20.72C9.27997 21.74 10.64 22.25 12 22.25C13.36 22.25 14.72 21.74 15.77 20.72C18.63 17.97 21.79 13.61 20.62 8.45ZM12 13.46C10.26 13.46 8.84997 12.05 8.84997 10.31C8.84997 8.57 10.26 7.16 12 7.16C13.74 7.16 15.15 8.57 15.15 10.31C15.15 12.05 13.74 13.46 12 13.46Z" />
                                </svg>
                            </div>
                            <div className="progress__step">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M17 22H7C6.59 22 6.25 21.66 6.25 21.25C6.25 20.84 6.59 20.5 7 20.5H17C17.41 20.5 17.75 20.84 17.75 21.25C17.75 21.66 17.41 22 17 22Z" />
                                    <path d="M20.35 5.52004L16.35 8.38004C15.82 8.76004 15.06 8.53004 14.83 7.92004L12.94 2.88004C12.62 2.01004 11.39 2.01004 11.07 2.88004L9.16998 7.91004C8.93998 8.53004 8.18997 8.76004 7.65998 8.37004L3.65998 5.51004C2.85998 4.95004 1.79998 5.74004 2.12998 6.67004L6.28998 18.32C6.42998 18.72 6.80998 18.98 7.22998 18.98H16.76C17.18 18.98 17.56 18.71 17.7 18.32L21.86 6.67004C22.2 5.74004 21.14 4.95004 20.35 5.52004ZM14.5 14.75H9.49998C9.08998 14.75 8.74998 14.41 8.74998 14C8.74998 13.59 9.08998 13.25 9.49998 13.25H14.5C14.91 13.25 15.25 13.59 15.25 14C15.25 14.41 14.91 14.75 14.5 14.75Z" />
                                </svg>
                            </div>
                            <div className="progress__step">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z" />
                                    <path d="M17.08 14.15C14.29 12.29 9.73996 12.29 6.92996 14.15C5.65996 15 4.95996 16.15 4.95996 17.38C4.95996 18.61 5.65996 19.75 6.91996 20.59C8.31996 21.53 10.16 22 12 22C13.84 22 15.68 21.53 17.08 20.59C18.34 19.74 19.04 18.6 19.04 17.36C19.03 16.13 18.34 14.99 17.08 14.15Z" />
                                </svg>
                            </div>
                            <div className="progress__step">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M16.44 3.09998C14.63 3.09998 13.01 3.97998 12 5.32998C10.99 3.97998 9.37 3.09998 7.56 3.09998C4.49 3.09998 2 5.59998 2 8.68998C2 9.87998 2.19 10.98 2.52 12C4.1 17 8.97 19.99 11.38 20.81C11.72 20.93 12.28 20.93 12.62 20.81C15.03 19.99 19.9 17 21.48 12C21.81 10.98 22 9.87998 22 8.68998C22 5.59998 19.51 3.09998 16.44 3.09998Z" />
                                </svg>
                            </div>
                            <div className="progress__step">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M18 2H6C4.34 2 3 3.33 3 4.97V15.88C3 17.52 4.34 18.85 6 18.85H6.76C7.56 18.85 8.32 19.16 8.88 19.72L10.59 21.41C11.37 22.18 12.64 22.18 13.42 21.41L15.13 19.72C15.69 19.16 16.46 18.85 17.25 18.85H18C19.66 18.85 21 17.52 21 15.88V4.97C21 3.33 19.66 2 18 2ZM12 5.75C13.29 5.75 14.33 6.79 14.33 8.08C14.33 9.37 13.29 10.41 12 10.41C10.71 10.41 9.67 9.36 9.67 8.08C9.67 6.79 10.71 5.75 12 5.75ZM14.68 15.06H9.32C8.51 15.06 8.04 14.16 8.49 13.49C9.17 12.48 10.49 11.8 12 11.8C13.51 11.8 14.83 12.48 15.51 13.49C15.96 14.16 15.48 15.06 14.68 15.06Z" />
                                </svg>
                            </div>

                            <div className="progress__line">
                                <div className="progress__line_success"></div>
                            </div>
                        </div>

                        <div className="form__steps">
                            <div className="form__step hub-step">
                                <div className="hub-step__top top">
                                    <h3 className="top__title title">Which Hub Are You In?</h3>
                                    <div className="top__text text">
                                        We are active in major cities and we schedule meetings based on time
                                        zones. Let us know your home base.
                                    </div>
                                    <div className="top__input input-form">
                                        <div className="input-form__icon input-icon">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="#747887"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M9.58329 18.125C4.87496 18.125 1.04163 14.2916 1.04163 9.58329C1.04163 4.87496 4.87496 1.04163 9.58329 1.04163C14.2916 1.04163 18.125 4.87496 18.125 9.58329C18.125 14.2916 14.2916 18.125 9.58329 18.125ZM9.58329 2.29163C5.55829 2.29163 2.29163 5.56663 2.29163 9.58329C2.29163 13.6 5.55829 16.875 9.58329 16.875C13.6083 16.875 16.875 13.6 16.875 9.58329C16.875 5.56663 13.6083 2.29163 9.58329 2.29163Z" />
                                                <path d="M18.3333 18.9583C18.175 18.9583 18.0166 18.9 17.8916 18.775L16.225 17.1083C15.9833 16.8666 15.9833 16.4666 16.225 16.225C16.4666 15.9833 16.8666 15.9833 17.1083 16.225L18.775 17.8916C19.0166 18.1333 19.0166 18.5333 18.775 18.775C18.65 18.9 18.4916 18.9583 18.3333 18.9583Z" />
                                            </svg>
                                        </div>
                                        <input
                                            autoComplete="off"
                                            type="text"
                                            name="hub-name"
                                            data-error="Please, type your hub"
                                            placeholder="Search your hub.."
                                            className="input-form__input input"
                                        />
                                    </div>
                                </div>
                                <div className="hub-step__body">
                                    <div className="hub-step__label label">Popular Hub</div>
                                    <div className="hub-step__grid options">
                                        <div className="options__item">
                                            <input
                                                hidden
                                                id="o_1"
                                                className="options__input"
                                                checked
                                                type="radio"
                                                value="1"
                                                name="option"
                                            />
                                            <label htmlFor="o_1" className="options__label">
                                                <span className="options__text">Austin</span>
                                                <div className="options__img">
                                                    <img src="@img/hub/austin.png" alt="Austin City Icon" />
                                                </div>
                                            </label>
                                        </div>
                                        <div className="options__item">
                                            <input
                                                hidden
                                                id="o_2"
                                                className="options__input"
                                                type="radio"
                                                value="2"
                                                name="option"
                                            />
                                            <label htmlFor="o_2" className="options__label">
                                                <span className="options__text">Dallas</span>
                                                <div className="options__img">
                                                    <img src="@img/hub/dallas.png" alt="dallas City Icon" />
                                                </div>
                                            </label>
                                        </div>
                                        <div className="options__item">
                                            <input
                                                hidden
                                                id="o_3"
                                                className="options__input"
                                                checked
                                                type="radio"
                                                value="3"
                                                name="option"
                                            />
                                            <label htmlFor="o_3" className="options__label">
                                                <span className="options__text">San Antonio</span>
                                                <div className="options__img">
                                                    <img
                                                        src="@img/hub/san-antonio.png"
                                                        alt="San Antonio City Icon"
                                                    />
                                                </div>
                                            </label>
                                        </div>
                                        <div className="options__item">
                                            <input
                                                hidden
                                                id="o_4"
                                                className="options__input"
                                                type="radio"
                                                value="4"
                                                name="option"
                                            />
                                            <label htmlFor="o_4" className="options__label">
                                                <span className="options__text">Houston</span>
                                                <div className="options__img">
                                                    <img src="@img/hub/houstan.png" alt="houston City Icon" />
                                                </div>
                                            </label>
                                        </div>
                                        <div className="options__item">
                                            <input
                                                hidden
                                                id="o_5"
                                                className="options__input"
                                                type="radio"
                                                value="5"
                                                name="option"
                                            />
                                            <label htmlFor="o_5" className="options__label">
                                                <span className="options__text">New York</span>
                                                <div className="options__img">
                                                    <img
                                                        src="@img/hub/new-york.png"
                                                        alt="New York  City Icon"
                                                    />
                                                </div>
                                            </label>
                                        </div>
                                        <div className="options__item">
                                            <input
                                                hidden
                                                id="o_6"
                                                className="options__input"
                                                type="radio"
                                                value="6"
                                                name="option"
                                            />
                                            <label htmlFor="o_6" className="options__label">
                                                <span className="options__text">Los Angeles</span>
                                                <div className="options__img">
                                                    <img
                                                        src="@img/hub/los-angelas.png"
                                                        alt="Los Angeles City Icon"
                                                    />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form__step objective-step">
                                <div className="objective-step__top top">
                                    <h3 className="top__title title">What Are Your Objectives?</h3>
                                    <div className="top__text text">
                                        Select up to 3 objectives. These will be kept private from other users
                                        but help us find relevant matches.
                                    </div>
                                </div>
                                <div className="objective-step__body">
                                    <div className="objective-step__label label">Select Objectives</div>
                                    <div className="objective-step__grid">
                                        <div className="objective-step__checkbox-item checkbox">
                                            <input
                                                id="c_1"
                                                data-error="error"
                                                className="checkbox__input"
                                                type="checkbox"
                                                value="1"
                                                name="objective"
                                            />
                                            <label htmlFor="c_1" className="checkbox__label">
                                                <div className="checkbox__img">
                                                    <img
                                                        src="@img/objectives/brain.png/"
                                                        alt="Brainstorm with peers Icon"
                                                    />
                                                </div>
                                                <svg
                                                    width="19"
                                                    height="15"
                                                    className="checkbox__icon"
                                                    viewBox="0 0 19 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M2 6.73684L7.17241 12L17 2"
                                                        stroke="white"
                                                        strokeWidth="3"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                                <span className="checkbox__text">Brainstorm with peers</span>
                                            </label>
                                        </div>
                                        <div className="objective-step__checkbox-item checkbox">
                                            <input
                                                id="c_2"
                                                data-error="error"
                                                className="checkbox__input"
                                                type="checkbox"
                                                value="2"
                                                name="objective"
                                            />
                                            <label htmlFor="c_2" className="checkbox__label">
                                                <div className="checkbox__img">
                                                    <img
                                                        src="@img/objectives/team.png"
                                                        alt="Grow your team Icon"
                                                    />
                                                </div>
                                                <svg
                                                    width="19"
                                                    height="15"
                                                    className="checkbox__icon"
                                                    viewBox="0 0 19 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M2 6.73684L7.17241 12L17 2"
                                                        stroke="white"
                                                        strokeWidth="3"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                                <span className="checkbox__text">Grow your team</span>
                                            </label>
                                        </div>
                                        <div className="objective-step__checkbox-item checkbox">
                                            <input
                                                id="c_3"
                                                data-error="error"
                                                className="checkbox__input"
                                                type="checkbox"
                                                value="3"
                                                name="objective"
                                            />
                                            <label htmlFor="c_3" className="checkbox__label">
                                                <div className="checkbox__img">
                                                    <img
                                                        src="@img/objectives/company.png/"
                                                        alt="Start a company Icon"
                                                    />
                                                </div>
                                                <svg
                                                    width="19"
                                                    height="15"
                                                    className="checkbox__icon"
                                                    viewBox="0 0 19 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M2 6.73684L7.17241 12L17 2"
                                                        stroke="white"
                                                        strokeWidth="3"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                                <span className="checkbox__text">Start a company</span>
                                            </label>
                                        </div>

                                        <div className="objective-step__checkbox-item checkbox">
                                            <input
                                                id="c_4"
                                                data-error="error"
                                                className="checkbox__input"
                                                type="checkbox"
                                                value="4"
                                                name="objective"
                                            />
                                            <label htmlFor="c_4" className="checkbox__label">
                                                <div className="checkbox__img">
                                                    <img
                                                        src="@img/objectives/planet.png/"
                                                        alt="Explore other companies Icon"
                                                    />
                                                </div>
                                                <svg
                                                    width="19"
                                                    height="15"
                                                    className="checkbox__icon"
                                                    viewBox="0 0 19 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M2 6.73684L7.17241 12L17 2"
                                                        stroke="white"
                                                        strokeWidth="3"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                                <span className="checkbox__text">
                                                    Explore other companies
                                                </span>
                                            </label>
                                        </div>
                                        <div className="objective-step__checkbox-item checkbox">
                                            <input
                                                id="c_5"
                                                data-error="error"
                                                className="checkbox__input"
                                                type="checkbox"
                                                value="5"
                                                name="objective"
                                            />
                                            <label htmlFor="c_5" className="checkbox__label">
                                                <div className="checkbox__img">
                                                    <img
                                                        src="@img/objectives/rocket.png/"
                                                        alt="Business development Icon"
                                                    />
                                                </div>
                                                <svg
                                                    width="19"
                                                    height="15"
                                                    className="checkbox__icon"
                                                    viewBox="0 0 19 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M2 6.73684L7.17241 12L17 2"
                                                        stroke="white"
                                                        strokeWidth="3"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                                <span className="checkbox__text">Business development</span>
                                            </label>
                                        </div>
                                        <div className="objective-step__checkbox-item checkbox">
                                            <input
                                                id="c_6"
                                                data-error="error"
                                                className="checkbox__input"
                                                type="checkbox"
                                                value="6"
                                                name="objective"
                                            />
                                            <label htmlFor="c_6" className="checkbox__label">
                                                <div className="checkbox__img">
                                                    <img src="@img/objectives/invest.png" alt="Invest Icon" />
                                                </div>
                                                <svg
                                                    width="19"
                                                    height="15"
                                                    className="checkbox__icon"
                                                    viewBox="0 0 19 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M2 6.73684L7.17241 12L17 2"
                                                        stroke="white"
                                                        strokeWidth="3"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                                <span className="checkbox__text">Invest</span>
                                            </label>
                                        </div>

                                        <div className="objective-step__checkbox-item checkbox">
                                            <input
                                                id="c_7"
                                                data-error="error"
                                                className="checkbox__input"
                                                type="checkbox"
                                                value="7"
                                                name="objective"
                                            />
                                            <label htmlFor="c_7" className="checkbox__label">
                                                <div className="checkbox__img">
                                                    <img
                                                        src="@img/objectives/time.png/"
                                                        alt="Explore new projects Icon"
                                                    />
                                                </div>
                                                <svg
                                                    width="19"
                                                    height="15"
                                                    className="checkbox__icon"
                                                    viewBox="0 0 19 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M2 6.73684L7.17241 12L17 2"
                                                        stroke="white"
                                                        strokeWidth="3"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                                <span className="checkbox__text">Explore new projects</span>
                                            </label>
                                        </div>
                                        <div className="objective-step__checkbox-item checkbox">
                                            <input
                                                id="c_8"
                                                data-error="error"
                                                className="checkbox__input"
                                                type="checkbox"
                                                value="8"
                                                name="objective"
                                            />
                                            <label htmlFor="c_8" className="checkbox__label">
                                                <div className="checkbox__img">
                                                    <img
                                                        src="@img/objectives/mentor.png"
                                                        alt="Mentor others Icon"
                                                    />
                                                </div>
                                                <svg
                                                    width="19"
                                                    height="15"
                                                    className="checkbox__icon"
                                                    viewBox="0 0 19 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M2 6.73684L7.17241 12L17 2"
                                                        stroke="white"
                                                        strokeWidth="3"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                                <span className="checkbox__text">Mentor others</span>
                                            </label>
                                        </div>
                                        <div className="objective-step__checkbox-item checkbox">
                                            <input
                                                id="c_9"
                                                data-error="error"
                                                className="checkbox__input"
                                                type="checkbox"
                                                value="9"
                                                name="objective"
                                            />
                                            <label htmlFor="c_9" className="checkbox__label">
                                                <div className="checkbox__img">
                                                    <img
                                                        src="@img/objectives/events.png/"
                                                        alt="Organize events Icon"
                                                    />
                                                </div>
                                                <svg
                                                    width="19"
                                                    height="15"
                                                    className="checkbox__icon"
                                                    viewBox="0 0 19 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M2 6.73684L7.17241 12L17 2"
                                                        stroke="white"
                                                        strokeWidth="3"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                                <span className="checkbox__text">Organize events</span>
                                            </label>
                                        </div>

                                        <div className="objective-step__checkbox-item checkbox">
                                            <input
                                                id="c_10"
                                                data-error="error"
                                                className="checkbox__input"
                                                type="checkbox"
                                                value="10"
                                                name="objective"
                                            />
                                            <label htmlFor="c_10" className="checkbox__label">
                                                <div className="checkbox__img">
                                                    <img
                                                        src="@img/objectives/raise.png"
                                                        alt="Raise funding Icon"
                                                    />
                                                </div>
                                                <svg
                                                    width="19"
                                                    height="15"
                                                    className="checkbox__icon"
                                                    viewBox="0 0 19 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M2 6.73684L7.17241 12L17 2"
                                                        stroke="white"
                                                        strokeWidth="3"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                                <span className="checkbox__text">Raise funding</span>
                                            </label>
                                        </div>
                                        <div className="objective-step__checkbox-item checkbox">
                                            <input
                                                id="c_11"
                                                data-error="error"
                                                className="checkbox__input"
                                                type="checkbox"
                                                value="11"
                                                name="objective"
                                            />
                                            <label htmlFor="c_11" className="checkbox__label">
                                                <div className="checkbox__img">
                                                    <img
                                                        src="@img/objectives/cofounder.png/"
                                                        alt="Find a cofounder Icon"
                                                    />
                                                </div>
                                                <svg
                                                    width="19"
                                                    height="15"
                                                    className="checkbox__icon"
                                                    viewBox="0 0 19 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M2 6.73684L7.17241 12L17 2"
                                                        stroke="white"
                                                        strokeWidth="3"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                                <span className="checkbox__text">Find a cofounder</span>
                                            </label>
                                        </div>
                                        <div className="objective-step__checkbox-item checkbox">
                                            <input
                                                id="c_12"
                                                data-error="error"
                                                className="checkbox__input"
                                                type="checkbox"
                                                value="12"
                                                name="objective"
                                            />
                                            <label htmlFor="c_12" className="checkbox__label">
                                                <div className="checkbox__img">
                                                    <img
                                                        src="@img/objectives/people.png/"
                                                        alt="Meet intresting people Icon"
                                                    />
                                                </div>
                                                <svg
                                                    width="19"
                                                    height="15"
                                                    className="checkbox__icon"
                                                    viewBox="0 0 19 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M2 6.73684L7.17241 12L17 2"
                                                        stroke="white"
                                                        strokeWidth="3"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                                <span className="checkbox__text">Meet intresting people</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form__step profile-step">
                                <div className="profile-step__top top">
                                    <h3 className="top__title title">Fill Your Profile</h3>
                                    <div className="top__text text">
                                        This basic information will be shown to your matches every week. Tell
                                        us what you would like to show!
                                    </div>
                                </div>
                                <div className="profile-step__body">
                                    <label className="profile-step__file">
                                        <input type="file" className="profile-step__file-input" />
                                        <div className="profile-step__image">
                                            <img src="@img/icons/gallery.svg" alt="Gallery Icon" />
                                        </div>
                                        <div className="profile-step__file-text">Upload Your Photo</div>
                                    </label>
                                    <div className="profile-step__inputs">
                                        <div className="profile-step__label label">Other Profile</div>
                                        <div className="profile-step__form input-form">
                                            <div className="input-form__icon input-icon">
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="#747887"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M5.78341 4.16668C5.78319 4.6087 5.60738 5.03254 5.29466 5.34494C4.98195 5.65735 4.55793 5.83273 4.11591 5.83251C3.67388 5.83229 3.25004 5.65648 2.93764 5.34377C2.62524 5.03105 2.44985 4.60704 2.45007 4.16501C2.45029 3.72298 2.6261 3.29915 2.93882 2.98674C3.25153 2.67434 3.67555 2.49896 4.11757 2.49918C4.5596 2.4994 4.98344 2.6752 5.29584 2.98792C5.60825 3.30064 5.78363 3.72465 5.78341 4.16668ZM5.83341 7.06668H2.50007V17.5H5.83341V7.06668ZM11.1001 7.06668H7.78341V17.5H11.0667V12.025C11.0667 8.97501 15.0417 8.69168 15.0417 12.025V17.5H18.3334V10.8917C18.3334 5.75001 12.4501 5.94168 11.0667 8.46668L11.1001 7.06668Z" />
                                                </svg>
                                            </div>
                                            <input
                                                autoComplete="off"
                                                type="text"
                                                name="LinkedIn URL"
                                                data-error="Please, type your hub"
                                                placeholder="LinkedIn URL"
                                                className="input-form__input input"
                                            />
                                        </div>
                                        <div className="profile-step__form input-form">
                                            <div className="input-form__icon input-icon">
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="#747887"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M18.4683 4.71333C17.8321 4.99474 17.1574 5.17956 16.4666 5.26167C17.1947 4.82619 17.7397 4.14085 17.9999 3.33333C17.3166 3.74 16.5674 4.025 15.7866 4.17917C15.2621 3.61798 14.5669 3.2458 13.809 3.12049C13.0512 2.99517 12.2732 3.12374 11.596 3.48621C10.9187 3.84868 10.3802 4.42474 10.0642 5.12483C9.74812 5.82492 9.67221 6.60982 9.84825 7.3575C8.46251 7.28805 7.10686 6.92794 5.86933 6.30055C4.63179 5.67317 3.54003 4.79254 2.66492 3.71583C2.35516 4.24788 2.19238 4.85269 2.19326 5.46833C2.19326 6.67667 2.80826 7.74417 3.74326 8.36917C3.18993 8.35175 2.64878 8.20232 2.16492 7.93333V7.97667C2.16509 8.78142 2.44356 9.56135 2.95313 10.1842C3.46269 10.8071 4.17199 11.2346 4.96075 11.3942C4.4471 11.5334 3.90851 11.5539 3.38576 11.4542C3.60814 12.1469 4.04159 12.7527 4.62541 13.1868C5.20924 13.6209 5.9142 13.8615 6.64159 13.875C5.91866 14.4428 5.0909 14.8625 4.20566 15.1101C3.32041 15.3578 2.39503 15.4285 1.48242 15.3183C3.0755 16.3429 4.93 16.8868 6.82409 16.885C13.2349 16.885 16.7408 11.5742 16.7408 6.96833C16.7408 6.81833 16.7366 6.66667 16.7299 6.51833C17.4123 6.02514 18.0013 5.41418 18.4691 4.71417L18.4683 4.71333Z" />
                                                </svg>
                                            </div>
                                            <input
                                                autoComplete="off"
                                                type="text"
                                                name="Twitter URL"
                                                data-error="Please, type your hub"
                                                placeholder="Twitter URL"
                                                className="input-form__input input"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form__step intrested-step">
                                <div className="intrested-step__top top">
                                    <h3 className="top__title title">What Are You Interested In?</h3>
                                    <div className="top__text text">
                                        Select from the list and add your own interests.
                                    </div>
                                    <div className="top__input input-form">
                                        <div className="input-form__icon input-icon">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="#747887"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M9.58329 18.125C4.87496 18.125 1.04163 14.2916 1.04163 9.58329C1.04163 4.87496 4.87496 1.04163 9.58329 1.04163C14.2916 1.04163 18.125 4.87496 18.125 9.58329C18.125 14.2916 14.2916 18.125 9.58329 18.125ZM9.58329 2.29163C5.55829 2.29163 2.29163 5.56663 2.29163 9.58329C2.29163 13.6 5.55829 16.875 9.58329 16.875C13.6083 16.875 16.875 13.6 16.875 9.58329C16.875 5.56663 13.6083 2.29163 9.58329 2.29163Z" />
                                                <path d="M18.3333 18.9583C18.175 18.9583 18.0166 18.9 17.8916 18.775L16.225 17.1083C15.9833 16.8666 15.9833 16.4666 16.225 16.225C16.4666 15.9833 16.8666 15.9833 17.1083 16.225L18.775 17.8916C19.0166 18.1333 19.0166 18.5333 18.775 18.775C18.65 18.9 18.4916 18.9583 18.3333 18.9583Z" />
                                            </svg>
                                        </div>
                                        <input
                                            autoComplete="off"
                                            type="text"
                                            name="interests"
                                            data-error="Please, type your hub"
                                            placeholder="Add Your Interest"
                                            className="input-form__input input"
                                        />
                                    </div>
                                </div>
                                <div className="intrested-step__body">
                                    <div className="intrested-step__row">
                                        <div className="intrested-step__label label">Business</div>
                                        <div className="intrested-step__elements">
                                            <label className="intrested-step__item">
                                                <input
                                                    type="checkbox"
                                                    name="business"
                                                    className="intrested-step__checkbox"
                                                />
                                                <div className="intrested-step__checkbox-text">
                                                    Enterpreneurship
                                                </div>
                                            </label>
                                            <label className="intrested-step__item">
                                                <input
                                                    type="checkbox"
                                                    name="business"
                                                    className="intrested-step__checkbox"
                                                />
                                                <div className="intrested-step__checkbox-text">Marketing</div>
                                            </label>
                                            <label className="intrested-step__item">
                                                <input
                                                    type="checkbox"
                                                    name="business"
                                                    className="intrested-step__checkbox"
                                                />
                                                <div className="intrested-step__checkbox-text">Sales</div>
                                            </label>
                                            <label className="intrested-step__item">
                                                <input
                                                    type="checkbox"
                                                    name="business"
                                                    className="intrested-step__checkbox"
                                                />
                                                <div className="intrested-step__checkbox-text">
                                                    Consulting
                                                </div>
                                            </label>
                                            <label className="intrested-step__item">
                                                <input
                                                    type="checkbox"
                                                    name="business"
                                                    className="intrested-step__checkbox"
                                                />
                                                <div className="intrested-step__checkbox-text">
                                                    E-commerce
                                                </div>
                                            </label>
                                            <label className="intrested-step__item">
                                                <input
                                                    type="checkbox"
                                                    name="business"
                                                    className="intrested-step__checkbox"
                                                />
                                                <div className="intrested-step__checkbox-text">Retail</div>
                                            </label>
                                            <label className="intrested-step__item">
                                                <input
                                                    type="checkbox"
                                                    name="business"
                                                    className="intrested-step__checkbox"
                                                />
                                                <div className="intrested-step__checkbox-text">
                                                    Real Estate
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="intrested-step__row">
                                        <div className="intrested-step__label label">Investing & Finance</div>
                                        <div className="intrested-step__elements">
                                            <label className="intrested-step__item">
                                                <input
                                                    type="checkbox"
                                                    name="business"
                                                    className="intrested-step__checkbox"
                                                />
                                                <div className="intrested-step__checkbox-text">
                                                    Angle Investing
                                                </div>
                                            </label>
                                            <label className="intrested-step__item">
                                                <input
                                                    type="checkbox"
                                                    name="business"
                                                    className="intrested-step__checkbox"
                                                />
                                                <div className="intrested-step__checkbox-text">Crypto</div>
                                            </label>
                                            <label className="intrested-step__item">
                                                <input
                                                    type="checkbox"
                                                    name="business"
                                                    className="intrested-step__checkbox"
                                                />
                                                <div className="intrested-step__checkbox-text">
                                                    Quant Finance
                                                </div>
                                            </label>
                                            <label className="intrested-step__item">
                                                <input
                                                    type="checkbox"
                                                    name="business"
                                                    className="intrested-step__checkbox"
                                                />
                                                <div className="intrested-step__checkbox-text">
                                                    Venture Capital
                                                </div>
                                            </label>
                                            <label className="intrested-step__item">
                                                <input
                                                    type="checkbox"
                                                    name="business"
                                                    className="intrested-step__checkbox"
                                                />
                                                <div className="intrested-step__checkbox-text">
                                                    Investment Banking
                                                </div>
                                            </label>
                                            <label className="intrested-step__item">
                                                <input
                                                    type="checkbox"
                                                    name="business"
                                                    className="intrested-step__checkbox"
                                                />
                                                <div className="intrested-step__checkbox-text">Economics</div>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="intrested-step__row">
                                        <div className="intrested-step__label label">Lifestyle</div>
                                        <div className="intrested-step__elements">
                                            <label className="intrested-step__item">
                                                <input
                                                    type="checkbox"
                                                    name="business"
                                                    className="intrested-step__checkbox"
                                                />
                                                <div className="intrested-step__checkbox-text">Travel</div>
                                            </label>
                                            <label className="intrested-step__item">
                                                <input
                                                    type="checkbox"
                                                    name="business"
                                                    className="intrested-step__checkbox"
                                                />
                                                <div className="intrested-step__checkbox-text">Fitness</div>
                                            </label>
                                            <label className="intrested-step__item">
                                                <input
                                                    type="checkbox"
                                                    name="business"
                                                    className="intrested-step__checkbox"
                                                />
                                                <div className="intrested-step__checkbox-text">Food</div>
                                            </label>
                                            <label className="intrested-step__item">
                                                <input
                                                    type="checkbox"
                                                    name="business"
                                                    className="intrested-step__checkbox"
                                                />
                                                <div className="intrested-step__checkbox-text">Gaming</div>
                                            </label>
                                            <label className="intrested-step__item">
                                                <input
                                                    type="checkbox"
                                                    name="business"
                                                    className="intrested-step__checkbox"
                                                />
                                                <div className="intrested-step__checkbox-text">Writing</div>
                                            </label>
                                            <label className="intrested-step__item">
                                                <input
                                                    type="checkbox"
                                                    name="business"
                                                    className="intrested-step__checkbox"
                                                />
                                                <div className="intrested-step__checkbox-text">Reading</div>
                                            </label>
                                            <label className="intrested-step__item">
                                                <input
                                                    type="checkbox"
                                                    name="business"
                                                    className="intrested-step__checkbox"
                                                />
                                                <div className="intrested-step__checkbox-text">
                                                    Dinner Parties
                                                </div>
                                            </label>
                                            <label className="intrested-step__item">
                                                <input
                                                    type="checkbox"
                                                    name="business"
                                                    className="intrested-step__checkbox"
                                                />
                                                <div className="intrested-step__checkbox-text">Poker</div>
                                            </label>
                                            <label className="intrested-step__item">
                                                <input
                                                    type="checkbox"
                                                    name="business"
                                                    className="intrested-step__checkbox"
                                                />
                                                <div className="intrested-step__checkbox-text">Chess</div>
                                            </label>
                                            <label className="intrested-step__item">
                                                <input
                                                    type="checkbox"
                                                    name="business"
                                                    className="intrested-step__checkbox"
                                                />
                                                <div className="intrested-step__checkbox-text">Cooking</div>
                                            </label>
                                            <label className="intrested-step__item">
                                                <input
                                                    type="checkbox"
                                                    name="business"
                                                    className="intrested-step__checkbox"
                                                />
                                                <div className="intrested-step__checkbox-text">Wellness</div>
                                            </label>
                                            <label className="intrested-step__item">
                                                <input
                                                    type="checkbox"
                                                    name="business"
                                                    className="intrested-step__checkbox"
                                                />
                                                <div className="intrested-step__checkbox-text">Parenting</div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form__step about-step">
                                <div className="about-step__top top">
                                    <h3 className="top__title title">Tell Us About Your Self</h3>
                                    <div className="top__text text">
                                        Select from the list and add your own interests.
                                    </div>
                                </div>
                                <div className="about-step__body">
                                    <div className="about-step__input input-form">
                                        <div className="input-form__icon input-icon">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="#747887"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10 10.6251C7.35834 10.6251 5.20834 8.47508 5.20834 5.83341C5.20834 3.19175 7.35834 1.04175 10 1.04175C12.6417 1.04175 14.7917 3.19175 14.7917 5.83341C14.7917 8.47508 12.6417 10.6251 10 10.6251ZM10 2.29175C8.05001 2.29175 6.45834 3.88341 6.45834 5.83341C6.45834 7.78341 8.05001 9.37508 10 9.37508C11.95 9.37508 13.5417 7.78341 13.5417 5.83341C13.5417 3.88341 11.95 2.29175 10 2.29175Z" />
                                                <path d="M17.1585 18.9583C16.8168 18.9583 16.5335 18.675 16.5335 18.3333C16.5335 15.4583 13.6001 13.125 10.0001 13.125C6.40013 13.125 3.4668 15.4583 3.4668 18.3333C3.4668 18.675 3.18346 18.9583 2.8418 18.9583C2.50013 18.9583 2.2168 18.675 2.2168 18.3333C2.2168 14.775 5.70846 11.875 10.0001 11.875C14.2918 11.875 17.7835 14.775 17.7835 18.3333C17.7835 18.675 17.5001 18.9583 17.1585 18.9583Z" />
                                            </svg>
                                        </div>
                                        <input
                                            autoComplete="off"
                                            type="text"
                                            name="interests"
                                            data-error="Please, type your hub"
                                            placeholder="First Name"
                                            className="input-form__input input"
                                        />
                                    </div>
                                    <div className="about-step__input input-form">
                                        <div className="input-form__icon input-icon">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="#747887"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10 10.6251C7.35834 10.6251 5.20834 8.47508 5.20834 5.83341C5.20834 3.19175 7.35834 1.04175 10 1.04175C12.6417 1.04175 14.7917 3.19175 14.7917 5.83341C14.7917 8.47508 12.6417 10.6251 10 10.6251ZM10 2.29175C8.05001 2.29175 6.45834 3.88341 6.45834 5.83341C6.45834 7.78341 8.05001 9.37508 10 9.37508C11.95 9.37508 13.5417 7.78341 13.5417 5.83341C13.5417 3.88341 11.95 2.29175 10 2.29175Z" />
                                                <path d="M17.1585 18.9583C16.8168 18.9583 16.5335 18.675 16.5335 18.3333C16.5335 15.4583 13.6001 13.125 10.0001 13.125C6.40013 13.125 3.4668 15.4583 3.4668 18.3333C3.4668 18.675 3.18346 18.9583 2.8418 18.9583C2.50013 18.9583 2.2168 18.675 2.2168 18.3333C2.2168 14.775 5.70846 11.875 10.0001 11.875C14.2918 11.875 17.7835 14.775 17.7835 18.3333C17.7835 18.675 17.5001 18.9583 17.1585 18.9583Z" />
                                            </svg>
                                        </div>
                                        <input
                                            autoComplete="off"
                                            type="text"
                                            name="interests"
                                            data-error="Please, type your hub"
                                            placeholder="Last Name"
                                            className="input-form__input input"
                                        />
                                    </div>
                                    <div className="about-step__textarea input-form">
                                        <textarea
                                            autoComplete="off"
                                            name="interests"
                                            data-error="Please, type your hub"
                                            placeholder="About Your Self"
                                            className="input-form__input input"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form__finish finish-step">
                            <div className="finish-step__image">
                                <img src="@img/google.png" alt="Google Logo" />
                            </div>
                            <h3 className="finish-step__title title">Finish Your Registration</h3>
                            <div className="finish-step__text text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </div>
                            <div className="finish-step__label label">Why Connect My Google Account?</div>
                            <div className="finish-step__text text">
                                <p>
                                    Your contact and calendar data helps us schedule meetings and ensure that
                                    your matches are relevant (not matching you with people you already know,
                                    for instance).
                                </p>
                                <p>
                                    We’re serious about your privacy and will never share your private data
                                    with other users or third parties without your consent.
                                </p>
                            </div>
                            <button type="submit" className="finish-step__button button">
                                <svg
                                    width=" 24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M3.064 7.51C3.89601 5.85324 5.17237 4.46051 6.75043 3.48747C8.32849 2.51443 10.1461 1.99942 12 2C14.695 2 16.959 2.99 18.69 4.605L15.823 7.473C14.786 6.482 13.468 5.977 12 5.977C9.395 5.977 7.19 7.737 6.405 10.1C6.205 10.7 6.091 11.34 6.091 12C6.091 12.66 6.205 13.3 6.405 13.9C7.191 16.264 9.395 18.023 12 18.023C13.345 18.023 14.49 17.668 15.386 17.068C15.9054 16.726 16.3501 16.2822 16.6932 15.7635C17.0363 15.2448 17.2706 14.6619 17.382 14.05H12V10.182H21.418C21.536 10.836 21.6 11.518 21.6 12.227C21.6 15.273 20.51 17.837 18.618 19.577C16.964 21.105 14.7 22 12 22C10.6866 22.0005 9.38604 21.7422 8.17254 21.2399C6.95905 20.7375 5.85645 20.0009 4.92776 19.0722C3.99907 18.1436 3.2625 17.041 2.76013 15.8275C2.25777 14.614 1.99948 13.3134 2 12C2 10.386 2.386 8.86 3.064 7.51Z" />
                                </svg>
                                Finish Sign Up With Google
                            </button>
                        </div>
                    </form>

                    <div className="form-page__buttons buttons">
                        <a
                            href="#"
                            id="prev"
                            className="form__button button button_outline"
                            data-goto=".wrapper"
                        >
                            Back
                        </a>
                        <a href="#" data-goto=".wrapper" id="next" className="form__button button">
                            Next
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegistrationPage;
