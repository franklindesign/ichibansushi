import Card from "@/app/components/card";

const bakedRolls = [
 
  {
    id: 1,
    name: "Baked Crab Roll",
    description: "In: crabmeat, avocado. Out: baked snow crab.",
    price: 17.95,
    image: "../static/items/bakedRolls/BakedCrabRoll.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Baked Salmon Roll",
    description: "In: crabmeat, avocado. Out: baked salmon. Sauce: eel sauce.",
    price: 15.95,
    image: "../static/items/bakedRolls/BakedSalmonRoll.jpg",
    largeImage: "",
  },
   {
    id: 3,
    name: "BSCR",
    description:
      "In: crabmeat, avocado, Out: baked scallop, masago, Sauce: eel sauce",
    price: 14.95,
    image: "../static/items/bakedRolls/BSCRoll.jpg",
  },
  {
    id: 4,
    name: "Caterpillar Roll",
    description: "In: eel, cucumber. Out: avocado. Sauce: eel sauce.",
    price: 14.95,
    image: " ../static/items/bakedRolls/CaterpillarRoll.jpg",
    largeImage: "",
  },
   {
    id: 5,
    name: "Lobster Roll",
    description:
      "In: crabmeat, avocado. Out: baked lobster, masago. Sauce: lobster sauce.",
    price: 18.95,
    image: "../static/items/bakedRolls/LobsterRoll.jpg",
  },
  {
    id: 6,
    name: "Snow Roll",
    description: "In: crabmeat, avocado. Out: baked white fish, soy paper.",
    price: 14.95,
    image: "../static/items/bakedRolls/SnowRoll.jpg",
    largeImage: "",
  },
  {
    id: 7,
    name: "Sunset Roll",
    description:
      "In: crabmeat, avocado. Out: baked eel, avocado. Sauce: eel sauce.",
    price: 15.95,
    image: "../static/items/bakedRolls/SunsetRoll.jpg",
    largeImage: "",
  },
  {
    id: 8,
    name: "Volcano Roll",
    description:
      "In: crabmeat, avocado. Out: baked scallop, shrimp, crab. Sauce: creamy sauce.",
    price: 14.95,
    image: "../static/items/bakedRolls/VolcanoRoll.jpg",
    largeImage: "",
  },
];

export default function BakedRolls() {
  return (
    <div>
      <p className="text-xl font-black m-2 pb-5">Baked Rolls</p>
      <div className="grid grid-cols-1 grid-rows-5 gap-4 w-auto lg:grid-cols-2">
        {bakedRolls.map((br) => (
          <div key={br.id}>
            <Card
              itemName={{ text: `${br.name}` }}
              itemDescription={{ text: `${br.description}` }}
              itemPrice={br.price}
              itemImage={{ image: `${br.image}` }}
            ></Card>
          </div>
        ))}
      </div>
    </div>
  );
}
