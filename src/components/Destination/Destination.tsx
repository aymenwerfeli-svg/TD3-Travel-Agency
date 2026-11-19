import { useState } from "react";

type Props = {
  image: string;
  nom: string;
  pays: string;
  description: string;
  prix: number;
};

function Destination(props: Props) {
  const [afficher, setAfficher] = useState(false);

  function generateDetail() {
    setAfficher(!afficher);
  }

  return (
    <div>
      <img
        src={props.image}
        alt={props.nom}
        className="w-full h-48 object-cover rounded-2xl"
      />
      <div>
        <h2 className="mt-3 font-bold text-base text-gray-900">{props.nom}</h2>
        <p className="text-xs text-gray-500">{props.pays}</p>

        {afficher && (
          <p className="text-sm text-gray-600 mt-1">{props.description}</p>
        )}

        <h3 className="mt-1 font-semibold text-orange-500">{props.prix} DT</h3>

        <button
          onClick={generateDetail}
          className="mt-2 px-4 py-1.5 text-sm font-semibold text-white bg-[#17405a] rounded-lg hover:bg-orange-500 transition-colors"
        >
          {afficher ? "Masquer les détails" : "Afficher les détails"}
        </button>
      </div>
    </div>
  );
}

export default Destination;