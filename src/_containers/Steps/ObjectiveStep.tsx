import { FC } from "react";
import { stepsNames } from "../../constants/data";
import { useAppSelector } from "../../hooks/useRedux";

const ObjectiveStep: FC = () => {
    const { step } = useAppSelector((state) => state.steps);

    return (
        <div className={`form__step objective-step ${step === stepsNames.OBJECTIVES ? "_active" : ""}`}>
            <div className="objective-step__top top">
                <h3 className="top__title title">What Are Your Objectives?</h3>
                <div className="top__text text">
                    Select up to 3 objectives. These will be kept private from other users but help us find
                    relevant matches.
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
                                <img src="@img/objectives/brain.png/" alt="Brainstorm with peers Icon" />
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
                                <img src="@img/objectives/team.png" alt="Grow your team Icon" />
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
                                <img src="@img/objectives/company.png/" alt="Start a company Icon" />
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
                                <img src="@img/objectives/planet.png/" alt="Explore other companies Icon" />
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
                            <span className="checkbox__text">Explore other companies</span>
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
                                <img src="@img/objectives/rocket.png/" alt="Business development Icon" />
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
                                <img src="@img/objectives/time.png/" alt="Explore new projects Icon" />
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
                                <img src="@img/objectives/mentor.png" alt="Mentor others Icon" />
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
                                <img src="@img/objectives/events.png/" alt="Organize events Icon" />
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
                                <img src="@img/objectives/raise.png" alt="Raise funding Icon" />
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
                                <img src="@img/objectives/cofounder.png/" alt="Find a cofounder Icon" />
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
                                <img src="@img/objectives/people.png/" alt="Meet intresting people Icon" />
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
    );
};

export default ObjectiveStep;
