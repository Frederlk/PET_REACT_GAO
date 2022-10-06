import { FieldHookConfig, useField } from "formik";
import { FC, ReactNode } from "react";

interface RadioButtonProps {
    children: ReactNode;
    className?: string;
}

const RadioButton: FC<RadioButtonProps & FieldHookConfig<string>> = ({ children, className, ...props }) => {
    const [field] = useField({ ...props, type: "radio" });

    return (
        <div className={`${className || ""} option`}>
            <input hidden id={field.value} type="radio" className="option__input" {...field} />
            <label className="option__label" tabIndex={0} htmlFor={field.value}>
                {children}
            </label>
        </div>
    );
};

export default RadioButton;
