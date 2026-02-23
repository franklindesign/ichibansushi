import Card from "@/app/components/card";

const NoImage = "../static/items/NoImageNoodles.jpg";

const soupAndNoodles = [
  {
    id: 1,
    name: "Tempura Udon",
    description: "shrimp tempura in noodle soup",
    price: 14.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 2,
    name: "Chicken Udon",
    description: "chicken in noodle soup",
    price: 14.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 3,
    name: "Beef Udon",
    description: "beef in noodle soup",
    price: 14.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 4,
    name: "Seafood Udon",
    description: "various seafood in noodle soup",
    price: 14.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 5,
    name: "Tonkotsu Ramen",
    description: "Choose regular or spicy flavor",
    price: 14.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 7,
    name: "Miso Ramen",
    description: "Choose regular or spicy flavor",
    price: 14.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 8,
    name: "Seafood Ramen",
    description: "shrimp, jumbo scallop, mussel, calamari, vegetables",
    price: 14.95,
    image: NoImage,
    largeImage: "",
  },

  {
    id: 9,
    name: "Yaki Soba (Vegetables)",
    description: "pan fried Japanese thin noodles with vegetables",
    price: 12.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 10,
    name: "Yaki Soba (Chicken)",
    description: "pan fried Japanese thin noodles with chicken",
    price: 15.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 11,
    name: "Yaki Soba (Beef)",
    description: "pan fried Japanese thin noodles with beef",
    price: 15.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 12,
    name: "Yaki Soba (Shrimp)",
    description: "pan fried Japanese thin noodles with shrimp",
    price: 15.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 13,
    name: "Sukiyaki",
    description: "beef, vegetables, tofu, yam noodle, egg with rice",
    price: 19.95,
    image: "../static/items/soupnoodles/sukiyaki.jpg",
    largeImage: "",
  },
  {
    id: 14,
    name: "Spicy Cajun Seafood",
    description:
      "Lobster tail, jumbo scallop, shrimp, green mussels, calamari and yam noodle.",
    price: 28,
    image: "../static/items/soupnoodles/spicycajunseafood.jpg",
    largeImage: "",
  },
  {
    id: 15,
    name: "Udon Pasta",
    description: "shrimp, jumbo scallops, mussel and calamari.",
    price: 19.95,
    image: "../static/items/soupnoodles/udonpasta.jpg",
    largeImage: "",
  },
  {
    id: 16,
    name: "Noodle Combo",
    description:
      "Choose udon or ramen, with 1 entree: sushi, sashimi, California cut roll or spicy tuna cut roll.",
    price: 20.95,
    image: "../static/items/soupnoodles/noodlecombo.jpg",
    largeImage: "",
  },
] 

export default function SoupNoodles() {
  return (
     <div>
       <p className="text-xl font-black m-2 pb-5">Soup & Noodles</p>
       <div className="grid grid-cols-1 grid-rows-5 gap-4 w-auto lg:grid-cols-2">
         {soupAndNoodles.map((item) => (
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
