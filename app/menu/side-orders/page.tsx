import Card from "@/app/components/card";

const NoImage = "../static/items/NoImage.jpg";

const sides = [
  
   
  {
    id: 1,
    name: "Steamed Rice",
    description: "A side order of steamed rice",
    price: 3.50,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 2,
    name: "Sushi Rice",
    description: "A side order of sushi rice",
    price: 3.50,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 3,
    name: "Miso Soup",
    description: "A side order of miso soup",
    price: 3.50,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 4,
    name: "Soy Paper",
    description:
      "A side order of soy paper",
    price: 1.00,
    image: NoImage,
    largeImage: "",
  },

  {
    id: 5,
    name: "Fried Rice with vegetables",
    description: "A side order of fried rice with vegetables",
    price: 8.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 6,
    name: "Fried Rice with protein",
    description:
      "A side order of fried rice with select protein: shrimp, beef, or chicken.",
    price: 11.95,
    image: NoImage,
    largeImage: "",
  },
  
];

export default function SideOrders() {
   return (
      <div>
        <p className="text-xl font-black m-2 pb-5">Side Orders</p>
        <div className="grid grid-cols-1 grid-rows-5 gap-4 w-auto lg:grid-cols-2">
          {sides.map((item) => (
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
