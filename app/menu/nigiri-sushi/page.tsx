import Card from "@/app/components/card";

const NoImage = "../static/items/NoImageSushi.jpg";

const sushis = [
  {
    id: 1,
    name: "Albacore (sushi)",
    description: "2 pieces",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 2,
    name: "Crab (sushi)",
    description: "2 pieces",
    price: "4.50",
    image: "../static/items/nigiri/crab-nigiri.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Escolar (ono sushi)",
    description: "2 pieces",
    price: "6.50",
    image: "../static/items/nigiri/escolar-nigiri.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Egg (tamago sushi)",
    description: "2 pieces",
    price: "4.50",
    image: "../static/items/nigiri/tamago-nigiri.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "Fresh Water Eel (unagi sushi)",
    description: "2 pieces",
    price: "6.95",
    image: "../static/items/nigiri/unagi-nigiri.jpg",
    largeImage: "",
  },

  {
    id: 6,
    name: "Inari (sushi)",
    description: "2 pieces",
    price: "4.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 7,
    name: "Mackerel (sushi)",
    description: "2 pieces",
    price: "5.50",
    image: "../static/items/nigiri/mackerel-nigiri.jpg",
    largeImage: "",
  },
  {
    id: 8,
    name: "Octopus (sushi)",
    description: "2 pieces",
    price: "5.50",
    image: "../static/items/nigiri/octopus-nigiri.jpg",
    largeImage: "",
  },
  {
    id: 9,
    name: "Red Clam (sushi)",
    description: "2 pieces",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 10,
    name: "Salmon (sushi)",
    description: "2 pieces",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 11,
    name: "Salmon Egg (sushi)",
    description: "2 pieces",
    price: "7.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 12,
    name: "Scallop (sushi)",
    description: "2 pieces",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 13,
    name: "Shrimp (sushi)",
    description: "2 pieces",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 14,
    name: "Smelt Egg (sushi)",
    description: "2 pieces",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 15,
    name: "Squid (sushi)",
    description: "2 pieces",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 16,
    name: "Sweet Shrimp (sushi)",
    description: "2 pieces",
    price: "11.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 17,
    name: "Tuna (sushi)",
    description: "2 pieces",
    price: "6.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 18,
    name: "Uni (sea urchin sushi)",
    description: "2 pieces",
    price: "11.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 19,
    name: "White Fish (sushi)",
    description: "2 pieces",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 20,
    name: "Yellowtail (sushi)",
    description: "2 pieces",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 21,
    name: "Halibut (sushi)",
    description: "2 pieces",
    price: "6.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 22,
    name: "Chu-toro (medium fatty tuna sushi)",
    description: "2 pieces",
    price: "11.95",
    image: "../static/items/nigiri/chutoro-nigiri.jpg",
    largeImage: "",
  },
  {
    id: 23,
    name: "Otoro (high fatty tuna sushi)",
    description: "2 pieces",
    price: "13.95",
    image: "../static/items/nigiri/otoro-nigiri.jpg",
    largeImage: "",
  },
];

export default function Nigiri() {
 return (
     <div>
       <p className="text-xl font-black m-2 pb-5">Nigiri Sushi</p>
       <div className="grid grid-cols-1 grid-rows-5 gap-4 w-auto lg:grid-cols-2">
         {sushis.map((item) => (
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
