import Card from "@/app/components/card";


const beverages = [
  {
    id: 1,
    name: "Hot Tea",
    description: " ",
    price: "1.95",
    image: "../static/items/beverages/hottea.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Soda",
    description: "pepsi, diet pepsi, sierra mist, dr.pepper, lemonade",
    price: "2.95",
    image: "../static/items/beverages/soda.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Sparkling Water ",
    description: "Perrier",
    price: "3.50",
    image: "../static/items/beverages/perrier.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Bottled Water ",
    description: "VOSS OR FIJI",
    price: "3.50",
    image: "../static/items/beverages/bottle.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "Iced Tea",
    description: "Regular or Raspberry",
    price: "2.95",
    image: "../static/items/beverages/raspberry.jpg",
    largeImage: "",
  },

  {
    id: 6,
    name: "Ramune",
    description: "Japanese carbonated soft drink",
    price: 2.95,
    image: "../static/items/beverages/ramune.jpg",
    largeImage: "",
  },
  {
    id: 7,
    name: "Iced Green Tea",
    description: " ",
    price: 2.95,
    image: "../static/items/beverages/icedgreentea.jpg",
    largeImage: "",
  },
  {
    id: 8,
    name: "Arnold Palmer",
    description: "non-alcoholic ",
    price: 3.5,
    image: "../static/items/beverages/arnoldpalmer.jpg",
    largeImage: "",
  },
  {
    id: 10,
    name: "Shirley Temple",
    description: "non-alcoholic",
    price: 3.5,
    image: "../static/items/beverages/sherley.jpg",
    largeImage: "",
  },
  {
    id: 11,
    name: "Strawberry Lemonade",
    description: " ",
    price: 3.5,
    image: "../static/items/beverages/strawberrylemonade.jpg",
    largeImage: "",
  },
  {
    id: 12,
    name: "Apple Juice",
    description: " ",
    price: 2.95,
    image: "../static/items/beverages/applejuice.jpg",
    largeImage: "",
  },
];

export default function Beverages() {
   return (
       <div>
         <p className="text-xl font-black m-2 pb-5">Beverages</p>
         <div className="grid grid-cols-1 grid-rows-5 gap-4 w-auto lg:grid-cols-2">
           {beverages.map((item) => (
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
