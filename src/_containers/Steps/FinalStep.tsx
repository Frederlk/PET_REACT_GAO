import { FC } from "react";
import { Picture } from "../../_components";

import { defaultImages } from "../../constants/images";

const { google, google_WEBP } = defaultImages;

const FinalStep: FC = () => {
    return (
        <div className="form__finish finish-step">
            <div className="finish-step__image">
                <Picture srcWebp={google_WEBP} fallbackSrc={google} alt="Logo" />
            </div>
            <h3 className="finish-step__title title">Finish Your Registration</h3>
            <p className="finish-step__text text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
            </p>
            <div className="finish-step__label label">Why Connect My Google Account?</div>
            <div className="finish-step__text text">
                <p>
                    Your contact and calendar data helps us schedule meetings and ensure that your matches are
                    relevant (not matching you with people you already know, for instance).
                </p>
                <p>
                    We’re serious about your privacy and will never share your private data with other users
                    or third parties without your consent.
                </p>
            </div>
            <button type="submit" className="finish-step__button button _icon-google">
                Finish Sign Up With Google
            </button>
        </div>
    );
};

export default FinalStep;
