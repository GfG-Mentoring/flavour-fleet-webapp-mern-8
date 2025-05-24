import { Button } from "@heroui/button";
import { LocateFixed } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const GpsLocation = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      //   success callback
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      //   error callback
      (error) => {
        setLocation({
          latitude: null,
          longitude: null,
          error: error.message,
        });
        if (error.PERMISSION_DENIED) {
          toast.error("Please allow location access in your browser settings.");
        } else if (error.POSITION_UNAVAILABLE) {
          toast.error("Location information is unavailable.");
        } else {
          toast.error("An error occurred while retrieving your location");
        }
      },
    );
  }, []);

  console.log("Current Location:", location);

  return (
    <Button isIconOnly size="sm">
      <LocateFixed size={16} />
    </Button>
  );
};

export default GpsLocation;
