import { FC, useMemo, useEffect, Fragment, createContext } from "react";
import { FinalStep, Progress } from ".";
import { Formik, Form as FormikForm } from "formik";
import { steps } from "../constants/data";
import { useAppSelector } from "../hooks/useRedux";
import { object, string } from "yup";
import { urlRegex } from "../constants/regs";

interface IInitialValues {
    hub: string;
    objectives: string[];
    profilePic: string;
    linkedInUrl: string;
    twitterUrl: string;
    interests: string[];
    firstName: string;
    lastName: string;
    about: string;
}

const initialValues: IInitialValues = {
    hub: "",
    objectives: [],
    profilePic: "",
    linkedInUrl: "",
    twitterUrl: "",
    interests: [],
    firstName: "",
    lastName: "",
    about: "",
};

const validationSchema = object().shape({
    linkedInUrl: string().matches(urlRegex, "URL is not valid"),
    twitterUrl: string().matches(urlRegex, "URL is not valid"),
});

export const FormContext = createContext<any>(null);

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
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                console.log(values);
            }}
        >
            {({ values, handleSubmit, setFieldValue }) => (
                <FormContext.Provider value={setFieldValue}>
                    <FormikForm className="form-page__form form">
                        <Progress />

                        {stepsItems}

                        <FinalStep />
                    </FormikForm>
                </FormContext.Provider>
            )}
        </Formik>
    );
};

export default Form;
