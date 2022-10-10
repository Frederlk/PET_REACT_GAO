import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { stepsActions } from "../store/slices/steps/steps.slice";
import { userActions } from "../store/user/user.slice";

const actions = {
    ...stepsActions,
    ...userActions,
};

const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};

export default useActions;
