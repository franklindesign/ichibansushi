export default function Bento() {
  return (
    <div>
      <p className="text-xl font-black m-2 pb-5">Ichiban Bento Box</p>
      <div className="pb-10">
        <img
          src="../static/items/bentobox/bentobox_web.jpg"
          style={{ width: "100%", marginTop: 40, marginBottom: 20 }}
        ></img>
        <p>Bento box with 2 entree items.*^</p>
        <div className="text-xs lg:text-lg">
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
      <div>
        <p className="text-xl font-black m-2 pb-5">Korean Bento Box</p>
      </div>

      <div>
        <img
          src="../static/items/bentobox/koreanBentoBox.jpg"
          style={{ width: "100%", marginTop: 40, marginBottom: 20 }}
        ></img>
      </div>
      <p>
        Korean style BBQ ribs includes miso soup, salad, rice, tempura, and
        gyoza.
      </p>
      <div className="pt-4">
        {" "}
        <p>
          <strong>$24.95</strong>
        </p>
      </div>
    </div>
  );
}
