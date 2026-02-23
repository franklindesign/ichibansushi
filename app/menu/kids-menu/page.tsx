import Card from "@/app/components/card";

const NoImage = "../static/items/NoImage.jpg";

const kidsMenu = [
  {
    id: 1,
    name: "Kid's Chicken Bowl",
    description: " ",
    price: 7.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 2,
    name: "Kid's Beef Bowl",
    description: " ",
    price: 9.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 3,
    name: "Kid's Bulgogi Bowl",
    description: " ",
    price: 9.95,
    image: NoImage,
    largeImage: "",
  },
];

export default function KidsMenu() {
  return (
    <div>
      <p className="text-xl font-black m-2 pb-5">Kids Menu</p>
      <div className="grid grid-cols-1 grid-rows-5 gap-4 w-auto lg:grid-cols-2">
        {kidsMenu.map((item) => (
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
