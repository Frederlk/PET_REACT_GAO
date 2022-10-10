import { FieldHookConfig, useField } from "formik";
import { FC, ReactNode } from "react";

interface RadioButtonProps {
    children: ReactNode;
    className?: string;
}

const RadioButton: FC<RadioButtonProps & FieldHookConfig<string>> = ({ children, className, ...props }) => {
    const [field] = useField({ ...props, type: "radio" });

    return (
        <label className={`${className || ""} option`}>
            <input type="radio" className="option__input" {...field} />
            <div className="option__label">{children}</div>
        </label>
    );
};

export default RadioButton;
