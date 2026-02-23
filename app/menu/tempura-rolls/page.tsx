import Card from "@/app/components/card";


const tempuraRolls = [
  {
    id: 1,
    name: "Amber Roll",
    description: "In: shrimp tempura, cucumber. Out: spicy crabmeat. No sauce.",
    price: 14.95,
    image: "../static/items/tempuraRolls/AmberRoll.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Lobster & Shrimp Tempura Roll",
    description: "In: shrimp tempura, spicy crabmeat, soy paper. Out: avocado, fried langoustine, masago, green onions. Sauce: spicy mayo and eel sauce",
    price: 18.95,
    image: "../static/items/tempuraRolls/LobsterShrimpTempuraRoll.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Crunch Roll",
    description: "In: shrimp tempura, avocado. Out: tempura crunch. Sauce: eel sauce.",
    price: 13.95,
    image: "../static/items/tempuraRolls/CrunchRoll.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Fire Fire Roll",
    description: "In: spicy crab. Out: spicy tuna, spicy crunch, jalapeno. Sauce: chili oil.",
    price: 14.95,
    image: "../static/items/tempuraRolls/FireFireRoll.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "Spicy Shrimp & Crab Crunch Roll",
    description: "In: spicy shrimp, crab. Out: tempura. Sauce: hot sauce",
    price: 12.95,
    image: "../static/items/tempuraRolls/SpicyShrimpCrunchRoll.jpg",
    largeImage: "",
  },
  {
    id: 6,
    name: "Sun Burn Roll",
    description: "In: Spicy mixed seafood, spicy crab. Out: albacore, fried onions. Sauce: garlic ponzu sauce",
    price: 14.95,
    image: "../static/items/tempurarolls/SunBurnRoll.jpg",
    largeImage: "",
  },
  {
    id: 7,
    name: "Monkey Roll",
    description: "In: mushroom, spicy tuna, cream cheese. Out: tempura. Sauce: spicy mayo and eel sauce.",
    price: 12.95,
    image: "../static/items/tempuraRolls/MonkeyRoll.jpg",
    largeImage: "",
  },
  {
    id: 8,
    name: "Spider Roll",
    description: "In: soft shell crab, gobo, avocado, masago, crabmeat. Sauce: eel sauce",
    price: 14.95,
    image: "../static/items/tempuraRolls/SpiderRoll.jpg",
    largeImage: "",
  },
  {
    id: 9,
    name: "Dragon Roll",
    description: "In: shrimp tempura, spicy tuna. Out: eel, avocado. Sauce: eel sauce.",
    price: 18.95,
    image: "../static/items/tempuraRolls/DragonRoll.jpg",
    largeImage: "",
  },
  {
    id: 10,
    name: "Tiger Roll",
    description: "In: shrimp tempura, spicy tuna. Out: avocado, spicy tuna. Sauce: spicy mayo, eel sauce.",
    price: 14.95,
    image: "../static/items/tempuraRolls/TigerRoll.jpg",
    largeImage: "",
  },
  {
    id: 11,
    name: "Crunch Scallop Roll",
    description: "In: crabmeat, avocado. Out: deep fried scallops. Sauce: spicy mayo and eel sauce.",
    price: 14.95,
    image: "../static/items/tempuraRolls/CrunchScallopRoll.jpg",
    largeImage: "",
  },
  {
    id: 12,
    name: "Popcorn Lobster Roll",
    description: "In: crabmeat, avocado. Out: deep fried langostino. Sauce: spicy mayo and eel sauce.",
    price: 18.95,
    image: "../static/items/tempuraRolls/PopcornLobsterRoll.jpg",
    largeImage: "",
  },
  {
    id: 13,
    name: "Spicy Tuna Tempura Roll",
    description: "In: spicy tuna, avocado. Out: tempura. Sauce: spicy mayo and eel sauce.",
    price: 12.95,
    image: "../static/items/tempuraRolls/SpicyTunaTempuraRoll.jpg",
    largeImage: "",
  },
  {
    id: 14,
    name: "Lobster & Crab Crunch Roll",
    description: "In: lobster and crab. Out:soy paper. Sauce: spicy mayo.",
    price: 14.95,
    image: "../static/items/tempuraRolls/LobsterCrabCrunchRoll.jpg",
    largeImage: "",
  },
  {
    id: 15,
    name: "Vegas Roll",
    description: "In: deep fried spicy seafood, avocado, cream cheese. Out: seaweed. Sauce: eel and hot sauce.",
    price: 13.95,
    image: "../static/items/tempuraRolls/VegasRoll.jpg",
    largeImage: "",
  },
  {
    id: 16,
    name: "Vegetable Tempura Roll",
    description: "In: vegetable tempura. Out: seaweed. No sauce.",
 
    price: 9.95,
    image: "../static/items/tempurarolls/vegetableTempuraRoll.jpg",
    largeImage: "",
  },
  {
    id: 17,
    name: "Hot Night Roll",
    description: "In: crabmeat, avocado, shrimp tempura. Out: spicy tuna, jalapeno, tempura crunch. Sauce: spicy mayo and eel sauce.",
    price: 13.95,
    image: "../static/items/tempurarolls/hotNightRoll.jpg",
    largeImage: "",
  },
  {
    id: 18,
    name: "Avocado Crunch Roll",
    description: "In: avocado. Out: seaweed, tempura. Sauce: spicy mayo, eel sauce.",
    price: 12.95,
    image: "../static/items/tempuraRolls/AvocadoCrunchRoll.jpg",
    largeImage: "",
  },
  {
    id: 19,
    name: "California Tempura Roll",
    description: "In: crabmeat, avocado. Out: tempura. Sauce: eel sauce.",
    price: 11.95,
    image: "../static/items/tempuraRolls/CaliforniaTempuraRoll.jpg",
    largeImage: "",
  },

  {
    id: 20,
    name: "Shrimp Tempura Roll",
    description: "In: shrimp tempura, crabmeat. Out: avocado. Sauce: spicy mayo, eel sauce",
    price: 12.95,
    image: "../static/items/tempuraRolls/ShrimpTempuraRoll.jpg",
    largeImage: "",
  },
  {
    id: 21,
    name: "Sean's Roll",
    description: "In: tempura shrimp, crabmeat. Out: salmon, avocado. Sauce: spicy mayo and eel sauce",
    price: 16.95,
    image: "../static/items/tempurarolls/seanRoll.jpg",
    largeImage: "",
  },
];

export default function TempuraRolls() {
   return (
              <div>
                <p className="text-xl font-black m-2 pb-5">Tempura Rolls</p>
                <div className="grid grid-cols-1 grid-rows-5 gap-4 w-auto lg:grid-cols-2">
                  {tempuraRolls.map((item) => (
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
