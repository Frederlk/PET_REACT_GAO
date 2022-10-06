import { FC } from "react";
import { Link } from "react-router-dom";

import { defaultImages } from "../constants/images";
import { RouteNames } from "../routes";

const { logo } = defaultImages;

const Logo: FC = () => {
    return (
        <Link to={RouteNames.HOME} className="logo">
            <img src={logo} alt="GAO Logo" />
        </Link>
    );
};

export default Logo;
