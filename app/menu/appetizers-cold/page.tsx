import Card from "@/app/components/card";


const coldAppetizers = [
  {
    id: 1,
    name: "Yummy Crunch Tuna",
    description: "Fresh tuna with tomato salsa, masago, and spicy mayo sauce.",
    price: 15.95,
    image: "../static/items/coldAppetizers/YummyCrunchTuna.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Yummy Crunch Salmon",
    description: "Fresh salmon with mango salsa",
    price: 15.95,
    image: "../static/items/coldAppetizers/YummyCrunchSalmon.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Tuna on Rice Crispy ",
    description:
      "4 pieces of crunchy rice cakes with avocado, masago, spicy tuna on top, spicy mayo, and eel sauce",
    price: 14.95,
    image: "../static/items/coldAppetizers/SpicyTunaOnRiceCrispy.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Fresh Oyster (2 pieces) ",
    description: "2 pieces of fresh oyster",
    price: 6,
    image: "../static/items/coldAppetizers/FreshOyster.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "Fresh Oyster (6 pieces) ",
    description: "6 pieces of fresh oyster",
    price: 16,
    image: "../static/items/coldAppetizers/FreshOysters.jpg",
    largeImage: "",
  },
  {
    id: 6,
    name: "Sexy on the Beach",
    description:
      "spicy crab, shrimp with avocado, wrapped in tuna, masago, green onions, ponzu sauce, and chili oil on top.",
    price: 17.95,
    image: "../static/items/coldAppetizers/SexyOnTheBeach.jpg",
    largeImage: " ",
  },
  {
    id: 7,
    name: "Oyster Shooter",
    description: "oyster with masago, green onions with ponzu and sake",
    price: 6.95,
    image: "../static/items/coldAppetizers/OysterShooter.jpg",
    largeImage: " ",
  },
  {
    id: 8,
    name: "Yellowtail Carpaccio (6 Pieces)",
    description: "yellowtail with jalapeno, yuzu sauce, and chili oil",
    price: 18.95,
    image: "../static/items/coldAppetizers/YellowtailCappaccio.jpg",
    largeImage: "",
  },
  {
    id: 9,
    name: "Albacore Carpaccio (6 Pieces)",
    description: "albacore with ponzu and fried onion",
    price: 18.95,
    image: "../static/items/coldAppetizers/AlbacoreCappaccio.jpg",
    largeImage: "",
  },
  {
    id: 10,
    name: "Cajun Spicy Tuna Sashimi",
    description: "Cajun style spicy sashimi with avocado, ponzu, and chili oil",
    price: 19.95,
    image: "../static/items/coldAppetizers/CajunSpicyTuna.jpg",
    largeImage: "",
  },
  {
    id: 11,
    name: "Aguachile Shrimp",
    description:
      "Avocado, cucumber, red onions, cilantro, tomato, and aguachile sauce.",
    price: 15.95,
    image: "../static/items/coldAppetizers/AguachileShrimp.jpg",
    largeImage: "",
  },
  {
    id: 12,
    name: "Oyster Ceviche (4 pieces)",
    description: "Four pieces of oyster ceviche.",
    price: 15,
    image: "../static/items/coldAppetizers/OysterCeviche.jpg",
    largeImage: "",
  },
  {
    id: 13,
    name: "Octopus Wasabi",
    description: "Oyster with masago, green onions, with ponzu and sake.",
    price: 11.95,
    image: "../static/items/coldAppetizers/OctopusWasabi.jpg",
    largeImage: "",
  },
  {
    id: 14,
    name: "Salmon Truffle",
    description:
      "Five pieces of salmon with truffle oil, ponzu sauce, and mix microgreens.",
    price: 18.95,
    image: "../static/items/coldAppetizers/SalmonTruffle.jpg",
    largeImage: "",
  },
];

export default function AppetizersCold() {
  return (
     <div>
       <p className="text-xl font-black m-2 pb-5">Appetizers (Cold)</p>
       <div className="grid grid-cols-1 grid-rows-5 gap-4 w-auto lg:grid-cols-2">
         {coldAppetizers.map((item) => (
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
