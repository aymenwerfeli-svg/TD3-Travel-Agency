import { useState } from "react";
import type { FormEvent } from "react";
import styles from "./Login.module.css";

type Errors = {
  email?: string;
  password?: string;
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSuccess(false);
    const newError: Errors = {};

    if (!email.trim()) {
      newError.email = "Veuillez saisir votre email";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newError.email = "Adresse email invalide";
    }

    if (!password.trim()) {
      newError.password = "Veuillez saisir votre mot de passe";
    } else if (password.length < 8) {
      newError.password = "Le mot de passe doit contenir au moins 8 caractères";
    } else if (!/[A-Z]/.test(password)) {
      newError.password = "Le mot de passe doit contenir au moins une lettre majuscule";
    } else if (!/[0-9]/.test(password)) {
      newError.password = "Le mot de passe doit contenir au moins un chiffre";
    } else if (!/[^A-Za-z0-9]/.test(password)) {
      newError.password = "Le mot de passe doit contenir au moins un caractère spécial";
    }

    setError(newError);

    if (Object.keys(newError).length === 0) {
      console.log("Login:", { email: email.trim(), password });
      setSuccess(true);
    }
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.card} onSubmit={handleSubmit} noValidate>
        <h2 className={styles.title}>Connexion</h2>
        <p className={styles.subtitle}>Accédez à votre espace voyageur</p>

        {success && (
          <p className={styles.success} role="status">
            Connexion réussie !
          </p>
        )}

        <label className={styles.label} htmlFor="email">Email</label>
        <input
          className={`${styles.input} ${error.email ? styles.inputError : ""}`}
          type="email"
          id="email"
          placeholder="choisir votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error.email && <p className={styles.fieldError}>{error.email}</p>}

        <label className={styles.label} htmlFor="password">Mot de passe</label>
        <input
          className={`${styles.input} ${error.password ? styles.inputError : ""}`}
          type="password"
          id="password"
          placeholder="******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error.password && <p className={styles.fieldError}>{error.password}</p>}

        <button className={styles.button} type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;