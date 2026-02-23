import Card from "@/app/components/card";


const beerAndWines = [
  {
    id: 0,
    name: "Kizakura Beer",
    description: "Lucky Cat, Lucky Cat, Matcha IPA",
    price: 11,
    image: "../static/items/wineBeer/beerKizakura.jpg",
    largeImage: "",
  },
  {
    id: 1,
    name: "Beer Bottles",
    description: "Kirin, Kirin Light, Sapporo, and Asahi",
    price: 8,
    image: "../static/items/wineBeer/beerBottles.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Draft Sapporo Beer (Glass)",
    description: "draft beer, glass",
    price: 4.95,
    image: "../static/items/wineBeer/beerGlass.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Draft Sapporo Beer (Pitcher)",
    description: "draft beer, pitcher",
    price: 15,
    image: "../static/items/wineBeer/beerPitcher.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Draft Sapporo Beer (Tower)",
    description: "draft beer, pitcher",
    price: 28,
    image: "../static/items/wineBeer/beerTower.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "Rose (Glass)",
    description: "white wine, glass",
    price: 8,
    image: "../static/items/wineBeer/whiteWineGlass.jpg",
    largeImage: "",
  },
  {
    id: 6,
    name: "Rose (Bottle)",
    description: "white wine, glass",
    price: 28,
    image: "../static/items/wineBeer/whiteWineGlass.jpg",
    largeImage: "",
  },
  {
    id: 7,
    name: "Chardonnay (Glass)",
    description: "Kendall Jackson, white wine, glass",
    price: 8,
    image: "../static/items/wineBeer/whiteWineGlass.jpg",
    largeImage: "",
  },
  {
    id: 8,
    name: "Chardonnay (Bottle)",
    description: "Kendall Jackson, white wine, bottle",
    price: 28,
    image: "../static/items/wineBeer/whiteWineBottle.jpg",
    largeImage: "",
  },
  {
    id: 10,
    name: "Plum Wine",
    description: "white wine, glass",
    price: 8,
    image: "../static/items/wineBeer/whiteWineGlass.jpg",
    largeImage: "",
  },
  {
    id: 11,
    name: "Cabernet Sauvignon (Glass)",
    description: "Clos Du Bois, red wine, glass",
    price: 11,
    image: "../static/items/wineBeer/redWineGlass.jpg",
    largeImage: "",
  },
  {
    id: 12,
    name: "Cabernet Sauvignon (Bottle)",
    description: "Clos Du Bois, red wine, bottle",
    price: 36,
    image: "../static/items/wineBeer/redWineBottle.jpg",
    largeImage: "",
  },
  {
    id: 13,
    name: "Pinot Noir (Glass)",
    description: "red wine, glass",
    price: 9,
    image: "../static/items/wineBeer/redWineGlass.jpg",
    largeImage: "",
  },
  {
    id: 14,
    name: "Pinot Noir (Bottle)",
    description: "red wine, glass",
    price: 32,
    image: "../static/items/wineBeer/pinotBottle.jpg",
    largeImage: "",
  },
];

export default function BeerWine() {
  return (
      <div>
        <p className="text-xl font-black m-2 pb-5">Beer & Wine</p>
        <div className="grid grid-cols-1 grid-rows-5 gap-4 w-auto lg:grid-cols-2">
          {beerAndWines.map((br) => (
            <div key={br.id}>
              <Card
                itemName={{ text: `${br.name}` }}
                itemDescription={{ text: `${br.description}` }}
                itemPrice={br.price}
                itemImage={{ image: `${br.image}` }}
              ></Card>
            </div>
          ))}
        </div>
      </div>
    );
}
