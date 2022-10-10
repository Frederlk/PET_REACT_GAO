import { FC, useMemo, useEffect, Fragment, createContext } from "react";
import { Progress, Buttons } from ".";
import { Formik, Form as FormikForm } from "formik";
import { steps } from "../constants/data";
import { useAppSelector } from "../hooks/useRedux";
import { array, object, string } from "yup";
import { urlRegex } from "../constants/regs";
import { IUser } from "../models/models";
import { useActions } from "../hooks";

const initialValues: IUser = {
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
    hub: string().required("Select your Hub"),
    objectives: array().min(1, "Select at least 1 objective").max(3, "Select up tp 3 objectives"),
    interests: array().min(1, "Select at least 1 interest").max(10, "Select up to 10 interests"),
    linkedInUrl: string().matches(urlRegex, "URL is not valid"),
    twitterUrl: string().matches(urlRegex, "URL is not valid"),
    firstName: string()
        .min(2, "Should be 2 chars minimum")
        .max(25, "Should be 25 chars max")
        .required("First Name is required"),
    lastName: string()
        .min(2, "Should be 2 chars minimum")
        .max(25, "Should be 25 chars max")
        .required("Last Name is required"),
});

export const FormContext = createContext<any>(null);

function onKeyDown(e: any) {
    if (e.key === "Enter") {
        e.preventDefault();
    }
}

const Form: FC = () => {
    const stepsItems = useMemo(
        () => steps.map(({ component }, i) => <Fragment key={i}>{component}</Fragment>),
        [steps]
    );
    const { stepIndex } = useAppSelector((state) => state.steps);
    const { setUser } = useActions();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [stepIndex]);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values);
                setUser(values);
            }}
        >
            {({ setFieldValue, errors, touched }) => (
                <FormContext.Provider value={{ setFieldValue, errors, touched }}>
                    <FormikForm onKeyDown={onKeyDown} className="form-page__form form">
                        <Progress />

                        {stepsItems}

                        <Buttons />
                    </FormikForm>
                </FormContext.Provider>
            )}
        </Formik>
    );
};

export default Form;
