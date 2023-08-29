import { configureStore } from '@reduxjs/toolkit'
import heroReducer from './HeroesList/HeroesList'
import LikedSectionSlice from './likedSection/LikedSectionSlice'

export const store = configureStore({
  reducer: {
    heroes: heroReducer,
    likedSection: LikedSectionSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch