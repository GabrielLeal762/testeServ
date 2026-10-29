import { Box, Container, Grid } from "@mui/material";

import {
  StyledLogo,
  Formulario,
  StyledBackgound,
  StyledNavText,
  StyledNavLink,
} from "@/Componentes";

import { type ChangeEvent, useEffect } from "react";
import { RequestPost, UseValidation } from "@/hooks";
import type { LoginData, PostData, JWToken } from "@/types";
import type { menssage } from "@/types/Formulario";

import Cookies from "js-cookie";
import { JwtTokenTime } from "@/utils";
import Rem from "@/utils/pxToRem";
import { jwtDecode } from "jwt-decode";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux";

function Login() {
  const navigate = useNavigate();

  const inputs = [
    { type: "email", placeholder: "Email" },
    { type: "password", placeholder: "Senha" },
  ];

  const { HandleChange, valid, formValues } = UseValidation(inputs);

  const { data, loading, error, UsePost } = RequestPost<LoginData, PostData>(
    "login",
  );

  const { email, menssage: mensagemRedux } = useSelector(
    (state: RootState) => state.createProfile,
  );

  // Preenche o email vindo do Redux
  useEffect(() => {
    HandleChange(0, email);
  }, [email, HandleChange]);

  // Envia os dados do login
  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await UsePost({
      email: String(formValues[0]),
      password: String(formValues[1]),
    });
  };

  // Mensagens do formulário
  const HandleMensagem = (): menssage => {
    if (error === 400) {
      return {
        type: "error",
        comentario: "Email ou senha inválidos",
      };
    }

    if (error) {
      return {
        type: "error",
        comentario: "Não foi possível fazer esta operação",
      };
    }

    return {
      type: "success",
      comentario: String(mensagemRedux ?? ""),
    };
  };

  // Salva o token e redireciona
  useEffect(() => {
    if (!data) return;

    console.log("RESPOSTA LOGIN:", data);

    const token = data.authorization.replace(/^Bearer\s+/i, "");

    const decode = jwtDecode<JWToken>(token);

    Cookies.set("authorization", data.authorization, {
      sameSite: "Strict",
      expires: JwtTokenTime(decode.exp),
    });

    if (Cookies.get("authorization")) {
      navigate("/home", { replace: true });
    }
  }, [data, navigate]);

  return (
    <Box>
      <Grid container>
        <Grid
          size={{ sm: 12, xs: 12 }}
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Container maxWidth="sm">
            <StyledBackgound>
              <Grid
                size={{ sm: 12, xs: 12 }}
                sx={{
                  marginTop: Rem(25),
                  marginBottom: Rem(25),
                  display: "flex",
                  justifyContent: {
                    sm: "center",
                    xs: "center",
                  },
                }}
              >
                <StyledLogo width={165} height={100} />
              </Grid>

              <Grid>
                <Formulario
                  input={inputs.map((input, index) => ({
                    type: input.type,
                    placeholder: input.placeholder,
                    value: formValues[index],
                    onChange: (e: ChangeEvent<HTMLInputElement>) => {
                      HandleChange(index, e.target.value);
                    },
                  }))}
                  label=""
                  button={[
                    {
                      type: "submit",
                      className: valid ? "primary" : "disabled",
                      disabled: !valid || loading,
                      children: loading ? "Enviando..." : "Enviar",
                      onClick: HandleSubmit,
                    },
                  ]}
                  msg={HandleMensagem()}
                />
              </Grid>

              <Grid>
                <StyledNavLink to="/register">
                  <StyledNavText style={{ color: "#10B981" }}>
                    Cadastro
                  </StyledNavText>
                </StyledNavLink>

                <StyledNavLink to="/">
                  <StyledNavText style={{ color: "#10B981" }}>
                    Login
                  </StyledNavText>
                </StyledNavLink>
              </Grid>
            </StyledBackgound>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
