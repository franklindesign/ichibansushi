import Card from "@/app/components/card";


const sushiBurritos = [
  {
    id: 1,
    name: "Iron Man",
    description:
      "inside: spicy tuna, shrimp tempura, avocado, special crab meat, jalapeno, green lettuce. outside: hot cheetos, chili oil, and spicy mayo",
    price: 13.95,
    image: "../static/items/sushiBurritos/IronManBurrito.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Spider Man",
    description:
      "inside: salmon, spicy tuna, avocado. outside: crispy onion, masago, green onion, yuzu ponzu sauce",
    price: 13.95,
    image: "../static/items/sushiBurritos/SpiderManBurrito.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Batman",
    description:
      "inside: eel, crab meat, avocado, cucumber. outside: eel sauce.",
    price: 13.95,
    image: "../static/items/sushiBurritos/BatmanBurrito.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Superman",
    description:
      "Spicy tuna, shrimp, asparagus tempura, avocado, cucumber, soy paper, with eel & spicy mayo sauce.",
    price: 13.95,
    image: "../static/items/sushiBurritos/SupermanBurrito.jpg",
    largeImage: "",
  },
];

export default function SushiBurritos() {
  return (
              <div>
                <p className="text-xl font-black m-2 pb-5">Sushi Burritos</p>
                <div className="grid grid-cols-1 grid-rows-2 gap-4 w-auto lg:grid-cols-2">
                  {sushiBurritos.map((item) => (
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
