import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Reservation.module.css';
import { destinations } from '../../data/destinations';

// ─── Types ───────────────────────────────────────────────────────────────────
interface FormData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  destination: string;
  dateDepart: string;
  dateRetour: string;
  nombrePersonnes: string;
  typeVoyage: string;
  commentaire: string;
}

interface FormErrors {
  nom?: string;
  prenom?: string;
  email?: string;
  telephone?: string;
  destination?: string;
  dateDepart?: string;
  dateRetour?: string;
  nombrePersonnes?: string;
  typeVoyage?: string;
}

// ─── Valeur initiale ──────────────────────────────────────────────────────────
const initialForm: FormData = {
  nom: '',
  prenom: '',
  email: '',
  telephone: '',
  destination: '',
  dateDepart: '',
  dateRetour: '',
  nombrePersonnes: '1',
  typeVoyage: '',
  commentaire: '',
};

// ─── Validation ───────────────────────────────────────────────────────────────
function validate(form: FormData): FormErrors {
  const errors: FormErrors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const telRegex = /^[0-9]{8,15}$/;
  const today = new Date().toISOString().split('T')[0];

  if (!form.nom.trim()) errors.nom = 'Le nom est requis.';
  if (!form.prenom.trim()) errors.prenom = 'Le prénom est requis.';
  if (!form.email.trim()) {
    errors.email = "L'email est requis.";
  } else if (!emailRegex.test(form.email)) {
    errors.email = 'Email invalide.';
  }
  if (!form.telephone.trim()) {
    errors.telephone = 'Le téléphone est requis.';
  } else if (!telRegex.test(form.telephone)) {
    errors.telephone = 'Numéro invalide (8 à 15 chiffres).';
  }
  if (!form.destination) errors.destination = 'Choisissez une destination.';
  if (!form.dateDepart) {
    errors.dateDepart = 'La date de départ est requise.';
  } else if (form.dateDepart < today) {
    errors.dateDepart = 'La date de départ doit être future.';
  }
  if (!form.dateRetour) {
    errors.dateRetour = 'La date de retour est requise.';
  } else if (form.dateRetour <= form.dateDepart) {
    errors.dateRetour = 'La date de retour doit être après le départ.';
  }
  if (!form.nombrePersonnes || Number(form.nombrePersonnes) < 1) {
    errors.nombrePersonnes = 'Au moins 1 personne.';
  }
  if (!form.typeVoyage) errors.typeVoyage = 'Choisissez un type de voyage.';

  return errors;
}

