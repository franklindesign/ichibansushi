import Card from "@/app/components/card";

const NoImage = "../static/items/NoImageSushi.jpg";

const specialSushi = [
  
  {
    id: 1,
    name: "Big Scallop",
    description: "Large sizes of scallops",
    price: "8.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 2,
    name: "Cajun Tuna",
    description: "Spicy Cajun style sashimi tuna with avocado, ponzu and chili oil.",
    price: "7.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 3,
    name: "Special Escolar (Ono)",
    description: "Lemon pepper with fried onion",
    price: "3.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 4,
    name: "Spicy Salmon (Special)",
    description:
      "Salmon with avocado and chili oil",
    price: "6.95",
    image: NoImage,
    largeImage: "",
  },

  {
    id: 5,
    name: "Spicy Tuna (Special)",
    description: "Tuna with avocado and chili oil",
    price: "7.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 6,
    name: "Spicy Yellowtail (Special)",
    description:
      "Yellowtail with jalapeno yuzu sauce",
    price: "6.95",
    image: NoImage,
    largeImage: "",
  },
  
];

export default function SpecialSushi() {
   return (
      <div>
        <p className="text-xl font-black m-2 pb-5">Special Sushi</p>
        <div className="grid grid-cols-1 grid-rows-5 gap-4 w-auto lg:grid-cols-2">
          {specialSushi.map((item) => (
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
