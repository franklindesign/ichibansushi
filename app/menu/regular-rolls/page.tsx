import Card from "@/app/components/card";

const NoImage = "/static/items/NoImageSushiRoll.jpg";

const regularRolls = [
  {
    id: 1,
    name: "California (Cut Roll)",
    description: "6-8 pieces",
    price: "6.50",
    image: "/static/items/maki/california.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Spicy Tuna (Cut Roll)",
    description: "6-8 pieces",
    price: "7.50",
    image: "/static/items/maki/spicytuna.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Albacore (Cut Roll)",
    description: "6-8 pieces",
    price: "6.50",
    image: "/static/items/maki/albacore.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Avocado (Cut Roll)",
    description: "6-8 pieces",
    price: "6.50",
    image: "/static/items/maki/avocado.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "Crab (Cut Roll)",
    description: "6-8 pieces",
    price: "6.50",
    image: "/static/items/maki/crab.jpg",
    largeImage: "",
  },

  {
    id: 6,
    name: "Cucumber (Cut Roll)",
    description: "6-8 pieces",
    price: "4.50",
    image: "/static/items/maki/cucumber.jpg",
    largeImage: "",
  },
  {
    id: 7,
    name: "Eel (Cut Roll)",
    description: "6-8 pieces",
    price: "7.50",
    image: "/static/items/maki/eel.jpg",
    largeImage: "",
  },
  {
    id: 8,
    name: "Salmon (Cut Roll)",
    description: "6-8 pieces",
    price: "7.50",
    image: "/static/items/maki/salmon.jpg",
    largeImage: "",
  },
  {
    id: 9,
    name: "Salmon Skin (Cut Roll)",
    description: "6-8 pieces",
    price: "6.50",
    image: "/static/items/maki/salmonskin.jpg",
    largeImage: "",
  },
  {
    id: 10,
    name: "Scallop (Cut Roll)",
    description: "6-8 pieces",
    price: "6.50",
    image: "/static/items/maki/scallop.jpg",
    largeImage: "",
  },
  {
    id: 11,
    name: "Shrimp & Crab (Cut Roll)",
    description: "6-8 pieces",
    price: "6.50",
    image: "/static/items/maki/shrimpcrab.jpg",
    largeImage: "",
  },
  {
    id: 12,
    name: "Tuna (Cut Roll)",
    description: "6-8 pieces",
    price: "7.50",
    image: "/static/items/maki/tuna.jpg",
    largeImage: "",
  },
  {
    id: 13,
    name: "Vegetable (Cut Roll)",
    description: "6-8 pieces",
    price: "6.50",
    image: "/static/items/maki/vegetable.jpg",
    largeImage: "",
  },
  {
    id: 14,
    name: "Yellowtail (Cut Roll)",
    description: "6-8 pieces",
    price: "7.50",
    image: "/static/items/maki/yellowtail.jpg",
    largeImage: "",
  },
  {
    id: 15,
    name: "Philadelphia (Cut Roll)",
    description: "6-8 pieces",
    price: "7.50",
    image: "/static/items/maki/philadelphia.jpg",
    largeImage: "",
  },
];


export default function RegularRolls() {
   return (
              <div>
                <p className="text-xl font-black m-2 pb-2">Maki</p>
                <p className="px-4 pb-5 text-sm">Makizushi or regular cut rolls</p>
                <div className="grid grid-cols-1 grid-rows-5 gap-4 w-auto lg:grid-cols-2">
                  {regularRolls.map((item) => (
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
