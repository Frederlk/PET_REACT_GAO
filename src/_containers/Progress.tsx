import { FC, useRef, useEffect, useMemo } from "react";
import { steps } from "../constants/data";
import { useAppSelector } from "../hooks/useRedux";
import ProgressItem from "./ProgressItem";

const Progress: FC = () => {
    const progressLine = useRef<HTMLDivElement>(null);

    const { stepIndex } = useAppSelector((state) => state.steps);

    useEffect(() => {
        if (progressLine.current) {
            progressLine.current.style.width = (stepIndex / (steps.length - 1)) * 100 + "%";
        }
    }, [stepIndex]);

    const progressItems = useMemo(
        () => steps.map(({ step, icon }, i) => <ProgressItem key={step + i} icon={icon} step={i} />),
        [steps]
    );

    return (
        <div className="progress">
            {progressItems}
            <div className="progress__line">
                <div ref={progressLine} className="progress__line_success"></div>
            </div>
        </div>
    );
};

export default Progress;
