import { FC } from "react";
import { stepsNames } from "../../constants/data";
import { useAppSelector } from "../../hooks/useRedux";

const AboutStep: FC = () => {
    const { step } = useAppSelector((state) => state.steps);

    return (
        <div className={`form__step about-step ${step === stepsNames.ABOUT ? "_active" : ""}`}>
            <div className="about-step__top top">
                <h3 className="top__title title">Tell Us About Your Self</h3>
                <p className="top__text text">Select from the list and add your own interests.</p>
            </div>
            <div className="about-step__body">
                <div className="about-step__input input-form">
                    <div className="input-form__icon input-icon _icon-search"></div>
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
    );
};

export default AboutStep;
