import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/models";

interface userState {
    user: IUser | null;
    isAuth: boolean;
}

const initialState: userState = {
    user: null,
    isAuth: false,
};

export const userSlice = createSlice({
    name: "@@user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        },
    },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
