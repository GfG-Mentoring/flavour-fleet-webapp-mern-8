import { Card, CardBody, CardFooter } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Star } from "lucide-react";

type RestaurantCardProps = {
  name: string;
  avg_price_per_person: number;
  cuisines: string[];
  avg_rating: number;
  hero_image: string;
  eta: string;
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
          src={item.hero_image}
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
            {item.avg_rating}
          </Chip>
        </div>
        <div className="flex text-xs justify-between w-full">
          <p>{item.cuisines.join(", ")}</p>
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
