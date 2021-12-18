import { configureStore } from '@reduxjs/toolkit';
import cityListReducer from "../features/citySlice";


export const store = configureStore({
  reducer: {
    cityList: cityListReducer
    
  },
});
