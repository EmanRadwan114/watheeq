import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ILogin {
  clientType: string;
}

const initialState: ILogin = {
  clientType: "1",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginClientType: (state, action: PayloadAction<string>) => {
      state.clientType = action.payload;
    },
  },
});

export const { setLoginClientType } = loginSlice.actions;

export default loginSlice.reducer;
