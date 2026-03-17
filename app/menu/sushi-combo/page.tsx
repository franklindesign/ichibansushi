import Card from "@/app/components/card";


const sushiCombo = [
  {
    id: 1,
    name: "Special Sushi Combo",
    description:
      "California roll or spicy tuna; 10 pieces sushi: tuna, salmon, albacore, white fish, or shrimр. Includes miso soup.",
    price: 27.95,
    image: "../static/items/sushiCombo/specialSushi.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Special Sashimi Combo",
    description:
      "12 pieces of sashimi: tuna, salmon, albacore or yellowtail. Includes miso soup.",
    price: 28.95,
    image: "../static/items/sushiCombo/specialSashimi.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Unagi Bowl",
    description:
      "Broiled eel and avocado on a bowl of sushi rice. Includes miso soup.",
    price: 24.95,
    image: "../static/items/sushiCombo/unagiBowl.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Big Scallops Sashimi",
    description:
      "Multiple pieces of big scallops sashimi.",
    price: 21.95,
    image: "../static/items/sushiCombo/bigScallops.jpg",
    largeImage: "",
  },
   {
    id: 5,
    name: "Chirashi",
    description:
      "Mixed sashimi on a bowl of sushi rice. Includes miso soup.",
    price: 27.95,
    image: "../static/items/sushiCombo/chirashi.jpg",
    largeImage: "",
  },
   {
    id: 6,
    name: "Sashimi Donburi",
    description:
      "Korean-style poke with tuna and salmon on rice, spring mix, masago, seaweed salad, vegetables, hot sauce, sesame oil, and seed. Includes miso soup.",
    price: 21.95,
    image: "../static/items/sushiCombo/sashimiDonburi.jpg",
    largeImage: "",
  },
    {
    id: 7,
    name: "Ichiban Poke Bowl",
    description:
      "Tuna, salmon, scallop on rice, spring mix, masago, seaweed, avocado, and crabmeat. Includes miso soup.",
    price: 21.95,
    image: "../static/items/sushiCombo/ichibanPokeBowl.jpg",
    largeImage: "",
  },
];

export default function SushiCombo() {
  return (
              <div>
                <p className="text-xl font-black m-2 pb-5">Sushi & Sashimi Combo</p>
                <div className="grid grid-cols-1 grid-rows-2 gap-4 w-auto lg:grid-cols-2">
                  {sushiCombo.map((item) => (
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
