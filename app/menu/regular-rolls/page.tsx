import Card from "@/app/components/card";

const NoImage = "../static/items/NoImageSushiRoll.jpg";

const regularRolls = [
  {
    id: 1,
    name: "California (Cut Roll)",
    description: "6-8 pieces",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 2,
    name: "Spicy Tuna (Cut Roll)",
    description: "6-8 pieces",
    price: "7.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 3,
    name: "Albacore (Cut Roll)",
    description: "6-8 pieces",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 4,
    name: "Avocado (Cut Roll)",
    description: "6-8 pieces",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 5,
    name: "Crab (Cut Roll)",
    description: "6-8 pieces",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },

  {
    id: 6,
    name: "Cucumber (Cut Roll)",
    description: "6-8 pieces",
    price: "4.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 7,
    name: "Eel (Cut Roll)",
    description: "6-8 pieces",
    price: "7.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 8,
    name: "Salmon (Cut Roll)",
    description: "6-8 pieces",
    price: "7.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 9,
    name: "Salmon Skin (Cut Roll)",
    description: "6-8 pieces",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 10,
    name: "Scallop (Cut Roll)",
    description: "6-8 pieces",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 11,
    name: "Shrimp & Crab (Cut Roll)",
    description: "6-8 pieces",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 12,
    name: "Tuna (Cut Roll)",
    description: "6-8 pieces",
    price: "7.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 13,
    name: "Vegetable (Cut Roll)",
    description: "6-8 pieces",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 14,
    name: "Yellowtail (Cut Roll)",
    description: "6-8 pieces",
    price: "7.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 15,
    name: "Philadelphia (Cut Roll)",
    description: "6-8 pieces",
    price: "7.50",
    image: NoImage,
    largeImage: "",
  },
];


export default function RegularRolls() {
   return (
              <div>
                <p className="text-xl font-black m-2 pb-5">Regular Cut Rolls</p>
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
