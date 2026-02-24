import Card from "./card";

const mostLikedItems = [
  {
    id: 1,
    name: "Baked Salmon Roll",
    description: "",
    price: "15.95",
    image: "../static/items/bakedRolls/BakedSalmonRoll.jpg",
  },
  {
    id: 2,
    name: "Rainbow roll",
    description: "",
    price: "16.95",
    image: "../static/items/freshRolls/RainbowRoll.jpg",
  },
  {
    id: 3,
    name: "California (Cut Roll)",
    description: "",
    price: "7.50",
    image: "../static/items/mostLikedItems/californiaCutRoll.jpg",
  },
  {
    id: 4,
    name: "Yellowtail Delight Roll",
    description: "",
    price: "18.95",
    image: "../static/items/freshRolls/YellowtailDelightRoll.jpg",
  },
];

export default function MostLikedItems() {
    

    return (
        <div>
         <p className="text-xl font-black m-2 pb-5">Most Liked Items</p>
              <div className="grid grid-cols-1 grid-rows-3 gap-4 w-auto lg:grid-cols-2">
                {mostLikedItems.map((item) => (
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
