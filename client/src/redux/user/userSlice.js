import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    signOutStart: (state, action) => {},
    signOutSucess: (state, action) => {
      state.currentUser = null;
      state.loading = null;
      state.error = null;
    },
    signOutFail: (state, action) => {},
  },
});

export const {
  signInFail,
  signInStart,
  signInSuccess,
  signOutFail,
  signOutStart,
  signOutSucess,
} = userSlice.actions;

export default userSlice.reducer;
