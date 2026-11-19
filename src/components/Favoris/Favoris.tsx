import { Heart, Trash2 } from 'lucide-react';
import { destinations as allDestinations } from '../../data/destinations';
import DestinationCard from '../Destination/DestinationCard';
import type { Destination } from '../../types';
import { useState } from 'react';
import DestinationDetail from '../Destination/DestinationDetail';

type Props = {
  wishlist: number[];
  onToggleFav: (id: number) => void;
  setPage: (page: string) => void;
};

function Favoris({ wishlist, onToggleFav, setPage }: Props) {
  const [selected, setSelected] = useState<Destination | null>(null);
  const favDestinations = allDestinations.filter((d) => wishlist.includes(d.id));

  return (
    <section className="p-4 dark:bg-gray-900 min-h-screen">
      <div className="flex items-center gap-2 mb-4">
        <Heart className="w-5 h-5 text-red-500 fill-red-500" />
        <h2 className="font-bold text-gray-900 dark:text-white text-base">Mes Favoris</h2>
        <span className="bg-red-100 text-red-500 text-xs font-bold px-2 py-0.5 rounded-full ml-auto">
          {favDestinations.length}
        </span>
      </div>

      {favDestinations.length > 0 ? (
        <div className="grid grid-cols-2 gap-3">
          {favDestinations.map((dest) => (
            <DestinationCard
              key={dest.id}
              destination={dest}
              isFav={true}
              onToggleFav={onToggleFav}
              onSelect={setSelected}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-400 dark:text-gray-600 animate-fade-in">
          <Heart className="w-16 h-16 mx-auto mb-4 opacity-30" />
          <p className="text-lg font-semibold mb-1">Aucun favori</p>
          <p className="text-sm mb-4">Ajoutez des destinations à vos favoris</p>
          <button
            onClick={() => setPage('destinations')}
            className="bg-primary text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-accent transition-colors"
          >
            Explorer les destinations
          </button>
        </div>
      )}

      {selected && (
        <DestinationDetail
          destination={selected}
          isFav={wishlist.includes(selected.id)}
          onToggleFav={onToggleFav}
          onClose={() => setSelected(null)}
          onContact={() => { setSelected(null); setPage('contact'); }}
        />
      )}
    </section>
  );
}

export default Favoris;
