import {configureStore} from "@reduxjs/toolkit";
import loaderSlice from "./slices/loader";

const store = configureStore({
  reducer: {
    loaderSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
