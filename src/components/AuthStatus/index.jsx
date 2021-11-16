import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

import "./styles.css";

export function AuthStatus() {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.user) {
    return null;
  }

  return (
    <div>
      <button
        className="auth-button"
        onClick={() => {
          auth.signOut(() => {
            navigate("/");
          });
        }}
      >
        Sair
      </button>
    </div>
  );
}
