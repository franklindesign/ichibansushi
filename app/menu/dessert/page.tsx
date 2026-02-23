import Card from "@/app/components/card";

const desserts = [
  {
    id: 1,
    name: "Ice Cream",
    description: "green tea or vanilla",
    price: "3.50",
    image: "../static/items/desserts/icecream.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Mochi Ice Cream",
    description: "green tea, mango, or strawberry",
    price: "2.50",
    image: "../static/items/desserts/mochi.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Tempura Ice Cream",
    description: "green tea or vanilla",
    price: "8.95",
    image: "../static/items/desserts/tempuraicecream.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Tempura Cheese Cake",
    description: "green tea or vanilla",
    price: "8.95",
    image: "../static/items/desserts/tempuraCheeseCake.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "MACARON Gelato Sandwiches",
    description: "multiple flavors",
    price: "4.50",
    image: "../static/items/desserts/macaron.jpg",
    largeImage: "",
  },
];

export default function Dessert() {
  return (
    <div>
      <p className="text-xl font-black m-2 pb-5">Dessert</p>
      <div className="grid grid-cols-1 grid-rows-5 gap-4 w-auto lg:grid-cols-2">
        {desserts.map((item) => (
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
