import Card from "@/app/components/card";

const inari = [
  { id: 1, name: "Beef Bulgogi", description: "beef", price: "5.95", image: "../static/items/inariSushi/bulgogi.jpg" },
  { id: 2, name: "Spicy Tuna", description: "spicy tuna", price: "5.95", image: "../static/items/inariSushi/spicytuna.jpg" },
  { id: 3, name: "Spicy Shrimp & Crab", description: "spicy shrimp", price: "5.95", image: "../static/items/inariSushi/spicyshrimpcrab.jpg" },
  { id: 4, name: "Grilled Eel", description: "eel", price: "5.95", image: "../static/items/inariSushi/grilledeel.jpg" },
  { id: 5, name: "Spicy Shrimp", description: "shrimp", price: "5.95", image: "../static/items/inariSushi/spicyshrimp.jpg" },
  { id: 6, name: "Spicy Salmon", description: "salmon", price: "5.95", image: "../static/items/inariSushi/spicysalmon.jpg" },
];

export default function Inari() {
  return (
    <div>
      <p className="text-xl font-black m-2 pb-5">Inari Sushi</p>
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
