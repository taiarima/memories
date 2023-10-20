import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../main";

type State = {
  loggedIn: boolean;
  username: string;
  settings: number[];
};

export const initialState: State = {
  loggedIn: false,
  username: "",
  settings: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state, { payload }) => {
      state.loggedIn = true;
      state.username = payload.username;
    },
    logOut: (state) => {
      state.loggedIn = false;
      state.username = "";
    },
  },
});

// Export Actions
export const { logIn, logOut } = userSlice.actions;

// Export Selector:
// export const userSelector = (state: RootState) => state.user;
export const userSelector = (state: RootState) => {
  return state.user;
};

// Export reducer
export default userSlice.reducer;