// ─── Composant principal ──────────────────────────────────────────────────────
function Reservation() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [recap, setRecap] = useState<FormData | null>(null);

  // Calculer le prix total
  const selectedDest = destinations.find((d) => d.nom === form.destination);
  const prixTotal =
    selectedDest && form.nombrePersonnes
      ? selectedDest.prix * Number(form.nombrePersonnes)
      : null;

  // Mise à jour champ
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Effacer l'erreur du champ modifié
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Soumission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setRecap({ ...form });
    setSubmitted(true);
    setShowPopup(true);
  };

  // Réinitialisation
  const handleReset = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
    setRecap(null);
  };

  return (
    <div className={styles.container}>
      <h2>✈️ Formulaire de Réservation</h2>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <p style={{ color: '#64748b', fontSize: '14px' }}>
          Déjà un compte ?{' '}
          <Link
            to="/login"
            style={{
              color: '#0fb9b1',
              fontWeight: 'bold',
              textDecoration: 'underline',
            }}
          >
            Se connecter
          </Link>
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate>

        {/* Nom */}
        <div>
          <label htmlFor="nom">Nom *</label>
          <input
            id="nom"
            name="nom"
            type="text"
            placeholder="Ex : Ben Ali"
            value={form.nom}
            onChange={handleChange}
            className={errors.nom ? styles.inputError : ''}
          />
          {errors.nom && <span className={styles.errorMessage}>{errors.nom}</span>}
        </div>

        {/* Prénom */}
        <div>
          <label htmlFor="prenom">Prénom *</label>
          <input
            id="prenom"
            name="prenom"
            type="text"
            placeholder="Ex : Mohamed"
            value={form.prenom}
            onChange={handleChange}
            className={errors.prenom ? styles.inputError : ''}
          />
          {errors.prenom && <span className={styles.errorMessage}>{errors.prenom}</span>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="exemple@email.com"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? styles.inputError : ''}
          />
          {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
        </div>

        {/* Téléphone */}
        <div>
          <label htmlFor="telephone">Téléphone *</label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            placeholder="Ex : 55123456"
            value={form.telephone}
            onChange={handleChange}
            className={errors.telephone ? styles.inputError : ''}
          />
          {errors.telephone && <span className={styles.errorMessage}>{errors.telephone}</span>}
        </div>

        {/* Destination */}
        <div>
          <label htmlFor="destination">Destination *</label>
          <select
            id="destination"
            name="destination"
            value={form.destination}
            onChange={handleChange}
            className={errors.destination ? styles.inputError : ''}
          >
            <option value="">-- Choisir une destination --</option>
            {destinations.map((d) => (
              <option key={d.id} value={d.nom}>
                {d.nom} — {d.pays} ({d.prix} DT/pers.)
              </option>
            ))}
          </select>
          {errors.destination && <span className={styles.errorMessage}>{errors.destination}</span>}
        </div>

        {/* Date départ */}
        <div>
          <label htmlFor="dateDepart">Date de départ *</label>
          <input
            id="dateDepart"
            name="dateDepart"
            type="date"
            value={form.dateDepart}
            onChange={handleChange}
            className={errors.dateDepart ? styles.inputError : ''}
          />
          {errors.dateDepart && <span className={styles.errorMessage}>{errors.dateDepart}</span>}
        </div>

        {/* Date retour */}
        <div>
          <label htmlFor="dateRetour">Date de retour *</label>
          <input
            id="dateRetour"
            name="dateRetour"
            type="date"
            value={form.dateRetour}
            onChange={handleChange}
            className={errors.dateRetour ? styles.inputError : ''}
          />
          {errors.dateRetour && <span className={styles.errorMessage}>{errors.dateRetour}</span>}
        </div>

        {/* Nombre de personnes */}
        <div>
          <label htmlFor="nombrePersonnes">Nombre de personnes *</label>
          <input
            id="nombrePersonnes"
            name="nombrePersonnes"
            type="number"
            min="1"
            max="20"
            value={form.nombrePersonnes}
            onChange={handleChange}
            className={errors.nombrePersonnes ? styles.inputError : ''}
          />
          {errors.nombrePersonnes && (
            <span className={styles.errorMessage}>{errors.nombrePersonnes}</span>
          )}
          {prixTotal !== null && (
            <span style={{ color: '#0b9992', fontSize: 13, marginTop: 4 }}>
              💰 Prix total estimé : <strong>{prixTotal} DT</strong>
            </span>
          )}
        </div>

        {/* Type de voyage — Radio buttons */}
        <div>
          <label>Type de voyage *</label>
          <div className={styles.radioGroup}>
            {['Solo', 'Couple', 'Famille', 'Groupe'].map((type) => (
              <label key={type}>
                <input
                  type="radio"
                  name="typeVoyage"
                  value={type}
                  checked={form.typeVoyage === type}
                  onChange={handleChange}
                />
                {type}
              </label>
            ))}
          </div>
          {errors.typeVoyage && <span className={styles.errorMessage}>{errors.typeVoyage}</span>}
        </div>

        {/* Commentaire */}
        <div>
          <label htmlFor="commentaire">Commentaire (optionnel)</label>
          <textarea
            id="commentaire"
            name="commentaire"
            placeholder="Demandes spéciales, préférences..."
            value={form.commentaire}
            onChange={handleChange}
          />
        </div>

        {/* Boutons */}
        <div className={styles.buttons}>
          <button type="submit" className={styles.submitButton}>
            Réserver ✈️
          </button>
          <button type="button" className={styles.resetButton} onClick={handleReset}>
            Réinitialiser
          </button>
        </div>
      </form>

      {/* ── Récapitulatif ── */}
      {submitted && recap && (
        <div className={styles.recap}>
          <h3>📋 Récapitulatif de votre réservation</h3>
          <p>
            <strong>Voyageur :</strong> {recap.prenom} {recap.nom}
          </p>
          <p>
            <strong>Email :</strong> {recap.email}
          </p>
          <p>
            <strong>Téléphone :</strong> {recap.telephone}
          </p>
          <p>
            <strong>Destination :</strong> {recap.destination}
          </p>
          <p>
            <strong>Départ :</strong> {recap.dateDepart} → <strong>Retour :</strong>{' '}
            {recap.dateRetour}
          </p>
          <p>
            <strong>Personnes :</strong> {recap.nombrePersonnes}
          </p>
          <p>
            <strong>Type de voyage :</strong> {recap.typeVoyage}
          </p>
          {recap.commentaire && (
            <p>
              <strong>Commentaire :</strong> {recap.commentaire}
            </p>
          )}
          {prixTotal !== null && (
            <p>
              <strong>💰 Total estimé :</strong>{' '}
              <span style={{ color: '#0b9992', fontWeight: 700 }}>{prixTotal} DT</span>
            </p>
          )}
        </div>
      )}

      {/* ── Popup de confirmation ── */}
      {showPopup && (
        <div className={styles.overlay}>
          <div className={styles.popup}>
            <h3>✅ Réservation confirmée !</h3>
            <p>
              Merci <strong>{recap?.prenom} {recap?.nom}</strong> !<br />
              Votre demande de réservation pour <strong>{recap?.destination}</strong> a bien
              été enregistrée. Notre équipe vous contactera sous 24h.
            </p>
            <button onClick={() => setShowPopup(false)}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Reservation;
