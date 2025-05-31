import { updateCurrentLocation } from '@/reducers/restaurants';
import { Button } from '@heroui/button';
import { LocateFixed } from 'lucide-react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const GpsLocation = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      //   success callback
      (position) => {
        dispatch(
          updateCurrentLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          })
        );
      },
      //   error callback
      (error) => {
        dispatch(
          updateCurrentLocation({
            latitude: null,
            longitude: null,
            error: error.message,
          })
        );
        if (error.PERMISSION_DENIED) {
          toast.error('Please allow location access in your browser settings.');
        } else if (error.POSITION_UNAVAILABLE) {
          toast.error('Location information is unavailable.');
        } else {
          toast.error('An error occurred while retrieving your location');
        }
      }
    );
  }, []);


  return (
    <Button isIconOnly size="sm">
      <LocateFixed size={16} />
    </Button>
  );
};

export default GpsLocation;
