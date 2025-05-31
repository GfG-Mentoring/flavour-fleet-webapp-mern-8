import { Card, CardBody, CardFooter } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Star } from "lucide-react";

type FoodItem = {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  available: boolean;
};

export type RestaurantCardProps = {
  // Original _id field is renamed to id for component usage.
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  // A hero image URL – add your image source here.
  imageUrl: string;
  // Converted rating becomes avg_rating.
  rating: number;
  // The original "cuisine" field is transformed into a cuisines array.
  cuisines: string;
  // Add a field for average price per person.
  avg_price_per_person: number;
  // Estimated time of arrival.
  eta: string;
  // Location data remains unchanged.
  location: {
    type: "Point";
    coordinates: [number, number];
  };
  foodItems: FoodItem[];
  __v: number;
  deliveryAvailable: boolean;
};

const RestaurantCard = (item: RestaurantCardProps) => {
  return (
    <Card
      key={item.id ?? item.name}
      isPressable
      className="min-w-72"
      shadow="sm"
      onPress={() => console.log("item pressed")}
    >
      <CardBody className="overflow-visible p-0">
        <img
          alt={item.name}
          className="w-full object-cover h-[140px]"
          src={item.imageUrl}
          width="100%"
        />
      </CardBody>
      <CardFooter className="text-small flex-col w-full">
        <div className="flex justify-between w-full items-center">
          <b className="text-xl">{item.name}</b>
          <Chip
            color="success"
            endContent={<Star size={12} />}
            size="sm"
            variant="flat"
          >
            {item.rating}
          </Chip>
        </div>
        <div className="flex text-xs justify-between w-full">
          <p>{item.cuisines}</p>
          <p className="text-default-500">{item.avg_price_per_person}</p>
        </div>
        <div className="flex justify-between w-full text-xs">
          <p>{item.eta}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RestaurantCard;
