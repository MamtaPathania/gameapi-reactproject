// store.js

import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './Slice';

const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

export default store;



// import { configureStore } from "@reduxjs/toolkit";
// import Reducer from "./Slice"
// export const store=configureStore({
//     reducer:{
// game:Reducer
//     }
// })