import Card from "@/app/components/card";

const inari = [
  {
    id: 1,
    name: "Beef Bulgogi",
    description:
      "Sweet tofu pocket with sushi rice, topped with savory marinated beef and sesame seeds.",
    price: "5.95",
    image: "/static/items/inariSushi/bulgogi.jpg",
  },
  {
    id: 2,
    name: "Spicy Tuna",
    description: "Sweet tofu pocket with sushi rice, topped with spicy tuna and avocado.",
    price: "5.95",
    image: "/static/items/inariSushi/spicytuna.jpg",
  },
  {
    id: 3,
    name: "Spicy Shrimp & Crab",
    description: "Sweet tofu pocket with sushi rice, topped with spicy shrimp & crab, green onions and masago.",
    price: "5.95",
    image: "/static/items/inariSushi/spicyshrimpcrab.jpg",
  },
  {
    id: 4,
    name: "Grilled Eel",
    description: "Sweet tofu pocket with sushi rice, topped with grilled eel and sesame seeds.",
    price: "5.95",
    image: "/static/items/inariSushi/grilledeel.jpg",
  },
  {
    id: 5,
    name: "Spicy Shrimp",
    description: "Sweet tofu pocket with sushi rice, topped with spicy shrimp.",
    price: "5.95",
    image: "/static/items/inariSushi/spicyshrimp.jpg",
  },
  {
    id: 6,
    name: "Spicy Salmon",
    description:
      "Sweet tofu pocket with sushi rice, topped with fresh spicy salmon, masago, and green onions.",
    price: "5.95",
    image: "/static/items/inariSushi/spicysalmon.jpg",
  },
];

export default function Inarizushi() {
  return (
    <div>
      <p className="text-xl font-black m-2 pb-5">Inarizushi</p>
      <div className="grid grid-cols-1 grid-rows-5 gap-4 w-auto lg:grid-cols-2">
        {inari.map((inariSushi) => (
          <div key={inariSushi.id}>
            <Card
              itemName={{ text: `${inariSushi.name}` }}
              itemDescription={{ text: `${inariSushi.description}` }}
              itemPrice={inariSushi.price}
              itemImage={{ image: `${inariSushi.image}` }}
            ></Card>
          </div>
        ))}
      </div>
    </div>
  );
}
