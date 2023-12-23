import { configureStore } from "@reduxjs/toolkit";
// ...
import favorite from "./favorite";
import projects from "./projects";
export const store = configureStore({
  reducer: {
    favorite,
    projects,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
