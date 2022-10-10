import { FC, useEffect } from "react";
import { Picture } from "../../_components";

import { defaultImages } from "../../constants/images";
import { Link } from "react-router-dom";
import { RouteNames } from "../../routes";

const { google, google_WEBP } = defaultImages;

const FinalStep: FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="final">
            <div className="final__image">
                <Picture srcWebp={google_WEBP} fallbackSrc={google} alt="Logo" />
            </div>
            <h3 className="final__title title">Finish Your Registration</h3>
            <p className="final__text text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
            </p>
            <div className="final__label label">Why Connect My Google Account?</div>
            <div className="final__text text">
                <p>
                    Your contact and calendar data helps us schedule meetings and ensure that your matches are
                    relevant (not matching you with people you already know, for instance).
                </p>
                <p>
                    We’re serious about your privacy and will never share your private data with other users
                    or third parties without your consent.
                </p>
            </div>
            <Link to={RouteNames.HOME} className="final__button button _icon-google">
                Finish Sign Up With Google
            </Link>
        </div>
    );
};

export default FinalStep;
