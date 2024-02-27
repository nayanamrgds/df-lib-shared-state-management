import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './store/counterSlice'

export const sharedStore = configureStore({
  reducer: counterReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof sharedStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof sharedStore.dispatch;