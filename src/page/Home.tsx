import {
  Header,
  Banner,
  StyledCard,
  StyledH2,
  StyledH3,
  StyledButton,
} from "@/Componentes";
import { Box, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { JWToken, ListUsers } from "@/types";
import { RequestGet } from "@/hooks";

function Home() {
  const { data } = RequestGet<ListUsers>("usuarios");

  const token = Cookies.get("authorization");

  let nomeU = "NomeUsuario";
  if (token && data) {
    const decoded = jwtDecode<JWToken>(token);

    const usuarioEncontrado = data.usuarios.find(
      (usuario) => usuario.email === decoded.email,
    );
    if (usuarioEncontrado) {
      nomeU = usuarioEncontrado.nome;
      console.log("Id", nomeU);
    }
  }

  return (
    <>
      <Box>
        <Header />
        <Banner mensagem={`Bem vindo ${nomeU}`} />

        <Container maxWidth="lg">
          <Grid
            container
            spacing={4}
            size={{ sm: 12, xs: 12 }}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid
              size={{ sm: 3, xs: 12 }}
              sx={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <StyledCard>
                <StyledH2>Cadastrar Usuário</StyledH2>
                <StyledH3>
                  Funcionalidade de Cadastro de Usuários diretamente na Page
                </StyledH3>
                <Link to={"/cadastro"}>
                  <StyledButton style={{ background: "#EF4444" }}>
                    Cadastrar
                  </StyledButton>
                </Link>
              </StyledCard>
            </Grid>
            <Grid
              size={{ sm: 3, xs: 12 }}
              sx={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <StyledCard>
                <StyledH2>Listar Usuários</StyledH2>
                <StyledH3>
                  Funcionalidade de listagem de usuários que estão cadastrados
                </StyledH3>
                <Link to={"/listaUsuarios"}>
                  <StyledButton style={{ background: "#F59E0B" }}>
                    Listar
                  </StyledButton>
                </Link>
              </StyledCard>
            </Grid>

            <Grid
              size={{ sm: 3, xs: 12 }}
              sx={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <StyledCard>
                <StyledH2>Cadastrar Produtos</StyledH2>
                <StyledH3>
                  Funcionalidade de cadastro de produtos para ser utilizado.
                </StyledH3>
                <Link to={"/cadastroP"}>
                  <StyledButton style={{ background: "#10B981" }}>
                    Cadastrar
                  </StyledButton>
                </Link>
              </StyledCard>
            </Grid>

            <Grid
              size={{ sm: 3, xs: 12 }}
              sx={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <StyledCard>
                <StyledH2>Listar Produtos</StyledH2>
                <StyledH3>
                  Funcionalidade de listagem de produtos que estão cadastrados.
                </StyledH3>
                <Link to={"/listaProdutos"}>
                  <StyledButton style={{ background: "#3B82F6" }}>
                    Listar
                  </StyledButton>
                </Link>
              </StyledCard>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
export default Home;
