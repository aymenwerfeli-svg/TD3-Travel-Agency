import { Moon, Sun, Plane, Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

type Props = {
  page: string;
  setPage: (page: string) => void;
  darkMode: boolean;
  toggleDark: () => void;
  wishlistCount: number;
};

function Header({ page, setPage, darkMode, toggleDark, wishlistCount }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'favoris', label: 'Favoris' },
    { id: 'reservation', label: 'Réservation' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="bg-primary dark:bg-primary-dark text-white shadow-lg sticky top-0 z-50">
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => setPage('accueil')} className="flex items-center gap-2 font-bold text-lg">
          <Plane className="w-6 h-6 text-accent" />
          <span>Travel<span className="text-accent">Agency</span></span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-4 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`relative transition-colors hover:text-accent ${
                page === item.id ? 'text-accent' : 'text-white/80'
              }`}
            >
              {item.label}
              {item.id === 'favoris' && wishlistCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-accent text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
              {page === item.id && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Right buttons */}
        <div className="flex items-center gap-2">
          {/* Wishlist */}
          <button
            onClick={() => setPage('favoris')}
            className="relative p-2 hover:text-accent transition-colors"
          >
            <Heart className={`w-5 h-5 ${page === 'favoris' ? 'fill-accent text-accent' : ''}`} />
            {wishlistCount > 0 && (
              <span className="absolute top-0 right-0 bg-accent text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Dark mode toggle */}
          <button
            onClick={toggleDark}
            className="p-2 hover:text-accent transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Mobile menu */}
          <button
            className="sm:hidden p-2 hover:text-accent transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="sm:hidden bg-primary-dark px-4 pb-4 flex flex-col gap-3 text-sm font-medium animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setPage(item.id); setMenuOpen(false); }}
              className={`text-left py-2 border-b border-white/10 transition-colors hover:text-accent ${
                page === item.id ? 'text-accent' : 'text-white/80'
              }`}
            >
              {item.label} {item.id === 'favoris' && wishlistCount > 0 ? `(${wishlistCount})` : ''}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
