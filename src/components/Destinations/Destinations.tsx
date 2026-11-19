import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { destinations as allDestinations } from '../../data/destinations';
import Destination from '../Destination/Destination';

type Props = {
  wishlist: number[];
  onToggleFav: (id: number) => void;
  setPage: (page: string) => void;
};

const categories = ['Tous', 'Plage', 'Culture', 'Aventure'];

function Destinations({ onToggleFav }: Props) {
  const [search, setSearch] = useState('');
  const [categorie, setCategorie] = useState('Tous');
  const [sortBy, setSortBy] = useState<'prix' | 'rating'>('rating');

  const filtered = allDestinations
    .filter((d) =>
      (categorie === 'Tous' || d.categorie === categorie) &&
      (d.nom.toLowerCase().includes(search.toLowerCase()) ||
       d.pays.toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) => sortBy === 'prix' ? a.prix - b.prix : b.rating - a.rating);

  return (
    <section className="p-4 dark:bg-gray-900 min-h-screen">
      {/* Search bar */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Rechercher une destination..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm"
        />
      </div>

      {/* Filter row */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-4 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategorie(cat)}
            className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              categorie === cat
                ? 'bg-primary text-white shadow'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary/10'
            }`}
          >
            {cat}
          </button>
        ))}

        {/* Sort */}
        <div className="ml-auto flex items-center gap-1">
          <SlidersHorizontal className="w-3.5 h-3.5 text-gray-400" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'prix' | 'rating')}
            className="text-xs bg-transparent text-gray-600 dark:text-gray-400 focus:outline-none"
          >
            <option value="rating">Note</option>
            <option value="prix">Prix</option>
          </select>
        </div>
      </div>

      {/* Results count */}
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
        {filtered.length} destination{filtered.length > 1 ? 's' : ''} trouvée{filtered.length > 1 ? 's' : ''}
      </p>

      {/* Grid TD4 - Cartes interactives avec Destination.tsx */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filtered.map((dest) => (
            <Destination
              key={dest.id}
              id={dest.id}
              image={dest.image}
              nom={dest.nom}
              pays={dest.pays}
              description={dest.description}
              prix={dest.prix}
              onToggleFav={onToggleFav}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-400 dark:text-gray-600">
          <p className="text-4xl mb-3">🔍</p>
          <p className="text-sm">Aucune destination trouvée</p>
        </div>
      )}
    </section>
  );
}

export default Destinations;
