import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IRegister {
  currentStep: number;
  clientType: string;
}

const initialState: IRegister = {
  currentStep: 0,
  clientType: "1",
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    changeStep: (state, action: PayloadAction<number>) => {
      state.currentStep += action.payload;
    },
    setRegisterClientType: (state, action: PayloadAction<string>) => {
      state.clientType = action.payload;
    },
  },
});

export const { changeStep, setRegisterClientType } = registerSlice.actions;

export default registerSlice.reducer;
