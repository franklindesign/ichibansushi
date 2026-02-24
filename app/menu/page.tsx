import MostLikedItems from "../components/mostLikedItems";
import AppetizersCold from "./appetizers-cold/page";
import AppetizersWarm from "./appetizers-warm/page";
import BakedRolls from "./baked-rolls/page";
import BeerWine from "./beer-wine/page";
import Bento from "./bento-box/page";
import Beverages from "./beverages/page";
import Dessert from "./dessert/page";
import Entree from "./entree/page";
import FreshRolls from "./fresh-rolls/page";
import HandRolls from "./hand-rolls/page";
import Inari from "./inari-sushi/page";
import KidsMenu from "./kids-menu/page";
import Nigiri from "./nigiri-sushi/page";
import PochaMenu from "./pocha/page";
import RegularRolls from "./regular-rolls/page";
import SakeSoju from "./sake-soju/page";
import Salad from "./salad/page";
import Sashimi from "./sashimi/page";
import SideOrders from "./side-orders/page";
import SoupNoodles from "./soup-noodles/page";
import SpecialSushi from "./special-sushi/page";
import SushiBurritos from "./sushi-burritos/page";
import TempuraRolls from "./tempura-rolls/page";

export default function Menu() {
  return (
    <div>
      <MostLikedItems></MostLikedItems>

      <div className="md:hidden">
        <p className="pt-16 font-extrabold text-2xl">All Items</p>
        <div className="pt-12">
          <PochaMenu />
        </div>
        <div className="pt-12">
          <Inari />
        </div>
        <div className="pt-12">
          <FreshRolls />
        </div>
        <div className="pt-12">
          <BakedRolls />
        </div>
        <div className="pt-12">
          <TempuraRolls />
        </div>
        <div className="pt-12">
          <SushiBurritos />
        </div>
        <div className="pt-12">
          <RegularRolls />
        </div>
        <div className="pt-12">
          <HandRolls />
        </div>
        <div className="pt-12">
          <Nigiri />
        </div>
        <div className="pt-12">
          <SpecialSushi />
        </div>
        <div className="pt-12">
          <Sashimi />
        </div>
        <div className="pt-12">
          <AppetizersCold />
        </div>
        <div className="pt-12">
          <AppetizersWarm />
        </div>
        <div className="pt-12">
          <Salad />
        </div>
        <div className="pt-12">
          <SoupNoodles />
        </div>
        <div className="pt-12">
          <Entree />
        </div>
        <div className="pt-12">
          <SideOrders />
        </div>
        <div className="pt-12">
          <Bento />
        </div>
        <div className="pt-12">
          <KidsMenu />
        </div>
        <div className="pt-12">
          <Beverages />
        </div>
        <div className="pt-12">
          <SakeSoju />
        </div>
        <div className="pt-12">
          <BeerWine />
        </div>
        <div className="pt-12">
          <Dessert />
        </div>
      </div>
    </div>
  );
}
