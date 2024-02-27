import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './store/counterSlice'

export const sharedStore = configureStore({
  reducer: counterReducer,
});


export type RootState = ReturnType<typeof sharedStore.getState>;
export type AppDispatch = typeof sharedStore.dispatch;