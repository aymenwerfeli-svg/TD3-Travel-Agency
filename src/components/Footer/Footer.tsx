import { Plane, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#173d55] text-white py-6 px-4 mt-auto">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 font-bold text-lg mb-2">
          <Plane className="w-5 h-5 text-[#f49f20]" />
          <span>Travel<span className="text-[#f49f20]">Agency</span></span>
        </div>
        <p className="text-white/70 text-sm mb-4">
          Votre partenaire de voyage de confiance pour explorer le monde
        </p>
        <div className="flex justify-center gap-6 text-sm text-white/60 mb-4">
          <Link to="/" className="hover:text-[#f49f20] transition-colors">Accueil</Link>
          <Link to="/destinations" className="hover:text-[#f49f20] transition-colors">Destinations</Link>
          <Link to="/apropos" className="hover:text-[#f49f20] transition-colors">À propos</Link>
          <Link to="/contact" className="hover:text-[#f49f20] transition-colors">Contact</Link>
          <Link to="/reservation" className="hover:text-[#f49f20] transition-colors">Réservation</Link>
          <Link to="/login" className="hover:text-[#f49f20] transition-colors">Connexion</Link>
        </div>
        <p className="text-white/40 text-xs flex items-center justify-center gap-1">
          © 2026 TravelAgency — Fait avec <Heart className="w-3 h-3 fill-red-400 text-red-400" /> pour les passionnés de voyage
        </p>
      </div>
    </footer>
  );
}

export default Footer;
