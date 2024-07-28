import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/src/context/global/store';

interface ILoadingState {}

const initialState: ILoadingState = {};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {},
});

export default loadingSlice.reducer;
