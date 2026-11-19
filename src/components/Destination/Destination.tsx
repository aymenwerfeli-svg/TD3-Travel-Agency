import { useState } from "react";
import styles from "./Destination.module.css";

export type DestinationProps = {
  id?: number;
  image: string;
  nom: string;
  pays: string;
  description: string;
  prix: number;
  onToggleFav?: (id: number) => void;
};

function Destination({
  id,
  image,
  nom,
  pays,
  description,
  prix,
  onToggleFav,
}: DestinationProps) {
  // ── Activité 1 : État pour afficher ou masquer les détails (initialisé à false)
  const [afficherDetails, setAfficherDetails] = useState<boolean>(false);

  // ── Activité 2 : État pour marquer la destination en favori (initialisé à false)
  const [estFavori, setEstFavori] = useState<boolean>(false);

  // ── Bonus TD 4 : Message si l'utilisateur clique une 2ème fois sur le bouton favoris
  const [messageBonus, setMessageBonus] = useState<string>("");

  // Inverser la valeur de afficherDetails au clic
  const handleToggleDetails = () => {
    setAfficherDetails((prev) => !prev);
  };

  // Activité 2 + Bonus : Gestion du clic sur le bouton favoris
  const handleToggleFavori = () => {
    if (estFavori) {
      // Bonus : Si la destination est déjà dans les favoris, afficher le message
      setMessageBonus("Cette destination est déjà dans vos favoris !");
    } else {
      setEstFavori(true);
      setMessageBonus("");
      if (onToggleFav && id !== undefined) {
        onToggleFav(id);
      }
    }
  };

  // ── Défi facultatif : Réinitialiser l'état des détails et des favoris
  const handleReset = () => {
    if (estFavori && onToggleFav && id !== undefined) {
      onToggleFav(id);
    }
    setAfficherDetails(false);
    setEstFavori(false);
    setMessageBonus("");
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={nom} className={styles.image} />

      <div className={styles.content}>
        <h2 className={styles.title}>{nom}</h2>
        <p className={styles.pays}>{pays}</p>
        <h3 className={styles.prix}>{prix} DT</h3>

        {/* Activité 1 : Affichage conditionnel de la description */}
        {afficherDetails && (
          <p className={styles.description}>{description}</p>
        )}

        {/* Bonus : Message d'avertissement si déjà en favoris */}
        {messageBonus && (
          <p className={styles.messageBonus}>{messageBonus}</p>
        )}

        {/* Activité 3 : Groupe de boutons avec espacement */}
        <div className={styles.buttonGroup}>
          {/* Activité 1 : Bouton pour afficher/masquer les détails */}
          <button
            onClick={handleToggleDetails}
            className={styles.btnDetails}
          >
            {afficherDetails ? "Masquer les détails" : "Voir les détails"}
          </button>

          {/* Activité 2 & 3 : Bouton favoris avec style actif/inactif */}
          <button
            onClick={handleToggleFavori}
            className={`${styles.btnFavori} ${
              estFavori ? styles.btnFavoriActif : ""
            }`}
          >
            {estFavori ? "❤️ Dans mes favoris" : "♡ Ajouter aux favoris"}
          </button>

          {/* Défi : Bouton réinitialiser */}
          <button
            onClick={handleReset}
            className={styles.btnReset}
            title="Remettre l'affichage à zéro"
          >
            ↺ Réinitialiser
          </button>
        </div>
      </div>
    </div>
  );
}

export default Destination;
