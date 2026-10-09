import {
  Formulario,
  StyledNavText,
  StyledNavLink,
  StyledBackgound,
  StyledLogo,
} from "@/Componentes";
import { menssage } from "@/types/Formulario";
import { ChangeEvent, useEffect } from "react";
import { UseValidation, RequestGet } from "@/hooks";
import { RequestPut } from "@/hooks";
import { CadastroUsuario, CadastroData, ListUsers, JWToken } from "@/types";
import { Grid, Box, Container } from "@mui/material";
import { useState } from "react";
import Rem from "@/utils/pxToRem";

import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

function Atualizar() {
  const [check, setChecked] = useState(false);
  const inputs = [
    { type: "text", placeholder: "Nome" },
    { type: "email", placeholder: "Email" },
    { type: "password", placeholder: "Senha" },
    {
      type: "checkbox",
      checked: check,
    },
  ];

  const { HandleChange, valid, formValues } = UseValidation(inputs);

  const { data: ValorList } = RequestGet<ListUsers>("usuarios");

  const token = Cookies.get("authorization");

  const [id, setId] = useState("");

  useEffect(() => {
    if (ValorList && token) {
      const decode = jwtDecode<JWToken>(token);
      const usuarioEncontrado = ValorList.usuarios.find((usuario) => {
        return usuario.email == decode.email;
      });
      if (usuarioEncontrado) {
        formValues[0] = usuarioEncontrado.nome;
        formValues[1] = usuarioEncontrado.email;
        formValues[2] = usuarioEncontrado.password;
        setChecked(true);
        setId(usuarioEncontrado._id);
      }
    }
  }, [ValorList, token]);

  const { loading, error, UsePut } = RequestPut<CadastroData, CadastroUsuario>(
    `usuarios/${id}`,
  );

  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await UsePut({
      nome: String(formValues[0]),
      email: String(formValues[1]),
      password: String(formValues[2]),
      administrador: String(check),
    });
  };

  const HandleMensagem = (): menssage => {
    if (!error)
      return { type: "success", comentario: "Atualizado feito com sucesso" };
    switch (error) {
      case 400:
        return { type: "error", comentario: "Email e senha já cadastrados" };

      default:
        return {
          type: "error",
          comentario: "Não foi possivel fazer esta operação",
        };
    }
  };

  return (
    <Box>
      <Grid container>
        <Grid
          size={{ sm: 12, xs: 12 }}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Container maxWidth="sm">
            <StyledBackgound>
              <Grid
                size={{ sm: 12, xs: 12 }}
                sx={{
                  marginTop: Rem(25),
                  marginBottom: Rem(25),
                  display: "flex",
                  justifyContent: { sm: "center", xs: "center" },
                }}
              >
                <StyledLogo width={165} height={100} />
              </Grid>

              <Grid>
                <Formulario
                  input={inputs.map((inputs, index) => ({
                    type: inputs.type,
                    placeholder: inputs.placeholder,
                    checked: inputs.checked,
                    value: formValues[index],
                    style: {
                      display: inputs.type === "checkbox" ? "flex" : "",
                    },
                    onChange: (e: ChangeEvent<HTMLInputElement>) => {
                      if (inputs.type == "checkbox") {
                        setChecked(e.target.checked);
                        return;
                      }
                      HandleChange(index, (e.target as HTMLInputElement).value);
                    },
                  }))}
                  label="Marque como administrador"

                  button={[
                    {
                      type: "submit",
                      className: valid === false ? "disabled" : "primary",
                      disabled: !valid || loading,
                      children: loading ? "Atualizando..." : "Atualizar",
                      onClick: HandleSubmit,
                    },
                  ]}
                  msg={HandleMensagem()}
                />
              </Grid>
              <Grid>
                <StyledNavLink to="/CadastroI">
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

export default Atualizar;
