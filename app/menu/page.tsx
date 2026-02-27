import HorizonalScrollNav from "../components/horizonalScrollNav";
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
import Inarizushi from "./inarizushi/page";
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
      <div className="z-49 sticky top-20">
        <HorizonalScrollNav></HorizonalScrollNav>
      </div>
      <MostLikedItems></MostLikedItems>

      <div className="md:hidden">
        <p className="pt-16 font-extrabold text-2xl">All Items</p>
        <div className="pt-12 scroll-mt-25" id="PochaMenu">
          <PochaMenu />
        </div>
        <div className="pt-12 scroll-mt-25" id="Inarizushi">
          <Inarizushi />
        </div>
        <div className="pt-12 scroll-mt-25" id="FreshRolls">
          <FreshRolls />
        </div>
        <div className="pt-12 scroll-mt-25" id="BakedRolls">
          <BakedRolls />
        </div>
        <div className="pt-12 scroll-mt-25" id="TempuraRolls">
          <TempuraRolls />
        </div>
        <div className="pt-12 scroll-mt-25" id="SushiBurritos">
          <SushiBurritos />
        </div>
        <div className="pt-12 scroll-mt-25" id="RegularRolls">
          <RegularRolls />
        </div>
        <div className="pt-12 scroll-mt-25" id="HandRolls">
          <HandRolls />
        </div>
        <div className="pt-12 scroll-mt-25" id="Nigiri">
          <Nigiri />
        </div>
        <div className="pt-12 scroll-mt-25" id="SpecialSushi">
          <SpecialSushi />
        </div>
        <div className="pt-12 scroll-mt-25" id="Sashimi">
          <Sashimi />
        </div>
        <div className="pt-12 scroll-mt-25" id="AppetizersCold">
          <AppetizersCold />
        </div>
        <div className="pt-12 scroll-mt-25" id="AppetizersWarm">
          <AppetizersWarm />
        </div>
        <div className="pt-12 scroll-mt-25" id="Salad">
          <Salad />
        </div>
        <div className="pt-12 scroll-mt-25" id="SoupNoodles">
          <SoupNoodles />
        </div>
        <div className="pt-12 scroll-mt-25" id="Entree">
          <Entree />
        </div>
        <div className="pt-12 scroll-mt-25" id="SideOrders">
          <SideOrders />
        </div>
        <div className="pt-12 scroll-mt-25" id="Bento">
          <Bento />
        </div>
        <div className="pt-12 scroll-mt-25" id="KidsMenu">
          <KidsMenu />
        </div>
        <div className="pt-12 scroll-mt-25" id="Beverages">
          <Beverages />
        </div>
        <div className="pt-12 scroll-mt-25" id="SakeSoju">
          <SakeSoju />
        </div>
        <div className="pt-12 scroll-mt-25" id="BeerWine">
          <BeerWine />
        </div>
        <div className="pt-12 scroll-mt-25" id="Dessert">
          <Dessert />
        </div>
      </div>
    </div>
  );
}
