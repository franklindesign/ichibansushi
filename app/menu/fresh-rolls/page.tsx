import Card from "@/app/components/card";


const freshRolls = [
  {
    id: 1,
    name: "Ichiban Roll",
    description: " spicy tuna, shrimp, avocado, tuna, blue crab, masago, green onions, chili oil, and eel sauce.",
    price: 19.95,
    image: "../static/items/freshRolls/IchibanRoll.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Love Roll",
    description: " spicy yellowtail, cucumber, soy paper, avocado, jalapeno, masago, green onions, yuzu and chili oil",
    price: 18.95,
    image: "../static/items/freshRolls/LoveRoll.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Sakura Roll",
    description: " salmon, yellowtail, white fish, tuna, crab, avocado.  soy paper wrap.  ponzu and house sauce.",
    price: 15.95,
    image: "../static/items/freshRolls/SakuraRoll.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Valentine Roll",
    description: " crabmeat, shrimp, tuna, avocado.  soy paper wrap.  chili oil and eel sauce",
    price: 11.95,
    image: "../static/items/freshRolls/ValentineRoll.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "Albacore Delight Roll",
    description: " crabmeat, avocado.  albacore, red onions, green onions, masago.  ponzu sauce",
    price: 16.95,
    image: "../static/items/freshRolls/AlbacoreDelightRoll.jpg",
    largeImage: "",
  },
  {
    id: 6,
    name: "Yellowtail Delight Roll",
    description: " spicy tuna, cucumber.  yellowtail, jalapeno, red onions, masago.  ponzu.",
    price: 18.95,
    image: "../static/items/freshRolls/YellowtailDelightRoll.jpg",
    largeImage: "",
  },
  {
    id: 7,
    name: "Aguachile Roll",
    description: " spicy shrimp, avocado, cucumber.  shrimp on top.  aguachile sauce.",
    price: 14.95,
    image: "../static/items/freshRolls/AguachileRoll.jpg",
    largeImage: "",
  },
  {
    id: 8,
    name: "911 Roll",
    description: " spicy tuna, cucumber.  avocado.  chili oil, hot, and sweet sauce.",
    price: 12.95,
    image: "../static/items/freshRolls/911Roll.jpg",
    largeImage: "",
  },
  {
    id: 9,
    name: "X Girl Friend Roll",
    description: " spicy crabmeat.  tuna, salmon, yellowtail, green onion, masago.  eel sauce and chili oil",
    price: 15.95,
    image: "../static/items/freshRolls/XGirlFriendRoll.jpg",
    largeImage: "",
  },
  {
    id: 10,
    name: "Cucumber Sashimi Roll",
    description: " four kinds of fish, avocado.  cucumber wrap.  yuzu ponzu.",
    price: 15.95,
    image: "../static/items/freshRolls/CucumberSashimiRoll.jpg",
    largeImage: "",
  },
  {
    id: 11,
    name: "Sexy Salmon Roll",
    description: " salmon, crabmeat, avocado.  cucumber wrap.  ponzu.",
    price: 15.95,
    image: "../static/items/freshRolls/SexySalmonRoll.jpg",
    largeImage: "",
  },
  {
    id: 12,
    name: "Spicy Albacore Crunch Roll",
    description: " shrimp tempura, spicy crabmeat.  albacore, fried garlic, tempura crunch.  spicy ponzu.",
    price: 17.95,
    image: "../static/items/freshRolls/SpicyAlbacoreCrunchRoll.jpg",
    largeImage: "",
  },
  {
    id: 13,
    name: "Red Dragon Roll",
    description: " spicy crabmeat, fried jalapeno.  tuna, jalapeno.  spicy mayo, chili oil.",
    price: 16.95,
    image: "../static/items/freshRolls/RedDragonRoll.jpg",
    largeImage: "",
  },
  {
    id: 14,
    name: "Mango Tango Roll",
    description: " shrimp tempura, cucumber, mango.  salmon, avocado.  lemon.",
    price: 16.95,
    image: "../static/items/freshRolls/MangoTangoRoll.jpg",
    largeImage: "",
  },
  {
    id: 15,
    name: "Mango Mania Roll",
    description: " mango, cucumber, avocado.  salmon, mango.  lemon sauce.",
    price: 14.95,
    image: "../static/items/freshRolls/MangoManiaRoll.jpg",
    largeImage: "",
  },
  {
    id: 16,
    name: "Mexican Roll",
    description: " spicy shrimp, crabmeat.  avocado.  spicy mayo and sriracha sauce.",
    price: 14.95,
    image: "../static/items/freshRolls/MexicanRoll.jpg",
    largeImage: "",
  },

  {
    id: 17,
    name: "Hawaiian Roll",
    description: " spicy tuna, cucumber.  tuna, masago, green onions.  goma",
    price: 16.95,
    image: "../static/items/freshRolls/HawaiianRoll.jpg",
    largeImage: "",
  },
  {
    id: 18,
    name: "Alaskan Roll",
    description: " spicy tuna, cucumber. salmon.  goma ",
    price: 16.95,
    image: "../static/items/freshRolls/AlaskanRoll.jpg",
    largeImage: "",
  },
  {
    id: 19,
    name: "Baja Roll",
    description: " crabmeat, red onion, jalapeno.  avocado, jalapeno, cilantro.  garlic ponzu sauce.",
    price: 14.95,
    image: "../static/items/freshRolls/bajaRoll.jpg",
    largeImage: "",
  },

  {
    id: 20,
    name: "Lemon Roll",
    description: " crabmeat, avocado.  salmon, sliced lemon on top.  lemon sauce.",
    price: 15.95,
    image: "../static/items/freshRolls/LemonRoll.jpg",
    largeImage: "",
  },
  {
    id: 21,
    name: "Elmo Roll",
    description: "spicy shrimp, crab, avocado, soy paper.  seared cajun tuna, masago, green onions, crispy onions,  chili oil, spicy ponzu ",
    price: 18.95,
    image: "../static/items/freshRolls/ElmoRoll.jpg",
    largeImage: "",
  },
  {
    id: 22,
    name: "Rainbow Roll",
    description: " crabmeat, avocado.  four kinds of fish and avocado",
    price: 16.95,
    image: "../static/items/freshRolls/RainbowRoll.jpg",
    largeImage: "",
  },
  {
    id: 23,
    name: "Albacore Special Roll",
    description: " crabmeat, avocado.  albacore, masago, microgreens mix.  truffle oil, garlic, chili oil, and ponzu.",
    price: 18.95,
    image: "../static/items/freshRolls/AlbacoreSpecial.jpg",
    largeImage: "",
  },
  {
    id: 24,
    name: "Black Mamba Roll",
    description: "spicy octopus, cucumber.  avocado, jalapeno, black tobiko on top.  yuzu, and chili oil.",
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
