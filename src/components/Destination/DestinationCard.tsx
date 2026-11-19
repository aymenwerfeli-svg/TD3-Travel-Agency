import { Heart, Star, Clock, MapPin, ChevronRight } from 'lucide-react';
import type { Destination } from '../../types';

type Props = {
  destination: Destination;
  isFav: boolean;
  onToggleFav: (id: number) => void;
  onSelect: (dest: Destination) => void;
};

function DestinationCard({ destination, isFav, onToggleFav, onSelect }: Props) {
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden animate-slide-up hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-40" onClick={() => onSelect(destination)}>
        <img
          src={destination.image}
          alt={destination.nom}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Wishlist button */}
        <button
          onClick={(e) => { e.stopPropagation(); onToggleFav(destination.id); }}
          className={`absolute top-2 right-2 p-1.5 rounded-full backdrop-blur-sm transition-all duration-200 ${
            isFav ? 'bg-red-500 text-white' : 'bg-white/70 text-gray-600 hover:bg-red-500 hover:text-white'
          }`}
        >
          <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
        </button>

        {/* Category badge */}
        <span className="absolute top-2 left-2 bg-primary/90 text-white text-xs font-semibold px-2 py-0.5 rounded-full backdrop-blur-sm">
          {destination.categorie}
        </span>
      </div>

      {/* Content */}
      <div className="p-3" onClick={() => onSelect(destination)}>
        {/* Name & Country */}
        <div className="flex items-start justify-between mb-1">
          <div>
            <h2 className="font-bold text-gray-900 dark:text-white text-base">{destination.nom}</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {destination.pays}
            </p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          {[1,2,3,4,5].map((s) => (
            <Star
              key={s}
              className={`w-3 h-3 ${s <= Math.round(destination.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">{destination.rating} ({destination.reviews})</span>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mb-3">
          <Clock className="w-3 h-3" />
          <span>{destination.duree}</span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400 dark:text-gray-500">À partir de</span>
            <p className="font-bold text-accent text-base">{destination.prix} DT</p>
          </div>
          <button className="bg-primary dark:bg-primary-dark text-white text-xs font-semibold px-3 py-1.5 rounded-xl flex items-center gap-1 hover:bg-accent transition-colors">
            Voir <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;
