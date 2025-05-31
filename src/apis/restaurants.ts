import { axiosInstance } from '.';

export const getRestaurantsFromDb = async (
  longitude: number,
  latitude: number
) => {
  const data = await axiosInstance.get('/restaurants', {
    params: {
      longitude,
      latitude,
    },
  });
  return data.data.restaurants;
};
