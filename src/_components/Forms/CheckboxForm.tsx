import { Field, FieldProps } from "formik";
import { FC, ReactNode } from "react";

interface CheckboxProps {
    name: string;
    value: string;
    children: ReactNode;
    className?: string;
    id: string;
}

const Checkbox: FC<CheckboxProps> = ({ id, name, value, children, className }) => {
    return (
        <div className={`${className || ""} checkbox`}>
            <Field name={name}>
                {({ field }: FieldProps) => (
                    <input
                        id={id}
                        {...field}
                        className="checkbox__input"
                        type="checkbox"
                        value={value}
                        name={name}
                    />
                )}
            </Field>

            <label htmlFor={id} className="checkbox__label">
                {children}
            </label>
        </div>
    );
};

export default Checkbox;
