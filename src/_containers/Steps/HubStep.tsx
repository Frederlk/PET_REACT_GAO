import { FC, useMemo, memo } from "react";
import { stepsNames } from "../../constants/data";
import { useAppSelector } from "../../hooks/useRedux";
import { IHub } from "../../models/models";
import { formAPI } from "../../services/formAPI";
import { Picture, RadioButton, Spinner } from "../../_components";
import Search from "../HubSearch";

const HubStep: FC = () => {
    const { step } = useAppSelector((state) => state.steps);
    const { isLoading, data: hubs } = formAPI.useGetDataQuery("hub");

    const hubsItems = useMemo(() => {
        return hubs?.map(({ img, webp, title, popular }: IHub, i: number) => {
            if (popular) {
                return (
                    <RadioButton key={title + i} name="hub" value={title}>
                        <span className="option__text">{title}</span>
                        <div className="option__img">
                            <Picture srcWebp={webp || img} fallbackSrc={img} alt={title} />
                        </div>
                    </RadioButton>
                );
            }
        });
    }, [hubs]);

    return (
        <div className={`form__step ${step === stepsNames.HUB ? "_active" : ""}`}>
            <div className="top">
                <h3 className="title">Which Hub Are You In?</h3>
                <p className="text">
                    We are active in major cities and we schedule meetings based on time zones. Let us know
                    your home base.
                </p>
                <Search hubs={hubs} />
            </div>
            <div className="label">Popular Hub</div>
            <div className="grid">{isLoading ? <Spinner /> : hubsItems}</div>
        </div>
    );
};

export default memo(HubStep);
