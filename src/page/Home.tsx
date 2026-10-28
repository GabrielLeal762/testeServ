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

import { useSelector } from "react-redux";

import { RootState } from "@/redux";

function Home() {
  const { nome } = useSelector((state: RootState) => state.nameList);

  return (
    <>
      <Box>
        <Header />
        <Banner mensagem={`Bem vindo ${nome ?? "NomeUsuario"}`} />

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
              <StyledCard className="cards">
                <StyledH2 className="styledh">Cadastrar Usuário</StyledH2>
                <StyledH3 className="styledh">
                  Funcionalidade de Cadastro de Usuários diretamente na Page
                </StyledH3>
                <Link to={"/cadastro"}>
                  <StyledButton
                    className="buttons"
                    style={{ background: "#EF4444" }}
                  >
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
              <StyledCard className="cards">
                <StyledH2 className="styledh">Listar Usuários</StyledH2>
                <StyledH3 className="styledh">
                  Funcionalidade de listagem de usuários que estão cadastrados
                </StyledH3>
                <Link to={"/listaUsuarios"}>
                  <StyledButton
                    className="buttons"
                    style={{ background: "#F59E0B" }}
                  >
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
              <StyledCard className="cards">
                <StyledH2 className="styledh">Cadastrar Produtos</StyledH2>
                <StyledH3 className="styledh">
                  Funcionalidade de cadastro de produtos para ser utilizado.
                </StyledH3>
                <Link to={"/cadastroP"}>
                  <StyledButton
                    className="buttons"
                    style={{ background: "#10B981" }}
                  >
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
              <StyledCard className="cards">
                <StyledH2 className="styledh">Listar Produtos</StyledH2>
                <StyledH3 className="styledh">
                  Funcionalidade de listagem de produtos que estão cadastrados.
                </StyledH3>
                <Link to={"/listaProdutos"}>
                  <StyledButton
                    className="buttons"
                    style={{ background: "#3B82F6" }}
                  >
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
