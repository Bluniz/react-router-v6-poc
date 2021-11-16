import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function RequireAuth({ children }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.

    //! Em resumo, salvamos a localização onde ta para que após logar novamente, o usuário vá para onde estava.
    //? A documentação também diz que isso é ótimo pra experiência do usuário.
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}
