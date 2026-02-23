import Card from "../components/card";

const popularItems = [
  {
    id: 1,
    name: "Beef Bulgogi",
    description: "beef",
    price: "5.95",
    image: "../static/items/inariSushi/bulgogi.jpg",
  },
  {
    id: 2,
    name: "Spicy Tuna",
    description: "spicy tuna",
    price: "5.95",
    image: "../static/items/inariSushi/spicytuna.jpg",
  },
  {
    id: 3,
    name: "Spicy Shrimp & Crab",
    description: "spicy shrimp",
    price: "5.95",
    image: "../static/items/inariSushi/spicyshrimpcrab.jpg",
  },
  {
    id: 4,
    name: "Grilled Eel",
    description: "eel",
    price: "5.95",
    image: "../static/items/inariSushi/grilledeel.jpg",
  },
];

export default function Menu() {
  return (
    <div>
      <p className="text-xl font-black m-2 pb-5">Popular Items</p>
      <div className="grid grid-cols-1 grid-rows-5 gap-4 w-auto lg:grid-cols-2">
        {popularItems.map((item) => (
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
