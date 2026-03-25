import Image from "next/image";

const imageStyle = {
  borderRadius: '16px'
} 

export default function Bento() {
  return (
    <div>
      <p className="text-xl font-black m-2 pb-5">Ichiban Bento Box</p>
      <div className="pb-10">
        <Image
        	loading="lazy"
        alt="ichiban bento box"
          src="/static/items/bentobox/bentobox_web.jpg"
         height={400}
          width={1220}
          quality={80}
          style={imageStyle}
        ></Image>
         
        <div className="text-xs lg:text-lg mt-6">
          <p>Bento box with 2 entree items.*^</p>
          <p>* Served with steamed rice, soup, salad & tempura.</p>
          <p>^ (No substitutes and double order sushi & sashimi.)</p>
        </div>

        <p className="pt-4 text-lg">Available entrees to choose from:</p>
        <ul className="pt-4 text-sm lg:text-lg">
          <li>Chicken (Grilled Chicken with Teriyaki Sauce)</li>
          <li>Beef (Grilled Beef with Teriyaki Sauce)</li>
          <li> Salmon (Broiled Fresh Salmon with Teriyaki Sauce)</li>{" "}
          <li>
            Pork Cutlet (Tender Pork Breaded and Deep Fried with Tonkatsu Sauce)
          </li>
          <li>Bulgogi (Marinated Korean Style Beef)</li>
          <li>
            Sesame Chicken (Lightly Fried Chicken Marinated in Sesame Sauce)
          </li>
          <li> Sushi (5 Piece Chef's Choice)</li>
          <li> Sashimi (6 Piece Chef's Choice)</li>
          <li>California Roll Spicy Tuna</li>
        </ul>
        <p className="pt-4">
          <strong> $23.95</strong>
        </p>
      </div>
      <div className="mt-6">
        <p className="text-xl font-black m-2 pb-5">Korean Bento Box</p>
      </div>

      <div>
        <Image
        alt="korean bento box"
          src="/static/items/bentobox/koreanBentoBox.jpg"
          height={400}
          width={1220}
          quality={80}
          style={imageStyle}
        ></Image>
      </div>
      <p className="mt-6">
        Korean style BBQ ribs includes miso soup, salad, rice, tempura, and
        gyoza.
      </p>
      <div className="pt-4">
        <p>
          <strong>$24.95</strong>
        </p>
      </div>
    </div>
  );
}
