import Card from "@/app/components/card";


const salads = [
  {
    id: 1,
    name: "House Salad",
    description: "house salad with ginger dressing",
    price: "8.50",
    image: "../static/items/salad/houseSalad.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Cucumber Salad",
    description: "cucumber salad with vinaigrette and sesame seeds.",
    price: "7.50",
    image: "../static/items/salad/cucumberSalad.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Octopus Salad",
    description: "octopus salad with green onions.",
    price: 13.95,
    image: "../static/items/salad/octopusSalad.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Seaweed Salad",
    description: "marinated seaweed with sesame oil and seed",
    price: "7.50",
    image: "../static/items/salad/seaweedSalad.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "Salmon Skin Salad",
    description: "broiled salmon skin, gobo, bonito",
    price: 13.95,
    image: "../static/items/salad/salmonSkinSalad.jpg",
    largeImage: "",
  },

  {
    id: 6,
    name: "Sashimi Salad",
    description: "Green salad with 8 pieces of sashimi",
    price: 20.95,
    image: "../static/items/salad/sashimiSalad.jpg",
    largeImage: "",
  },
  {
    id: 7,
    name: "Spicy Tuna Salad",
    description:
      "spicy tuna, cucumber with gobo, masago, green onion, sesame oil and seed",
    price: 18.95,
    image: "../static/items/salad/spicyTunaSalad.jpg",
    largeImage: "",
  },
];


export default function Salad() {
  return (
       <div>
         <p className="text-xl font-black m-2 pb-5">Salad</p>
         <div className="grid grid-cols-1 grid-rows-5 gap-4 w-auto lg:grid-cols-2">
           {salads.map((item) => (
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
