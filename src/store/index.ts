import { configureStore, combineReducers } from "@reduxjs/toolkit";
import tradeLane from "./tradeLane/tradeLaneSlice";

const appReducer = combineReducers({
  tradeLane,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
