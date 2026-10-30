import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";

import Cookies from "js-cookie";

// PAGE
import {
  Cadastro,
  Home,
  Login,
  ListUsuarios,
  CadastroP,
  ListP,
  Atualizar,
  Registration,
} from "@/page";

// Componente de proteção das rotas
const SecureRoute = () => {
  const cookiesAuth = Cookies.get("authorization");

  if (!cookiesAuth) {
    alert("Login necessario");
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Registration />} />

        {/* Rotas protegidas */}
        <Route element={<SecureRoute />}>
          <Route path="/home" element={<Home />} />

          <Route path="/cadastro" element={<Cadastro />} />

          <Route path="/listaUsuarios" element={<ListUsuarios />} />

          <Route path="/cadastroP" element={<CadastroP />} />

          <Route path="/listaProdutos" element={<ListP />} />

          <Route path="/atualizar" element={<Atualizar />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
