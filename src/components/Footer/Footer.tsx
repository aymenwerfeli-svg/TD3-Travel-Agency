import { Plane, Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-primary dark:bg-primary-dark text-white py-5 px-4">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 font-bold text-base mb-1">
          <Plane className="w-5 h-5 text-accent" />
          Travel<span className="text-accent">Agency</span>
        </div>
        <p className="text-white/60 text-xs mb-3">
          Votre partenaire de voyage de confiance
        </p>
        <div className="flex justify-center gap-6 text-xs text-white/50 mb-3">
          <span>À propos</span>
          <span>Confidentialité</span>
          <span>CGU</span>
        </div>
        <p className="text-white/40 text-xs flex items-center justify-center gap-1">
          © 2026 TravelAgency — Fait avec <Heart className="w-3 h-3 fill-red-400 text-red-400" /> en Tunisie
        </p>
      </div>
    </footer>
  );
}

export default Footer;
