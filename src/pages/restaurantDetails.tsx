import { Chip } from "@heroui/chip";
import { Input } from "@heroui/input";
import { Star } from "lucide-react";
import { useParams } from "react-router-dom";

import DefaultLayout from "@/layouts/default";

const RestaurantDetailsPage = () => {
  const { id } = useParams();

  const restaurantDetails = {
    name: "The Great Pizza",
    avg_price_per_person: 15,
    total_ratings: 250,
    cuisines: ["Italian", "Pizza"],
    avg_rating: 4.5,
    hero_image: "/food-options/pizza.avif",
    eta: "30 min",
  };

  const foodItems = [
    {
      src: "/food-options/pizza.avif",
      name: "Margherita Pizza",
      price: "$12.99",
      description:
        "Classic delight with fresh basil, mozzarella cheese, and tomatoes.",
      is_non_veg: false,
    },
    {
      src: "/food-options/pizza.avif",
      name: "Pepperoni Pizza",
      price: "$14.99",
      description: "Spicy pepperoni with melty cheese topping.",
      is_non_veg: true,
    },
    {
      src: "/food-options/pizza.avif",
      name: "Veggie Delight",
      price: "$11.99",
      description: "A colorful mix of bell peppers, onions, and olives.",
      is_non_veg: false,
    },
    {
      src: "/food-options/pizza.avif",
      name: "BBQ Chicken Pizza",
      price: "$15.99",
      description: "Topped with BBQ chicken, red onions, and cilantro.",
      is_non_veg: true,
    },
    {
      src: "/food-options/pizza.avif",
      name: "Hawaiian Pizza",
      price: "$13.99",
      description: "Ham and pineapple with a twist of cheese.",
      is_non_veg: true,
    },
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col lg:mx-auto max-w-5xl">
        <h1 className="text-2xl">{restaurantDetails.name}</h1>
        <div className="w-72 h-32 rounded-lg shadow-md border-content1-foreground border-1 p-4 space-y-4">
          <div className="flex gap-2">
            <Chip
              color="success"
              endContent={<Star size={12} />}
              size="sm"
              variant="flat"
            >
              {restaurantDetails.avg_rating}
            </Chip>
            ({restaurantDetails.total_ratings} total ratings)
            <p>&middot;</p>
            <p>{restaurantDetails.avg_price_per_person} for one</p>
          </div>
          <div className="flex gap-4">
            <p>{restaurantDetails.cuisines.join(", ")}</p>
            <p>{restaurantDetails.eta}</p>
          </div>
        </div>

        <section className="my-8 space-y-8">
          <div>
            <Input placeholder="Search for food." type="search" />

            <h2 className="text-xl mb-2">Menu</h2>
          </div>

          {foodItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-row-reverse justify-between gap-4 my-2 items-center"
            >
              <img
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
                src={item.src}
              />
              <div>
                <h3 className="text-lg">
                  {item.name} {item.is_non_veg ? "(Non-Veg)" : "(Veg)"}
                </h3>
                <p>{item.description}</p>
                <p className="font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </section>
      </section>
    </DefaultLayout>
  );
};

export default RestaurantDetailsPage;
