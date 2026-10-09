import styled, { Theme } from "styled-components";
import { Container, Grid } from "@mui/material";
import { StyledNavLink } from "./typegraphyes";
import Rem from "@/utils/pxToRem";
import { StyledNavText } from "./typegraphyes";
import { StyledLogo } from "./Logo";
import { useState } from "react";
import { StyledButton } from "./ButtonProps";
import Cookies from "js-cookie";

const StyledHeader = styled.header<{ theme?: Theme }>`
  width: 100%;

  background-color: ${(props) => props.theme.appBackground};

  padding: ${Rem(20)} 0;

  border-bottom: ${Rem(1)} solid ${(props) => props.theme.appDefaultStroke};

  margin-bottom: ${Rem(10)};
`;

function Header() {
  const [flex, setFlex] = useState("none");

  const Logout = () => {
    if (confirm("Deseja fazer Logout")) {
      Cookies.remove("authorization");
      location.reload();
    }
  };
  return (
    <StyledHeader>
      <Container maxWidth="xl">
        <Grid
          size={{ xs: 12 }}
          sx={{
            display: {
              lg: "none",
              sm: "none",
              xs: "flex",
            },
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}

          onClick={() =>
            setFlex((prevValue) => (prevValue == "none" ? "flex" : "none"))
          }
        >
          <StyledLogo width={165} height={100} />
        </Grid>
        <Grid
          container
          sx={{
            display: {
              xs: `${flex}`,
              sm: "none",
              lg: "none",
            },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Grid size={{ xs: 2.4 }}>
            <StyledNavLink to="/home">
              <StyledNavText style={{ color: "#3B82F6" }}>Home</StyledNavText>
            </StyledNavLink>
          </Grid>
          <Grid size={{ xs: 2.4 }}>
            <StyledNavLink to="/cadastro">
              <StyledNavText style={{ color: "#10B981" }}>
                Cadastro
              </StyledNavText>
            </StyledNavLink>
          </Grid>
          <Grid size={{ xs: 2.4 }}>
            <StyledNavLink to="/listaUsuarios">
              <StyledNavText style={{ color: "#F59E0B" }}>
                Lista Usuários
              </StyledNavText>
            </StyledNavLink>
          </Grid>
          <Grid size={{ xs: 2.4 }}>
            <StyledNavLink to="/cadastroP">
              <StyledNavText style={{ color: "#EF4444" }}>
                Cadastro Produtos
              </StyledNavText>
            </StyledNavLink>
          </Grid>
          <Grid size={{ xs: 2.4 }}>
            <StyledNavLink to="/listaProdutos">
              <StyledNavText>Lista Produtos</StyledNavText>
            </StyledNavLink>
          </Grid>
          <Grid size={{ xs: 2.4 }}>
            <StyledNavLink to="/atualizar">
              <StyledNavText>AtualizarPessoa</StyledNavText>
            </StyledNavLink>
          </Grid>
          <Grid size={{ xs: 2.4 }}>
            <StyledNavLink to="/">
              <StyledNavText>
                <StyledButton onClick={Logout}>Logout</StyledButton>
              </StyledNavText>
            </StyledNavLink>
          </Grid>
        </Grid>
        <Grid
          container
          size={{ xs: 12, lg: 12 }}
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <StyledNavLink to="/home">
            <StyledNavText style={{ color: "#3B82F6" }}>Home</StyledNavText>
          </StyledNavLink>

          <StyledNavLink to="/cadastro">
            <StyledNavText style={{ color: "#10B981" }}>Cadastro</StyledNavText>
          </StyledNavLink>

          <StyledNavLink to="/listaUsuarios">
            <StyledNavText style={{ color: "#F59E0B" }}>
              Lista Usuários
            </StyledNavText>
          </StyledNavLink>

          <StyledNavLink to="/cadastroP">
            <StyledNavText style={{ color: "#EF4444" }}>
              Cadastro Produtos
            </StyledNavText>
          </StyledNavLink>

          <StyledNavLink to="/listaProdutos">
            <StyledNavText>Lista Produtos</StyledNavText>
          </StyledNavLink>

          <StyledNavLink to="/atualizar">
            <StyledNavText>Atualizar Pessoa</StyledNavText>
          </StyledNavLink>

          <StyledNavText>
            <StyledButton onClick={Logout}>Logout</StyledButton>
          </StyledNavText>
        </Grid>
      </Container>
    </StyledHeader>
  );
}

export default Header;
