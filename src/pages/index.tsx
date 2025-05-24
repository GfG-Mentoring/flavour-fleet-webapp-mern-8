import RestaurantCard from "@/components/Cards";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  const foodOptions = [
    {
      name: "Pizza",
      src: "/food-options/pizza.avif",
    },
    {
      name: "Burger",
      src: "/food-options/burger.avif",
    },
    {
      name: "North Indian",
      src: "/food-options/north-indian.avif",
    },
    {
      name: "South Indian",
      src: "/food-options/south-indian.avif",
    },
    {
      name: "Biryani",
      src: "/food-options/biryani.avif",
    },
    {
      name: "Rolls",
      src: "/food-options/rolls.avif",
    },
    {
      name: "Desserts",
      src: "/food-options/ice-cream.avif",
    },
  ];

  const nearestRestaurants = [
    {
      name: "The Great Pizza",
      avg_price_per_person: 15,
      cuisines: ["Italian", "Pizza"],
      avg_rating: 4.5,
      hero_image: "/food-options/pizza.avif",
      eta: "30 min",
    },
    {
      name: "Burger Bonanza",
      avg_price_per_person: 10,
      cuisines: ["American", "Fast Food"],
      avg_rating: 4.2,
      hero_image: "/food-options/burger.avif",
      eta: "25 min",
    },
    {
      name: "Sushi Supreme",
      avg_price_per_person: 20,
      cuisines: ["Japanese", "Sushi"],
      avg_rating: 4.8,
      hero_image: "/food-options/rolls.avif",
      eta: "35 min",
    },
    {
      name: "Curry Corner",
      avg_price_per_person: 12,
      cuisines: ["Indian", "Curry"],
      avg_rating: 4.4,
      hero_image: "/food-options/north-indian.avif",
      eta: "30 min",
    },
    {
      name: "Pasta Palace",
      avg_price_per_person: 18,
      cuisines: ["Italian", "Pasta"],
      avg_rating: 4.6,
      hero_image: "/food-options/pizza.avif",
      eta: "28 min",
    },
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 mx-auto">
        <div className="text-left space-y-4">
          <h2 className="font-semibold text-2xl">
            Inspiration for your first order
          </h2>
          <div className="flex gap-3">
            {foodOptions.map((food) => (
              <div key={food.src} className="text-center space-y-2">
                <img
                  alt={`${food.name}`}
                  className="w-32 h-32 rounded-full"
                  src={food.src}
                />
                <p>{food.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-left space-y-4">
          <h2 className="font-semibold text-2xl">Top brands for you</h2>
          <div className="flex gap-3">
            {foodOptions.map((food) => (
              <div key={food.src} className="text-center space-y-2">
                <img
                  alt={`${food.name}`}
                  className="w-32 h-32 rounded-full"
                  src={food.src}
                />
                <p>{food.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4 text-left lg:ml-32">
          <h2 className="text-2xl font-semibold">Nearest restaurants,</h2>
          <div className="flex gap-8 flex-wrap">
            {nearestRestaurants.map((r) => (
              <RestaurantCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
