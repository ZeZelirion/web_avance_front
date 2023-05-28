import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async(event) => {
    event.preventDefault();
    try {
      const response = await axios.post("ma route d'api", {
        email,
        password,
      });
      const token = await response.data.token;
      if (token) {
        localStorage.setItem("token_key", token)
        console.log("Token is set in localStorage");
        navigate('/')
      } else {
        console.log("Pas de token");
      }
    } catch (error) {
      console.error(error);
      alert('Une erreur est survenu, vérifiez vos identifiants.')
    }
  };

  return (
    <main className="page login">
      <section>
        <div className="logo-container">
          <img src="/logo.png" alt="" className="logo" />
        </div>
        <h2 className="h2">Se connecter</h2>
        <form>
          <div className="form_element">
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="form_element">
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <button type="submit" onClick={login}>Se connecter</button>
        </form>
        <button onClick={() => {navigate(-1)}}>Retour</button>
        {/* <p onClick={() => {navigate('/register')}}>Vous n’avez pas de compte? Créer un compte</p> */}
      </section>
    </main>
  );
}
