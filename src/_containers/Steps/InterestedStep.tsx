import { useCallback, useContext, useMemo, useState } from "react";
import { stepsNames } from "../../constants/data";
import { useAppSelector } from "../../hooks/useRedux";
import { formAPI } from "../../services/formAPI";
import { Spinner } from "../../_components";
import { Field } from "formik";
import { FormContext } from "../Form";

const InterestedStep = () => {
    const { step } = useAppSelector((state) => state.steps);
    const { isLoading, data: interests } = formAPI.useGetDataQuery("interests");
    const [userInterests, setUserInterests] = useState<string[]>([]);
    const { errors, touched } = useContext(FormContext);

    const interestItems = useCallback(
        (cat: string) => {
            return interests?.map(({ text, category }: { text: string; category: string }, i: number) => {
                if (category === cat) {
                    return (
                        <label key={category + i} className="intrested-step__item">
                            <Field
                                type="checkbox"
                                name="interests"
                                value={text}
                                className="intrested-step__checkbox"
                            />
                            <div className="intrested-step__checkbox-text">{text}</div>
                        </label>
                    );
                }
            });
        },
        [interests]
    );

    const userInterestItems = useMemo(() => {
        return userInterests?.map((text: string, i: number) => (
            <label key={"other" + i} className="intrested-step__item">
                <Field type="checkbox" name="interests" value={text} className="intrested-step__checkbox" />
                <div className="intrested-step__checkbox-text">{text}</div>
            </label>
        ));
    }, [userInterests]);

    const onHandleAdd = (e: any) => {
        if (e.key === "Enter" && e.target.value.length > 0) {
            setUserInterests((prev) => [...prev, e.target.value]);
        }
    };

    return (
        <div className={`step intrested-step ${step === stepsNames.INTERESTS ? "_active" : ""}`}>
            <div className="top">
                <h3 className="title">What Are You Interested In?</h3>
                <p className="text">Select from the list and add your own interests.</p>
                {errors.interests && touched.interests && (
                    <div className="_form-error">{errors.interests}</div>
                )}
                <div className="top__input input-form _icon-search">
                    <input
                        autoComplete="off"
                        name="addInterest"
                        placeholder="Add Your Interest"
                        className="input-form__input input"
                        onKeyDown={onHandleAdd}
                    />
                </div>
            </div>
            {isLoading ? (
                <Spinner />
            ) : (
                <div className="intrested-step__body">
                    {userInterests.length > 0 && (
                        <div className="intrested-step__row">
                            <div className="intrested-step__label label">Other</div>
                            <div className="intrested-step__elements">{userInterestItems}</div>
                        </div>
                    )}

                    <div className="intrested-step__row">
                        <div className="intrested-step__label label">Business</div>
                        <div className="intrested-step__elements">{interestItems("business")}</div>
                    </div>

                    <div className="intrested-step__row">
                        <div className="intrested-step__label label">Investing & Finance</div>
                        <div className="intrested-step__elements">{interestItems("finance")}</div>
                    </div>

                    <div className="intrested-step__row">
                        <div className="intrested-step__label label">Lifestyle</div>
                        <div className="intrested-step__elements">{interestItems("lifestyle")}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InterestedStep;
