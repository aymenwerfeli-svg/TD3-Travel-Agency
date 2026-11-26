import { NavLink, Link } from "react-router-dom";
import { Plane } from "lucide-react";
import styles from "./Header.module.css";

function Header() {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink;

  return (
    <header className={styles.header}>
      {/* Logo vers la page d'accueil */}
      <Link to="/" className={styles.logo}>
        <Plane className="w-6 h-6 text-[#f49f20]" />
        <span>Travel<span>Agency</span></span>
      </Link>

      {/* Menu de navigation avec NavLink pour mettre en évidence la page active */}
      <nav className={styles.nav}>
        <NavLink to="/" end className={getNavLinkClass}>
          Accueil
        </NavLink>

        <NavLink to="/destinations" className={getNavLinkClass}>
          Destinations
        </NavLink>

        <NavLink to="/apropos" className={getNavLinkClass}>
          À propos
        </NavLink>

        <NavLink to="/contact" className={getNavLinkClass}>
          Contact
        </NavLink>

        <NavLink to="/reservation" className={getNavLinkClass}>
          Réservation
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.loginBtn}`
              : `${styles.navLink} ${styles.loginBtn}`
          }
        >
          Connexion
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
