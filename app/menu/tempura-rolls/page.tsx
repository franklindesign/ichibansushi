import Card from "@/app/components/card";


const tempuraRolls = [
  {
    id: 1,
    name: "Amber Roll",
    description: " shrimp tempura, cucumber.  spicy crabmeat. No sauce.",
    price: 14.95,
    image: "../static/items/tempuraRolls/AmberRoll.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Lobster & Shrimp Tempura Roll",
    description: " shrimp tempura, spicy crabmeat, soy paper.  avocado, fried langoustine, masago, green onions.  spicy mayo and eel sauce",
    price: 18.95,
    image: "../static/items/tempuraRolls/LobsterShrimpTempuraRoll.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Crunch Roll",
    description: " shrimp tempura, avocado.  tempura crunch.  eel sauce.",
    price: 13.95,
    image: "../static/items/tempuraRolls/CrunchRoll.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Fire Fire Roll",
    description: " spicy crab.  spicy tuna, spicy crunch, jalapeno.  chili oil.",
    price: 14.95,
    image: "../static/items/tempuraRolls/FireFireRoll.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "Spicy Shrimp & Crab Crunch Roll",
    description: " spicy shrimp, crab.  tempura.  hot sauce",
    price: 12.95,
    image: "../static/items/tempuraRolls/SpicyShrimpCrunchRoll.jpg",
    largeImage: "",
  },
  {
    id: 6,
    name: "Sun Burn Roll",
    description: " Spicy mixed seafood, spicy crab.  albacore, fried onions.  garlic ponzu sauce",
    price: 14.95,
    image: "../static/items/tempurarolls/SunBurnRoll.jpg",
    largeImage: "",
  },
  {
    id: 7,
    name: "Monkey Roll",
    description: " mushroom, spicy tuna, cream cheese.  tempura.  spicy mayo and eel sauce.",
    price: 12.95,
    image: "../static/items/tempuraRolls/MonkeyRoll.jpg",
    largeImage: "",
  },
  {
    id: 8,
    name: "Spider Roll",
    description: " soft shell crab, gobo, avocado, masago, crabmeat.  eel sauce",
    price: 14.95,
    image: "../static/items/tempuraRolls/SpiderRoll.jpg",
    largeImage: "",
  },
  {
    id: 9,
    name: "Dragon Roll",
    description: " shrimp tempura, spicy tuna.  eel, avocado.  eel sauce.",
    price: 18.95,
    image: "../static/items/tempuraRolls/DragonRoll.jpg",
    largeImage: "",
  },
  {
    id: 10,
    name: "Tiger Roll",
    description: " shrimp tempura, spicy tuna.  avocado, spicy tuna.  spicy mayo, eel sauce.",
    price: 14.95,
    image: "../static/items/tempuraRolls/TigerRoll.jpg",
    largeImage: "",
  },
  {
    id: 11,
    name: "Crunch Scallop Roll",
    description: " crabmeat, avocado.  deep fried scallops.  spicy mayo and eel sauce.",
    price: 14.95,
    image: "../static/items/tempuraRolls/CrunchScallopRoll.jpg",
    largeImage: "",
  },
  {
    id: 12,
    name: "Popcorn Lobster Roll",
    description: " crabmeat, avocado.  deep fried langostino.  spicy mayo and eel sauce.",
    price: 18.95,
    image: "../static/items/tempuraRolls/PopcornLobsterRoll.jpg",
    largeImage: "",
  },
  {
    id: 13,
    name: "Spicy Tuna Tempura Roll",
    description: " spicy tuna, avocado.  tempura.  spicy mayo and eel sauce.",
    price: 12.95,
    image: "../static/items/tempuraRolls/SpicyTunaTempuraRoll.jpg",
    largeImage: "",
  },
  {
    id: 14,
    name: "Lobster & Crab Crunch Roll",
    description: " lobster and crab. soy paper.  spicy mayo.",
    price: 14.95,
    image: "../static/items/tempuraRolls/LobsterCrabCrunchRoll.jpg",
    largeImage: "",
  },
  {
    id: 15,
    name: "Vegas Roll",
    description: " deep fried spicy seafood, avocado, cream cheese.  seaweed.  eel and hot sauce.",
    price: 13.95,
    image: "../static/items/tempuraRolls/VegasRoll.jpg",
    largeImage: "",
  },
  {
    id: 16,
    name: "Vegetable Tempura Roll",
    description: " vegetable tempura.  seaweed. No sauce.",
 
    price: 9.95,
    image: "../static/items/tempurarolls/vegetableTempuraRoll.jpg",
    largeImage: "",
  },
  {
    id: 17,
    name: "Hot Night Roll",
    description: " crabmeat, avocado, shrimp tempura.  spicy tuna, jalapeno, tempura crunch.  spicy mayo and eel sauce.",
    price: 13.95,
    image: "../static/items/tempurarolls/hotNightRoll.jpg",
    largeImage: "",
  },
  {
    id: 18,
    name: "Avocado Crunch Roll",
    description: " avocado.  seaweed, tempura.  spicy mayo, eel sauce.",
    price: 12.95,
    image: "../static/items/tempuraRolls/AvocadoCrunchRoll.jpg",
    largeImage: "",
  },
  {
    id: 19,
    name: "California Tempura Roll",
    description: " crabmeat, avocado.  tempura.  eel sauce.",
    price: 11.95,
    image: "../static/items/tempuraRolls/CaliforniaTempuraRoll.jpg",
    largeImage: "",
  },

  {
    id: 20,
    name: "Shrimp Tempura Roll",
    description: " shrimp tempura, crabmeat.  avocado.  spicy mayo, eel sauce",
    price: 12.95,
    image: "../static/items/tempuraRolls/ShrimpTempuraRoll.jpg",
    largeImage: "",
  },
  {
    id: 21,
    name: "Sean's Roll",
    description: " tempura shrimp, crabmeat.  salmon, avocado.  spicy mayo and eel sauce",
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
