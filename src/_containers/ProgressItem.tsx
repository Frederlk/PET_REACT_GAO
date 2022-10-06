import { FC } from "react";
import { useAppSelector } from "../hooks/useRedux";

const ProgressItem: FC<{ icon: string; step: number }> = ({ icon, step }) => {
    const { stepIndex } = useAppSelector((state) => state.steps);

    return <div className={`progress__step ${icon} ${stepIndex >= step ? "_active" : ""}`}></div>;
};

export default ProgressItem;
