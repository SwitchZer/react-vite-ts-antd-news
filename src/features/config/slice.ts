import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IConfigState {
  isDark: boolean;
  title: string;
}

const initialState: IConfigState = {
  isDark: window.localStorage.getItem("isDark") === "true" || false,
  title: "Aplikasi Berita",
};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      window.localStorage.setItem("isDark", JSON.stringify(!state.isDark));
      state.isDark = !state.isDark;
    },
    setAppTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const { toggleTheme, setAppTitle } = configSlice.actions;

export default configSlice.reducer;
