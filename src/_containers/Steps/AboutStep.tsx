import { FC } from "react";
import { stepsNames } from "../../constants/data";
import { useAppSelector } from "../../hooks/useRedux";
import { Input } from "../../_components";

const AboutStep: FC = () => {
    const { step } = useAppSelector((state) => state.steps);

    return (
        <div className={`form__step about-step ${step === stepsNames.ABOUT ? "_active" : ""}`}>
            <div className="about-step__top top">
                <h3 className="top__title title">Tell Us About Your Self</h3>
                <p className="top__text text">Select from the list and add your own interests.</p>
            </div>
            <div className="about-step__body">
                <div className="about-step__input input-form  _icon-user">
                    <Input
                        autoComplete="off"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="input-form__input"
                    />
                </div>
                <div className="about-step__input input-form _icon-user">
                    <Input
                        autoComplete="off"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="input-form__input"
                    />
                </div>
                <div className="about-step__textarea input-form">
                    <Input
                        textarea
                        autoComplete="off"
                        type="text"
                        name="about"
                        placeholder="About Your Self"
                        className="input-form__input"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutStep;
