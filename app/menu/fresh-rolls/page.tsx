import Card from "@/app/components/card";


const freshRolls = [
  {
    id: 1,
    name: "Ichiban Roll",
    description: "In: spicy tuna, shrimp, avocado. Out: tuna, blue crab, masago, green onions. Sauce: chili oil, and eel sauce.",
    price: 19.95,
    image: "../static/items/freshRolls/IchibanRoll.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Love Roll",
    description: "In: spicy yellowtail, cucumber, soy paper. Out: avocado, jalapeno, masago, green onions. Sauce: yuzu and chili oil",
    price: 18.95,
    image: "../static/items/freshRolls/LoveRoll.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Sakura Roll",
    description: "In: salmon, yellowtail, white fish, tuna, crab, avocado. Out: soy paper wrap. Sauce: ponzu and house sauce.",
    price: 15.95,
    image: "../static/items/freshRolls/SakuraRoll.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Valentine Roll",
    description: "In: crabmeat, shrimp, tuna, avocado. Out: soy paper wrap. Sauce: chili oil and eel sauce",
    price: 11.95,
    image: "../static/items/freshRolls/ValentineRoll.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "Albacore Delight Roll",
    description: "In: crabmeat, avocado. Out: albacore, red onions, green onions, masago. Sauce: ponzu sauce",
    price: 16.95,
    image: "../static/items/freshRolls/AlbacoreDelightRoll.jpg",
    largeImage: "",
  },
  {
    id: 6,
    name: "Yellowtail Delight Roll",
    description: "In: spicy tuna, cucumber. Out: yellowtail, jalapeno, red onions, masago. Sauce: ponzu.",
    price: 18.95,
    image: "../static/items/freshRolls/YellowtailDelightRoll.jpg",
    largeImage: "",
  },
  {
    id: 7,
    name: "Aguachile Roll",
    description: "In: spicy shrimp, avocado, cucumber. Out: shrimp on top. Sauce: aguachile sauce.",
    price: 14.95,
    image: "../static/items/freshRolls/AguachileRoll.jpg",
    largeImage: "",
  },
  {
    id: 8,
    name: "911 Roll",
    description: "In: spicy tuna, cucumber. Out: avocado. Sauce: chili oil, hot, and sweet sauce.",
    price: 12.95,
    image: "../static/items/freshRolls/911Roll.jpg",
    largeImage: "",
  },
  {
    id: 9,
    name: "X Girl Friend Roll",
    description: "In: spicy crabmeat. Out: tuna, salmon, yellowtail, green onion, masago. Sauce: eel sauce and chili oil",
    price: 15.95,
    image: "../static/items/freshRolls/XGirlFriendRoll.jpg",
    largeImage: "",
  },
  {
    id: 10,
    name: "Cucumber Sashimi Roll",
    description: "In: four kinds of fish, avocado. Out: cucumber wrap. Sauce: yuzu ponzu.",
    price: 15.95,
    image: "../static/items/freshRolls/CucumberSashimiRoll.jpg",
    largeImage: "",
  },
  {
    id: 11,
    name: "Sexy Salmon Roll",
    description: "In: salmon, crabmeat, avocado. Out: cucumber wrap. Sauce: ponzu.",
    price: 15.95,
    image: "../static/items/freshRolls/SexySalmonRoll.jpg",
    largeImage: "",
  },
  {
    id: 12,
    name: "Spicy Albacore Crunch Roll",
    description: "In: shrimp tempura, spicy crabmeat. Out: albacore, fried garlic, tempura crunch. Sauce: spicy ponzu.",
    price: 17.95,
    image: "../static/items/freshRolls/SpicyAlbacoreCrunchRoll.jpg",
    largeImage: "",
  },
  {
    id: 13,
    name: "Red Dragon Roll",
    description: "In: spicy crabmeat, fried jalapeno. Out: tuna, jalapeno. Sauce: spicy mayo, chili oil.",
    price: 16.95,
    image: "../static/items/freshRolls/RedDragonRoll.jpg",
    largeImage: "",
  },
  {
    id: 14,
    name: "Mango Tango Roll",
    description: "In: shrimp tempura, cucumber, mango. Out: salmon, avocado. Sauce: lemon.",
    price: 16.95,
    image: "../static/items/freshRolls/MangoTangoRoll.jpg",
    largeImage: "",
  },
  {
    id: 15,
    name: "Mango Mania Roll",
    description: "In: mango, cucumber, avocado. Out: salmon, mango. Sauce: lemon sauce.",
    price: 14.95,
    image: "../static/items/freshRolls/MangoManiaRoll.jpg",
    largeImage: "",
  },
  {
    id: 16,
    name: "Mexican Roll",
    description: "In: spicy shrimp, crabmeat. Out: avocado. Sauce: spicy mayo and sriracha sauce.",
    price: 14.95,
    image: "../static/items/freshRolls/MexicanRoll.jpg",
    largeImage: "",
  },

  {
    id: 17,
    name: "Hawaiian Roll",
    description: "In: spicy tuna, cucumber. Out: tuna, masago, green onions. Sauce: goma",
    price: 16.95,
    image: "../static/items/freshRolls/HawaiianRoll.jpg",
    largeImage: "",
  },
  {
    id: 18,
    name: "Alaskan Roll",
    description: "In: spicy tuna, cucumber. Out:salmon. Sauce: goma ",
    price: 16.95,
    image: "../static/items/freshRolls/AlaskanRoll.jpg",
    largeImage: "",
  },
  {
    id: 19,
    name: "Baja Roll",
    description: "In: crabmeat, red onion, jalapeno. Out: avocado, jalapeno, cilantro. Sauce: garlic ponzu sauce.",
    price: 14.95,
    image: "../static/items/freshRolls/bajaRoll.jpg",
    largeImage: "",
  },

  {
    id: 20,
    name: "Lemon Roll",
    description: "In: crabmeat, avocado. Out: salmon, sliced lemon on top. Sauce: lemon sauce.",
    price: 15.95,
    image: "../static/items/freshRolls/LemonRoll.jpg",
    largeImage: "",
  },
  {
    id: 21,
    name: "Elmo Roll",
    description: "spicy shrimp, crab, avocado, soy paper. Out: seared cajun tuna, masago, green onions, crispy onions, Sauce: chili oil, spicy ponzu ",
    price: 18.95,
    image: "../static/items/freshRolls/ElmoRoll.jpg",
    largeImage: "",
  },
  {
    id: 22,
    name: "Rainbow Roll",
    description: "In: crabmeat, avocado. Out: four kinds of fish and avocado",
    price: 16.95,
    image: "../static/items/freshRolls/RainbowRoll.jpg",
    largeImage: "",
  },
  {
    id: 23,
    name: "Albacore Special Roll",
    description: "In: crabmeat, avocado. Out: albacore, masago, microgreens mix. Sauce: truffle oil, garlic, chili oil, and ponzu.",
    price: 18.95,
    image: "../static/items/freshRolls/AlbacoreSpecial.jpg",
    largeImage: "",
  },
  {
    id: 24,
    name: "Black Mamba Roll",
    description: "spicy octopus, cucumber. In: avocado, jalapeno, black tobiko on top. Sauce: yuzu, and chili oil.",
    price: 19.95,
    image: "../static/items/freshRolls/BlackMamba.jpg",
    largeImage: "",
  },
];

export default function FreshRolls() {
  return (
           <div>
             <p className="text-xl font-black m-2 pb-5">Fresh Rolls</p>
             <div className="grid grid-cols-1 grid-rows-5 gap-4 w-auto lg:grid-cols-2">
               {freshRolls.map((item) => (
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
