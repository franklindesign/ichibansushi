import Card from "@/app/components/card";

const NoImage = "../static/items/NoImage.jpg";

const pochaMenu = [
  {
    id: 1,
    name: "Chicken Skewers",
    description: " ",
    price: "11.95",
    image: "../static/items/pocha/chickenSkewers.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Beef (Galbi) Skewers",
    description: " ",
    price: "16.95",
    image: "../static/items/pocha/beefSkewers.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Scallop Skewers",
    description: " ",
    price: "16.95",
    image: "../static/items/pocha/scallopSkewers.jpg",
    largeImage: "",
  },
   {
    id: 4,
    name: "Shrimp Skewers",
    description: " ",
    price: "16.95",
    image: "../static/items/pocha/shrimpSkewers.jpg",
    largeImage: "",
  },
   {
    id: 5,
    name: "Squid Skewers",
    description: " ",
    price: "11.95",
    image: "../static/items/pocha/squidSkewers.jpg",
    largeImage: "",
  },
   {
    id: 6,
    name: "Topokki",
    description: " ",
    price: "16.95",
    image: "../static/items/pocha/topokki.jpg",
    largeImage: "",
  },
   {
    id: 7,
    name: "Kimchi Gyoza",
    description: " ",
    price: "9.95",
    image: "../static/items/pocha/kimchiGyoza.jpg",
    largeImage: "",
  },
   {
    id: 8,
    name: "Spicy Chicken Wings",
    description: "10 pieces of spicy chicken wings",
    price: "24.95",
    image: "../static/items/pocha/spicyChickenWings.jpg",
    largeImage: "",
  },
   {
    id: 9,
    name: "Fried Chicken Wings",
    description: "10 pieces of fried chicken wings",
    price: "24.95",
    image: "../static/items/pocha/chickenWings.jpg",
    largeImage: "",
  },
   {
    id: 10,
    name: "Fish Cake Soup (Oden Tang)",
    description: "",
    price: "16.95",
    image: "../static/items/pocha/fishCakeSoup.jpg",
    largeImage: "",
  },
  
];

export default function PochaMenu() {
  return (
    <div>
      <p className="text-xl font-black m-2 pb-5">Pocha Menu</p>
     <div className="p-2 text-sm"> <p>Pocha Hours:</p>
      <p>Monday - Thursday & Sunday: 6 PM - 10 PM</p>
            <p>Friday & Saturday: 6 PM - 10:30 PM</p></div>
                  
      <div className="grid grid-cols-1 grid-rows-5 gap-4 w-auto lg:grid-cols-2">
        {pochaMenu.map((item) => (
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
