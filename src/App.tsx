import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Accueil from "./components/Accueil/Accueil";
import Destinations from "./components/Destinations/Destinations";
import Apropos from "./components/Apropos/Apropos";
import Contact from "./components/Contact/Contact";
import Reservation from "./components/Reservation/Reservation";
import Login from "./components/login/login";
import Footer from "./components/Footer/Footer";

function App() {
  const [wishlist, setWishlist] = useState<number[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("wishlist") || "[]");
    } catch {
      return [];
    }
  });

  // Persist wishlist
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleFav = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
        {/* Partie 3 : Conserver le composant Header afin que le menu reste visible */}
        <Header />

        <main className="flex-1">
          {/* Partie 3 & Partie 6 : Déclarer les routes à l'intérieur de Routes */}
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route
              path="/destinations"
              element={
                <Destinations
                  wishlist={wishlist}
                  onToggleFav={toggleFav}
                  setPage={() => {}}
                />
              }
            />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
