import { FC } from "react";
import { steps } from "../constants/data";
import { useActions } from "../hooks";
import { useAppSelector } from "../hooks/useRedux";

const Buttons: FC = () => {
    const { nextStep, prevStep } = useActions();
    const { stepIndex } = useAppSelector((state) => state.steps);

    const onHandlePrev = () => {
        prevStep();
    };

    const onHandleNext = () => {
        if (stepIndex !== steps.length - 1) {
            nextStep();
        }
    };

    return (
        <div className="buttons">
            {stepIndex > 0 && (
                <button type="button" className="form__button button button_outline" onClick={onHandlePrev}>
                    Back
                </button>
            )}
            <button type="button" onClick={onHandleNext} className="form__button button">
                Next
            </button>
        </div>
    );
};

export default Buttons;
