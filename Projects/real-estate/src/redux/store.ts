import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Define a RootState type
export type RootState = ReturnType<typeof store.getState>;

export default store;