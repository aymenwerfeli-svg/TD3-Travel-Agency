import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Destinations from "./components/Destinations/Destinations";
import Favoris from "./components/Favoris/Favoris";
import Contact from "./components/Contact/Contact";
import Reservation from "./components/Reservation/Reservation";
import Footer from "./components/Footer/Footer";

function App() {
  const [page, setPage] = useState("accueil");
  const [wishlist, setWishlist] = useState<number[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("wishlist") || "[]");
    } catch {
      return [];
    }
  });
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Persist dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

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
    <div className="max-w-xl mx-auto min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 shadow-2xl">
      <Header
        page={page}
        setPage={setPage}
        darkMode={darkMode}
        toggleDark={() => setDarkMode(!darkMode)}
        wishlistCount={wishlist.length}
      />

      <main className="flex-1">
        {page === "accueil" && (
          <>
            <Banner setPage={setPage} />
            <Destinations wishlist={wishlist} onToggleFav={toggleFav} setPage={setPage} />
          </>
        )}
        {page === "destinations" && (
          <Destinations wishlist={wishlist} onToggleFav={toggleFav} setPage={setPage} />
        )}
        {page === "favoris" && (
          <Favoris wishlist={wishlist} onToggleFav={toggleFav} setPage={setPage} />
        )}
        {page === "contact" && <Contact />}
        {page === "reservation" && <Reservation />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
