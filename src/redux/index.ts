import { configureStore } from "@reduxjs/toolkit";

import CreateProfileReducer from "./slices/createProfile";
import createPassReducer from "./pass/createPass";
import createNameReducer from "./Name/nameList";

export const store = configureStore({
  reducer: {
    createProfile: CreateProfileReducer,
    createPass: createPassReducer,
    nameList: createNameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
