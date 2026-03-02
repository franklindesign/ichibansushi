import Card from "@/app/components/card";
 
const sashimis = [
  {
    id: 1,
    name: "Albacore (5-6 pieces)",
    description: "",
    price: "16.95",
    image: "../static/items/sashimi/albacore-sashimi.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Big Scallop (5-6 pieces)",
    description: " ",
    price: "19.95",
    image: "../static/items/sashimi/scallop-sashimi.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Cajun Tuna (5-6 pieces)",
    description: " ",
    price: "16.95",
    image: "../static/items/sashimi/cajuntuna-sashimi.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Escolar (5-6 pieces)",
    description: " ",
    price: "16.95",
    image: "../static/items/sashimi/escolar-sashimi.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "Halibut (5-6 pieces)",
    description: " ",
    price: "18.95",
    image: "../static/items/sashimi/halibut-sashimi.jpg",
    largeImage: "",
  },
  {
    id: 6,
    name: "Octopus (5-6 pieces)",
    description: " ",
    price: "14.95",
    image: "../static/items/sashimi/octopus-sashimi.jpg",
    largeImage: "",
  },
  {
    id: 7,
    name: "Tuna (5-6 pieces)",
    description: " ",
    price: "18.95",
    image: "../static/items/sashimi/tuna-sashimi.jpg",
    largeImage: "",
  },
  {
    id: 8,
    name: "Salmon (5-6 pieces)",
    description: "",
    price: "16.95",
    image: "../static/items/sashimi/salmon-sashimi.jpg",
    largeImage: "",
  },
  {
    id: 9,
    name: "Yellowtail (5-6 pieces)",
    description: " ",
    price: "18.95",
    image: "../static/items/sashimi/yellowtail-sashimi.jpg",
    largeImage: "",
  },
  {
    id: 10,
    name: "Chu-toro (5-6 pieces)",
    description: "(ask for availability)",
    price: "24.95",
    image: "../static/items/sashimi/chu-toro-sashimi.jpg",
    largeImage: "",
  },
  {
    id: 11,
    name: "Otoro (5-6 pieces)",
    description: "",
    price: "29.95",
    image: "../static/items/sashimi/otoro-sashimi.jpg",
    largeImage: "",
  },
];

export default function Sashimi() {
  return (
         <div>
           <p className="text-xl font-black m-2 pb-5">Sashimi</p>
           <div className="grid grid-cols-1 grid-rows-5 gap-4 w-auto lg:grid-cols-2">
             {sashimis.map((item) => (
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
