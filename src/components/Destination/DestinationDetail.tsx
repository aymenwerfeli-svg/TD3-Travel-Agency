import { X, Star, Clock, MapPin, Heart, CheckCircle } from 'lucide-react';
import type { Destination } from '../../types';

type Props = {
  destination: Destination;
  isFav: boolean;
  onToggleFav: (id: number) => void;
  onClose: () => void;
  onContact: () => void;
};

function DestinationDetail({ destination, isFav, onToggleFav, onClose, onContact }: Props) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center animate-fade-in"
         onClick={onClose}>
      <div
        className="bg-white dark:bg-gray-900 w-full max-w-xl rounded-t-3xl max-h-[90vh] overflow-y-auto animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative h-56">
          <img src={destination.image} alt={destination.nom} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            onClick={() => onToggleFav(destination.id)}
            className={`absolute top-4 left-4 p-2 rounded-full transition-all ${
              isFav ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-600'
            }`}
          >
            <Heart className={`w-5 h-5 ${isFav ? 'fill-current' : ''}`} />
          </button>
          <div className="absolute bottom-4 left-4">
            <h2 className="text-white text-2xl font-extrabold">{destination.nom}</h2>
            <p className="text-white/80 text-sm flex items-center gap-1">
              <MapPin className="w-4 h-4" /> {destination.pays}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Stats row */}
          <div className="flex gap-4 mb-5">
            <div className="flex items-center gap-1 text-sm">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} className={`w-4 h-4 ${s <= Math.round(destination.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
              ))}
              <span className="text-gray-600 dark:text-gray-400 font-semibold ml-1">{destination.rating}</span>
              <span className="text-gray-400 text-xs">({destination.reviews} avis)</span>
            </div>
          </div>

          <div className="flex gap-3 mb-4">
            <span className="bg-primary/10 dark:bg-primary/30 text-primary dark:text-sky-300 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              <Clock className="w-3 h-3" /> {destination.duree}
            </span>
            <span className="bg-orange-100 dark:bg-orange-900/30 text-accent text-xs font-semibold px-3 py-1 rounded-full">
              {destination.categorie}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
            {destination.description}
          </p>

          {/* Highlights */}
          <h3 className="font-bold text-gray-900 dark:text-white mb-3">Points forts ✨</h3>
          <div className="grid grid-cols-2 gap-2 mb-6">
            {destination.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                {h}
              </div>
            ))}
          </div>

          {/* Price + Book */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
            <div>
              <p className="text-xs text-gray-400">Prix par personne</p>
              <p className="text-2xl font-extrabold text-accent">{destination.prix} DT</p>
            </div>
            <button
              onClick={onContact}
              className="bg-accent hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-2xl transition-all shadow-lg"
            >
              Réserver maintenant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationDetail;
