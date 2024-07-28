import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/src/context/global/store';

interface IAppState {
  theme: 'Light' | 'Dark';
  language: 'kr' | 'en';
}

const initialState: IAppState = {
  theme: 'Light',
  language: 'kr',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    SET_THEME: (state, action) => {
      const { theme } = action.payload;

      state.theme = theme;
    },
    SET_LANGUAGE: (state, action) => {
      const { language } = action.payload;

      state.language = language;
    },
    INIT_APP: (state) => {
      state.theme = 'Light';
      state.language = 'kr';
    },
  },
});

export const { SET_THEME, SET_LANGUAGE, INIT_APP } = appSlice.actions;

export const getTheme = (state: RootState) => state.app.theme;
export const getLanguage = (state: RootState) => state.app.language;

export default appSlice.reducer;
