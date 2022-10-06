import { FC, useMemo, useEffect, Fragment } from "react";
import { FinalStep, Progress } from ".";
import { Formik, Form as FormikForm } from "formik";
import { steps } from "../constants/data";
import { useAppSelector } from "../hooks/useRedux";

interface IInitialValues {
    hub: string;
    searchHub: string;
    objectives: string[];
    profilePic: string;
    linkedInUrl: string;
    twitterUrl: string;
    interests: string[];
}

const initialValues: IInitialValues = {
    hub: "",
    searchHub: "",
    objectives: [],
    profilePic: "",
    linkedInUrl: "",
    twitterUrl: "",
    interests: [],
};

const Form: FC = () => {
    const stepsItems = useMemo(
        () => steps.map(({ component }, i) => <Fragment key={i}>{component}</Fragment>),
        [steps]
    );
    const { stepIndex } = useAppSelector((state) => state.steps);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [stepIndex]);

    return (
        <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                resetForm();
            }}
        >
            <FormikForm className="form-page__form form">
                <Progress />

                {stepsItems}

                <FinalStep />
            </FormikForm>
        </Formik>
    );
};

export default Form;
