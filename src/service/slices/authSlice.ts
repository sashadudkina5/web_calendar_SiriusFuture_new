import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, loginPaylpad, UserInfo } from "../types";

const initialState: AuthState = {
  isAuthenticated: false,
  error: null,
  userInfo: null,
  scheduleInfo: [],
  extraUserInfo: [],
  selectedSubjects: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<loginPaylpad>) {
      state.isAuthenticated = true;
      state.error = null;
      state.userInfo = action.payload.userInfo;
      state.extraUserInfo = action.payload.extraUserInfo;
      state.scheduleInfo = action.payload.scheduleInfo;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    logout(state) {
      Object.assign(state, initialState);
    },
    toggleUser(state, action: PayloadAction<UserInfo>) {
      state.isAuthenticated = true;
      state.userInfo = action.payload;
      state.extraUserInfo = [action.payload];
    },
    setSelectedSubject(state, action: PayloadAction<string>) {
      state.selectedSubjects = action.payload;
    },
  },
});

export const { loginSuccess, loginFailure, logout, setSelectedSubject } =
  authSlice.actions;

export default authSlice.reducer;
