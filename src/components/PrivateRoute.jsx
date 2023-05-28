import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function PrivateRoute({page}) {
  const isLoggedIn = localStorage.getItem("token_key");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  return (
    isLoggedIn ? (page) : (console.log("Impossible d'accéder à cette page sans être connecté"))
  );
}