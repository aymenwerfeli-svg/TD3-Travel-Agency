import santorin from '../assets/santorini.jpg';
import bali from '../assets/bali.jpg';
import rome from '../assets/rome.jpg';
import istanbul from '../assets/istanbul.jpg';
import type { Destination } from '../types';

export const destinations: Destination[] = [
  {
    id: 1,
    image: santorin,
    nom: 'Santorin',
    pays: 'Grèce',
    description: 'Découvrez les magnifiques paysages des îles grecques avec leurs maisons blanches et leurs dômes bleus iconiques face à la mer Égée.',
    prix: 1200,
    rating: 4.9,
    reviews: 324,
    categorie: 'Plage',
    duree: '7 jours',
    highlights: ['Coucher de soleil à Oia', 'Croisière en caldera', 'Plage de Kamari', 'Vins locaux'],
  },
  {
    id: 2,
    image: bali,
    nom: 'Bali',
    pays: 'Indonésie',
    description: 'Profitez des plages paradisiaques, des temples majestueux et des rizières en terrasses de la magnifique île des Dieux.',
    prix: 1800,
    rating: 4.8,
    reviews: 512,
    categorie: 'Aventure',
    duree: '10 jours',
    highlights: ['Temple Uluwatu', 'Rizières de Tegalalang', 'Surf à Kuta', 'Spa traditionnel'],
  },
  {
    id: 3,
    image: rome,
    nom: 'Rome',
    pays: 'Italie',
    description: 'Découvrez la Ville Éternelle avec ses monuments historiques millénaires, sa gastronomie raffinée et son art incomparable.',
    prix: 950,
    rating: 4.7,
    reviews: 289,
    categorie: 'Culture',
    duree: '5 jours',
    highlights: ['Colisée', 'Vatican', 'Fontaine de Trevi', 'Pasta authentique'],
  },
  {
    id: 4,
    image: istanbul,
    nom: 'Istanbul',
    pays: 'Turquie',
    description: 'Explorez la ville entre deux continents avec ses mosquées grandioses, ses bazars colorés et sa cuisine épicée inoubliable.',
    prix: 1100,
    rating: 4.8,
    reviews: 401,
    categorie: 'Culture',
    duree: '6 jours',
    highlights: ['Sainte-Sophie', 'Grand Bazar', 'Croisière sur le Bosphore', 'Baklava'],
  },
];
