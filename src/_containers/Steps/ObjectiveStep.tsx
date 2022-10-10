import { FC, useContext, useMemo } from "react";
import { stepsNames } from "../../constants/data";
import { useAppSelector } from "../../hooks/useRedux";
import { formAPI } from "../../services/formAPI";
import { CheckboxForm, Picture, Spinner } from "../../_components";
import { FormContext } from "../Form";

const ObjectiveStep: FC = () => {
    const { step } = useAppSelector((state) => state.steps);

    const { isLoading, data: objectives } = formAPI.useGetDataQuery("objectives");
    const { errors, touched } = useContext(FormContext);

    const objectiveItems = useMemo(() => {
        return objectives?.map(
            ({ img, webp, title }: { img: string; webp: string; title: string }, i: number) => (
                <CheckboxForm
                    key={title + i}
                    name="objectives"
                    className="objective-step__checkbox-item"
                    id={"objectives" + i}
                    value={title}
                >
                    <div className="checkbox__img">
                        <Picture srcWebp={webp} fallbackSrc={img} alt={title} />
                    </div>
                    <span className="checkbox__text">{title}</span>
                    <span className="checkbox__icon _icon-tick"></span>
                </CheckboxForm>
            )
        );
    }, [objectives]);

    return (
        <div className={`step ${step === stepsNames.OBJECTIVES ? "_active" : ""}`}>
            <div className="top">
                <h3 className="title">What Are Your Objectives?</h3>
                <p className="text">
                    Select up to 3 objectives. These will be kept private from other users but help us find
                    relevant matches.
                </p>
                {errors.objectives && touched.objectives && (
                    <div className="_form-error">{errors.objectives}</div>
                )}
            </div>
            <div className="label">Select Objectives</div>
            <div className="grid">{isLoading ? <Spinner /> : objectiveItems}</div>
        </div>
    );
};

export default ObjectiveStep;
