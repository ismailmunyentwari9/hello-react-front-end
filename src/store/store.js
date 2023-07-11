import { configureStore } from '@reduxjs/toolkit';
import greetings from './features/greetings/greetingsSlice';

const store = configureStore({
  reducer: {
    greeting: greetings.reducer,
  },
});
export default store;
