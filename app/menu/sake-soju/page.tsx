import Card from "@/app/components/card";

const sakes = [
  {
    id: 1,
    name: "House Hot Sake",
    description: " ",
    price: 8,
    image: "../static/items/sake/sake.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Plum Hot Sake (Large)",
    description: " ",
    price: 14,
    image: "../static/items/sake/plumHotSake.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Soju",
    description: "Original (375ml)",
    price: 13,
    image: "../static/items/sake/jinro_chamisul.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Soju (Flavored)",
    description: "Peach, Pineapple (375ml)",
    price: 13,
    image: "../static/items/sake/chamisul_flavored.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "Nigori Sake",
    description: "original and sakura, cold sake, (300ml)",
    price: 13,
    image: "../static/items/sake/nigori.jpg",
    largeImage: "",
  },
  {
    id: 6,
    name: "Nigori Sakura Sake",
    description: "Sakura sake, (300ml)",
    price: 13,
    image: "../static/items/sake/nigoriSakuraSake.jpg",
    largeImage: "",
  },
  {
    id: 7,
    name: "Ginjo Sake",
    description: "cold sake, (300ml)",
    price: 14,
    image: "../static/items/sake/ginjo.jpg",
    largeImage: "",
  },
  {
    id: 8,
    name: "Hana Flavored Sake",
    description: "Pineapple or white peach.",
    price: 14,
    image: "../static/items/sake/flavored-sake.jpg",
    largeImage: "",
  },
  {
    id: 9,
    name: "Kikusui (Small)",
    description: "cold sake, (300ml)",
    price: 18,
    image: "../static/items/sake/kikusui.jpg",
    largeImage: "",
  },
  {
    id: 10,
    name: "Kikusui (Large)",
    description: "cold sake, (720ml)",
    price: 42,
    image: "../static/items/sake/kikusui_large.jpg",
    largeImage: "",
  },

  {
    id: 11,
    name: "Tatenokawa 3 Peaks Sake",
    description: "cold sake, junmai-daiginjo (720ml)",
    price: 75,
    image: "../static/items/sake/tatenokawa.jpg",
    largeImage: "",
  },
  {
    id: 12,
    name: "Kizakura Yuzu Sake (330ml)",
    description: "cold sake, (330ml)",
    price: 11,
    image: "../static/items/sake/yuzu.jpg",
    largeImage: "",
  },
];


export default function SakeSoju() {
  return (
            <div>
              <p className="text-xl font-black m-2 pb-5">Sake & Soju</p>
              <div className="grid grid-cols-1 grid-rows-5 gap-4 w-auto lg:grid-cols-2">
                {sakes.map((item) => (
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
