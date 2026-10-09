import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";

import Cookies from "js-cookie";
//PAGE
import {
  Cadastro,
  Home,
  Login,
  ListUsuarios,
  CadastroP,
  ListP,
  CadastroI,
  Atualizar,
  Registration,
} from "@/page";
function App() {
  const SecureRoute = () => {
    const cookiesAuth = Cookies.get("authorization");
    if (!cookiesAuth) {
      alert("Login necessario");
      return <Navigate to={"/"} replace />;
    }
    return <Outlet />;
  };
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}>
            Login
          </Route>
          <Route path="/cadastroI" element={<CadastroI />}>
            CadastroI
          </Route>
          <Route path="/register" element={<Registration />}>
            Registration
          </Route>

          <Route element={<SecureRoute />}>
            <Route path="/home" element={<Home />}>
              Home
            </Route>

            <Route path="/cadastro" element={<Cadastro />}>
              Cadastro
            </Route>
            <Route path="/listaUsuarios" element={<ListUsuarios />}>
              Cadastro
            </Route>
            <Route path="/cadastroP" element={<CadastroP />}>
              Cadastro
            </Route>
            <Route path="/listaProdutos" element={<ListP />}>
              Cadastro
            </Route>
            <Route path="/atualizar" element={<Atualizar />}>
              Cadastro
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
