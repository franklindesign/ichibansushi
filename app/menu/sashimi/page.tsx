import Card from "@/app/components/card";

const NoImage = "../static/items/NoImageSashimi.jpg";
const sashimis = [
  {
    id: 1,
    name: "Albacore (sashimi)",
    description: "5-6 pieces",
    price: "16.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 2,
    name: "Big Scallop (sashimi)",
    description: "5-6 pieces",
    price: "19.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 3,
    name: "Cajun Tuna (sashimi)",
    description: "5-6 pieces",
    price: "16.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 4,
    name: "Escolar (ono sashimi)",
    description: "5-6 pieces",
    price: "16.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 5,
    name: "Halibut (sashimi)",
    description: "5-6 pieces",
    price: "18.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 6,
    name: "Octopus (sashimi)",
    description: "5-6 pieces",
    price: "14.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 7,
    name: "Tuna (sashimi)",
    description: "5-6 pieces",
    price: "18.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 8,
    name: "Salmon (sashimi)",
    description: "5-6 pieces",
    price: "16.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 9,
    name: "Yellowtail (sashimi)",
    description: "5-6 pieces",
    price: "18.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 10,
    name: "Halibut (sashimi)",
    description: "6 pieces",
    price: "18.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 11,
    name: "Chu-toro (sashimi)",
    description: "6 pieces",
    price: "24.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 12,
    name: "Otoro (sashimi)",
    description: "6 pieces",
    price: "29.95",
    image: NoImage,
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
