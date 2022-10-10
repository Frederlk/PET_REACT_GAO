import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { formAPI } from "../services/formAPI";

import { stepsReducer } from "./slices/steps/steps.slice";
import { userReducer } from "./user/user.slice";

const rootReducer = combineReducers({
    steps: stepsReducer,
    user: userReducer,
    [formAPI.reducerPath]: formAPI.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(formAPI.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
