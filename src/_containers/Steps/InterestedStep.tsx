import React from "react";
import { stepsNames } from "../../constants/data";
import { useAppSelector } from "../../hooks/useRedux";

const InterestedStep = () => {
    const { step } = useAppSelector((state) => state.steps);

    return (
        <div className={`form__step intrested-step ${step === stepsNames.INTERESTS ? "_active" : ""}`}>
            <div className="intrested-step__top top">
                <h3 className="top__title title">What Are You Interested In?</h3>
                <div className="top__text text">Select from the list and add your own interests.</div>
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
                            <input type="checkbox" name="business" className="intrested-step__checkbox" />
                            <div className="intrested-step__checkbox-text">Enterpreneurship</div>
                        </label>
                        <label className="intrested-step__item">
                            <input type="checkbox" name="business" className="intrested-step__checkbox" />
                            <div className="intrested-step__checkbox-text">Marketing</div>
                        </label>
                        <label className="intrested-step__item">
                            <input type="checkbox" name="business" className="intrested-step__checkbox" />
                            <div className="intrested-step__checkbox-text">Sales</div>
                        </label>
                        <label className="intrested-step__item">
                            <input type="checkbox" name="business" className="intrested-step__checkbox" />
                            <div className="intrested-step__checkbox-text">Consulting</div>
                        </label>
                        <label className="intrested-step__item">
                            <input type="checkbox" name="business" className="intrested-step__checkbox" />
                            <div className="intrested-step__checkbox-text">E-commerce</div>
                        </label>
                        <label className="intrested-step__item">
                            <input type="checkbox" name="business" className="intrested-step__checkbox" />
                            <div className="intrested-step__checkbox-text">Retail</div>
                        </label>
                        <label className="intrested-step__item">
                            <input type="checkbox" name="business" className="intrested-step__checkbox" />
                            <div className="intrested-step__checkbox-text">Real Estate</div>
                        </label>
                    </div>
                </div>

                <div className="intrested-step__row">
                    <div className="intrested-step__label label">Investing & Finance</div>
                    <div className="intrested-step__elements">
                        <label className="intrested-step__item">
                            <input type="checkbox" name="business" className="intrested-step__checkbox" />
                            <div className="intrested-step__checkbox-text">Angle Investing</div>
                        </label>
                        <label className="intrested-step__item">
                            <input type="checkbox" name="business" className="intrested-step__checkbox" />
                            <div className="intrested-step__checkbox-text">Crypto</div>
                        </label>
                        <label className="intrested-step__item">
                            <input type="checkbox" name="business" className="intrested-step__checkbox" />
                            <div className="intrested-step__checkbox-text">Quant Finance</div>
                        </label>
                        <label className="intrested-step__item">
                            <input type="checkbox" name="business" className="intrested-step__checkbox" />
                            <div className="intrested-step__checkbox-text">Venture Capital</div>
                        </label>
                        <label className="intrested-step__item">
                            <input type="checkbox" name="business" className="intrested-step__checkbox" />
                            <div className="intrested-step__checkbox-text">Investment Banking</div>
                        </label>
                        <label className="intrested-step__item">
                            <input type="checkbox" name="business" className="intrested-step__checkbox" />
                            <div className="intrested-step__checkbox-text">Economics</div>
                        </label>
                    </div>
                </div>

                <div className="intrested-step__row">
                    <div className="intrested-step__label label">Lifestyle</div>
                    <div className="intrested-step__elements">
                        <label className="intrested-step__item">
                            <input type="checkbox" name="business" className="intrested-step__checkbox" />
                            <div className="intrested-step__checkbox-text">Travel</div>
                        </label>
                        <label className="intrested-step__item">
                            <input type="checkbox" name="business" className="intrested-step__checkbox" />
                            <div className="intrested-step__checkbox-text">Fitness</div>
                        </label>
                        <label className="intrested-step__item">
                            <input type="checkbox" name="business" className="intrested-step__checkbox" />
                            <div className="intrested-step__checkbox-text">Food</div>
                        </label>
                        <label className="intrested-step__item">
                            <input type="checkbox" name="business" className="intrested-step__checkbox" />
                            <div className="intrested-step__checkbox-text">Gaming</div>
                        </label>
                        <label className="intrested-step__item">
                            <input type="checkbox" name="business" className="intrested-step__checkbox" />
                            <div className="intrested-step__checkbox-text">Writing</div>
                        </label>
                        <label className="intrested-step__item">
                            <input type="checkbox" name="business" className="intrested-step__checkbox" />
                            <div className="intrested-step__checkbox-text">Reading</div>
                        </label>
                        <label className="intrested-step__item">
                            <input type="checkbox" name="business" className="intrested-step__checkbox" />
                            <div className="intrested-step__checkbox-text">Dinner Parties</div>
                        </label>
                        <label className="intrested-step__item">
                            <input type="checkbox" name="business" className="intrested-step__checkbox" />
                            <div className="intrested-step__checkbox-text">Poker</div>
                        </label>
                        <label className="intrested-step__item">
                            <input type="checkbox" name="business" className="intrested-step__checkbox" />
                            <div className="intrested-step__checkbox-text">Chess</div>
                        </label>
                        <label className="intrested-step__item">
                            <input type="checkbox" name="business" className="intrested-step__checkbox" />
                            <div className="intrested-step__checkbox-text">Cooking</div>
                        </label>
                        <label className="intrested-step__item">
                            <input type="checkbox" name="business" className="intrested-step__checkbox" />
                            <div className="intrested-step__checkbox-text">Wellness</div>
                        </label>
                        <label className="intrested-step__item">
                            <input type="checkbox" name="business" className="intrested-step__checkbox" />
                            <div className="intrested-step__checkbox-text">Parenting</div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InterestedStep;
