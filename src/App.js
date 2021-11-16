import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
