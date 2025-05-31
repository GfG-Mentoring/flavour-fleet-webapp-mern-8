import { createSlice } from '@reduxjs/toolkit';

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: {
    currentLocation: null,
    restaurantsList: [],
  },
  reducers: {
    addRestaurants: (state, action) => {
      return { ...state, restaurantsList: action.payload };
    },
    updateCurrentLocation: (state, action) => {
      return {
        ...state,
        currentLocation: {
          ...action.payload,
        },
      };
    },
  },
});

export const { addRestaurants, updateCurrentLocation } =
  restaurantsSlice.actions;
export default restaurantsSlice.reducer;
