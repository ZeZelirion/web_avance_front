import { useNavigate } from "react-router-dom";

export default function Accueil() {
  const navigate = useNavigate();

  const handleTokenClick = () => {
    const token = localStorage.getItem("token_key");
    console.log(token);
  }

  const handleLoginClick = () => {
    navigate('/login');
  }

  return (
    <main className="page accueil">
      <div className="inner">
        <h1>Accueil</h1>
        <button onClick={() => {handleTokenClick()}}>
          Token
        </button>
        <button onClick={() => {handleLoginClick()}}>
          Page Login
        </button>
      </div>
    </main>
  );
}
