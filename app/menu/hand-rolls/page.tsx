import Card from "@/app/components/card";

const NoImage = "../static/items/NoImageTemaki.jpg";

const handRolls = [
  {
    id: 1,
    name: "Baked Crab (Hand roll)",
    description: "baked blue crab, masago, green onions",
    price: "9.95",
    image: "../static/items/handRolls/BakedCrabHandRoll.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Lobster (Hand Roll)",
    description: "lobster, avocado, green onions",
    price: "11.95",
    image: "../static/items/handRolls/LobsterHandRoll.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "LBJ (Hand Roll)",
    description: "shrimp tempura, avocado, masago, green onions",
    price: "11.95",
    image: "../static/items/handRolls/LBJ.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Shrimp Tempura (Hand Roll)",
    description: "shrimp tempura, avocado, crabmeat",
    price: "9.95",
    image: "../static/items/handRolls/ShrimpTempuraHandRoll.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "California (Hand Roll)",
    description: "1 piece",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 6,
    name: "Spicy Tuna (Hand Roll)",
    description: "1 piece",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 7,
    name: "Albacore (Hand Roll)",
    description: "1 piece",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 8,
    name: "Avocado (Hand Roll)",
    description: "1 piece",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 9,
    name: "Crab (Hand Roll)",
    description: "1 piece",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },

  {
    id: 10,
    name: "Cucumber (Hand Roll)",
    description: "1 piece",
    price: "3.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 11,
    name: "Eel (Hand Roll)",
    description: "1 piece",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 12,
    name: "Salmon (Hand Roll)",
    description: "1 piece",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 13,
    name: "Salmon Skin (Hand Roll)",
    description: "1 piece",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 14,
    name: "Scallop (Hand Roll)",
    description: "1 piece",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 15,
    name: "Shrimp & Crab (Hand Roll)",
    description: "1 piece",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 16,
    name: "Tuna (Hand Roll)",
    description: "1 piece",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 17,
    name: "Vegetable (Hand Roll)",
    description: "1 piece",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 18,
    name: "Yellowtail (Hand Roll)",
    description: "1 piece",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 19,
    name: "Philadelphia (Hand Roll)",
    description: "1 piece",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },
];

export default function HandRolls() {
  return (
    <div>
      <p className="text-xl font-black m-2 pb-5">Hand Rolls</p>
      <div className="grid grid-cols-1 grid-rows-5 gap-4 w-auto lg:grid-cols-2">
        {handRolls.map((item) => (
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
