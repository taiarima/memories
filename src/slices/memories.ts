import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { fetchMemories } from "../api";

type Memory = {
  id: number;
  categoryEmoji: string;
  entryText: string;
  date: string;
};

type State = {
  loading: boolean;
  hasErrors: boolean;
  memories: Memory[];
};

export const initialState = {
  loading: false,
  hasErrors: false,
  memories: [],
};

const postsSlice = createSlice({
  name: "memories",
  initialState,
  reducers: {
    getMemories: (state) => {
      state.loading = true;
    },
    getMemoriesSuccess: (state, { payload }) => {
      state.memories = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getMemoriesFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// Three actions generated from the slice
export const { getMemories, getMemoriesSuccess, getMemoriesFailure } =
  postsSlice.actions;

// A selector
export const postsSelector = (state: State) => state.memories;

// The reducer
export default postsSlice.reducer;

// Asynchronous thunk action
export function fetchMemoryDispatch() {
  return async (dispatch: Dispatch) => {
    dispatch(getMemories());

    fetchMemories();
  };
}
