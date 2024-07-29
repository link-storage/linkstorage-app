import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loadingSlice from "@/src/context/global/slice/loadingSlice";
import authSlice from "@/src/context/global/slice/authSlice";
import modalSlice from "@/src/context/global/slice/modalSlice";
import appSlice from "@/src/context/global/slice/appSlice";

const rootReducer = combineReducers({
  loading: loadingSlice,
  auth: authSlice,
  modal: modalSlice,
  app: appSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
