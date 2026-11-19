import { Search, MapPin, TrendingUp } from 'lucide-react';

type Props = {
  setPage: (page: string) => void;
};

function Banner({ setPage }: Props) {
  return (
    <div className="relative bg-gradient-to-br from-primary via-sky-700 to-primary-dark dark:from-primary-dark dark:via-sky-900 dark:to-gray-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-8 text-6xl">✈</div>
        <div className="absolute top-12 right-6 text-4xl">🌍</div>
        <div className="absolute bottom-6 left-16 text-3xl">🗺</div>
      </div>

      <div className="relative px-5 py-10 text-center animate-fade-in">
        <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">
          ✈ Explorez le monde
        </p>
        <h1 className="text-3xl font-extrabold leading-tight mb-3">
          Le monde<br />
          <span className="text-accent">vous attend !</span>
        </h1>
        <p className="text-white/80 text-sm mb-6">
          Découvrez des destinations de rêve à des prix inoubliables
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-6 mb-6 text-center">
          <div>
            <p className="text-xl font-bold text-accent">50+</p>
            <p className="text-xs text-white/70">Destinations</p>
          </div>
          <div className="w-px bg-white/20" />
          <div>
            <p className="text-xl font-bold text-accent">10k+</p>
            <p className="text-xs text-white/70">Voyageurs</p>
          </div>
          <div className="w-px bg-white/20" />
          <div>
            <p className="text-xl font-bold text-accent">4.9★</p>
            <p className="text-xs text-white/70">Note moyenne</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={() => setPage('destinations')}
            className="bg-accent hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 flex items-center gap-2 shadow-lg"
          >
            <MapPin className="w-4 h-4" />
            Voir les destinations
          </button>
          <button
            onClick={() => setPage('contact')}
            className="bg-white/15 hover:bg-white/25 backdrop-blur text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 flex items-center gap-2 border border-white/20"
          >
            <TrendingUp className="w-4 h-4" />
            Offres spéciales
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
