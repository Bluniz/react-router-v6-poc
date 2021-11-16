import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

export function Login() {
  const [username, setUsername] = useState("");

  const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    signIn(username, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <p>Você não está logado!</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={handleChange}
          placeholder="Digite seu nome"
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
