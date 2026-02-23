import Card from "@/app/components/card";


const warmAppetizers = [
  {
    id: 1,
    name: "Baked Green Mussel (5 Pieces)",
    description: "5 pieces of baked green mussels",
    price: 9.95,
    image: "../static/items/hotAppetizers/BakedGreenMussels.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Steamed Edamame",
    description: "boiled edamame",
    price: 4.95,
    image: "../static/items/hotAppetizers/SteamedEdamame.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Garlic Edamame (Spicy)",
    description: "delicately sauteed soybeans with sea salt and garlic",
    price: 7.95,
    image: "../static/items/hotAppetizers/GarlicEdamame.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Shrimp Tempura",
    description: "4 pieces of shrimp tempura.",
    price: 9.95,
    image: "../static/items/hotAppetizers/ShrimpTempura.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "Vegetable Tempura",
    description: "5 pieces of vegetable tempura.",
    price: 8.95,
    image: "../static/items/hotAppetizers/VegetableTempura.jpg",
    largeImage: "",
  },
  {
    id: 6,
    name: "Calamari Tempura",
    description: "Multiple pieces of calamari tempura.",
    price: 11.95,
    image: "../static/items/hotAppetizers/CalamariTempura.jpg",
    largeImage: "",
  },
  {
    id: 7,
    name: "Mixed Tempura",
    description: "Multiple pieces of shrimp and vegetable tempura.",
    price: 11.95,
    image: "../static/items/hotAppetizers/MixedTempura.jpg",
    largeImage: "",
  },
  {
    id: 8,
    name: "Gyoza Potstickers",
    description: "6 lightly fried pork and vegetable potstickers (gyoza). ",
    price: 7.95,
    image: "../static/items/hotAppetizers/Gyoza.jpg",
    largeImage: "",
  },
  {
    id: 9,
    name: "Shumai Dumplings",
    description: "Lightly fried shrimp and vegetable dumplings (6 pieces)",
    price: 7.95,
    image: "../static/items/hotAppetizers/Shumai.jpg",
    largeImage: "",
  },
  {
    id: 10,
    name: "Dynamite",
    description:
      "Baked crab, scallop, shrimp, onion, mushroom with dynamite sauce.",
    price: 11.95,
    image: "../static/items/hotAppetizers/Dynamite.jpg",
    largeImage: "",
  },
  {
    id: 11,
    name: "Lobster Dynamite",
    description: "Baked lobster with dynamite sauce.",
    price: 16.95,
    image: "../static/items/hotAppetizers/lobsterDynamite.jpg",
    largeImage: "",
  },
  {
    id: 12,
    name: "Soft Shell Crab",
    description: "fried soft shell crab with ponzu sauce",
    price: 13.95,
    image: "../static/items/hotAppetizers/SoftShellCrab.jpg",
    largeImage: "",
  },
  {
    id: 13,
    name: "Deep Fried Tofu",
    description: "Fried tofu with masago, bonito, and green onions.",
    price: 7.95,
    image: "../static/items/hotAppetizers/DeepFriedTofu.jpg",
    largeImage: "",
  },
  {
    id: 14,
    name: "Shishito Peppers",
    description: "Slightly sweet sauteed peppers.",
    price: 9.95,
    image: "../static/items/hotAppetizers/Shishito.jpg",
    largeImage: "",
  },
  {
    id: 15,
    name: "Steamed Dimsum (5 Pieces)",
    description: "5 pieces of shrimp or pork dumplings.",
    price: 9.95,
    image: "../static/items/hotAppetizers/Dimsum.jpg",
    largeImage: "",
  },

  {
    id: 16,
    name: "Sesame Chicken",
    description: "Lightly fried chicken marinated in sesame sauce.",
    price: 9.95,
    image: "../static/items/hotAppetizers/sesameChicken.jpg",
    largeImage: "",
  },
  {
    id: 17,
    name: "Salmon Collar",
    description: "Broiled salmon collar.",
    price: 9.95,
    image: "../static/items/hotAppetizers/SalmonCollar.jpg",
    largeImage: "",
  },
  {
    id: 18,
    name: "Yellowtail Collar",
    description: "Broiled yellowtail collar.",
    price: 12.95,
    image: "../static/items/hotAppetizers/YellowtailCollar.jpg",
    largeImage: "",
  },

  {
    id: 19,
    name: "Spicy Tofu",
    description: "Fried tofu with spicy sauce.",
    price: 9.95,
    image: "../static/items/hotAppetizers/SpicyTofu.jpg",
    largeImage: "",
  },
  {
    id: 20,
    name: "Heart Attack",
    description:
      "Deep fried jalapeno, cream cheese, spicy tuna with eel sauce and masago.",
    price: 11.95,
    image: "../static/items/hotAppetizers/heartAttack.jpg",
    largeImage: "",
  },
];


export default function AppetizersWarm() {
    return (
       <div>
         <p className="text-xl font-black m-2 pb-5">Appetizers (Warm)</p>
         <div className="grid grid-cols-1 grid-rows-5 gap-4 w-auto lg:grid-cols-2">
           {warmAppetizers.map((item) => (
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
