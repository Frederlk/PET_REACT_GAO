import { createSlice } from "@reduxjs/toolkit";
import { steps } from "../../../constants/data";

interface stepsState {
    stepIndex: number;
    step: string;
}

const initialState: stepsState = {
    stepIndex: 0,
    step: steps[0].step,
};

export const stepsSlice = createSlice({
    name: "@@steps",
    initialState,
    reducers: {
        nextStep: (state) => {
            state.stepIndex = state.stepIndex + 1;
            state.step = steps[state.stepIndex].step;
        },
        prevStep: (state) => {
            state.stepIndex = state.stepIndex - 1;
            state.step = steps[state.stepIndex].step;
        },
    },
});

export const stepsActions = stepsSlice.actions;
export const stepsReducer = stepsSlice.reducer;
