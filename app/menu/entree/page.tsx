import Card from "@/app/components/card";


const entrees = [
  
   
  {
    id: 1,
    name: "Chicken Teriyaki",
    description: "Grilled chicken with teriyaki sauce",
    price: 16.95,
    image: "../static/items/entrees/ChickenTeriyaki.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Beef Teriyaki",
    description: "Grilled beef with teriyaki sauce",
    price: 19.95,
    image: "../static/items/entrees/BeefTeriyaki.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Salmon Teriyaki",
    description: "Grilled salmon with teriyaki sauce",
    price: 19.95,
    image: "../static/items/entrees/SalmonTeriyaki.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Don Katsu",
    description:
      "Deep fried breaded pork or chicken. Includes miso soup, salad, and rice.",
    price: 16.95,
    image: "../static/items/entrees/donKatsu.jpg",
    largeImage: "",
  },

  {
    id: 5,
    name: "Chicken Don",
    description: "Chicken teriyaki over rice. Includes miso soup.",
    price: 12.95,
    image: "../static/items/entrees/ChickenBowl.jpg",
    largeImage: "",
  },
  {
    id: 6,
    name: "Beef Don",
    description:
      "Grilled beef with teriyaki sauce over rice. Includes miso soup.",
    price: 14.95,
    image: "../static/items/entrees/BeefBowl.jpg",
    largeImage: "",
  },
  
  {
    id: 7,
    name: "Beef Teppanyaki",
    description:
      "Grilled tender stripe with vegetables over rice. Includes miso soup.",
    price: 18.95,
    image: "../static/items/entrees/BeefTeppanyaki.jpg",
    largeImage: "",
  },
  {
    id: 8,
    name: "Chicken Teppanyaki",
    description:
      "Grilled chicken with vegetables over rice. Includes miso soup.",
    price: 15.95,
    image: "../static/items/entrees/ChickenTeppanyaki.jpg",
    largeImage: "",
  },
  {
    id: 9,
    name: "Garlic Shrimp",
    description:
      "Sauteed jumbo shrimp with garlic includes miso soup, salad, and rice.",
    price: 25.95,
    image: "../static/items/entrees/GarlicShrimp.jpg",
    largeImage: "",
  },
  {
    id: 10,
    name: "Bulgogi",
    description:
      "Korean style marinated slices of beef with vegetables over rice. Includes miso soup.",
    price: 16.95,
    image: "../static/items/entrees/bulgogi.jpg",
    largeImage: "",
  },
  {
    id: 11,
    name: "Beef Galbi (Korean BBQ)",
    description:
      "grilled tender marinated beef short ribs on hibachi. Includes miso soup and rice.",
    price: 27.95,
    image: "../static/items/entrees/KBBQ.jpg",
    largeImage: "",
  },
];

export default function Entree() {
   return (
      <div>
        <p className="text-xl font-black m-2 pb-5">Entrée</p>
        <div className="grid grid-cols-1 grid-rows-5 gap-4 w-auto lg:grid-cols-2">
          {entrees.map((item) => (
            <div key={item.id}>
              <Card
                itemName={{ text: `${item.name}` }}
                itemDescription={{ text: `${item.description}` }}
                itemPrice={item.price}
                itemImage={{ image: `${item.image}` }}
              ></Card>
            </div>
          ))}
        </div>
      </div>
    );
}
