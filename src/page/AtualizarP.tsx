import {
  Formulario,
  StyledNavText,
  StyledNavLink,
  StyledBackgound,
  StyledLogo,
} from "@/Componentes";

import type { menssage } from "@/types/Formulario";
import type {
  CadastroUsuario,
  CadastroData,
  ListUsers,
  JWToken,
} from "@/types";

import { type ChangeEvent, useState } from "react";
import { UseValidation, RequestGet, RequestPut } from "@/hooks";
import { Grid, Box, Container } from "@mui/material";
import Rem from "@/utils/pxToRem";

import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { pushName } from "@/redux/Name/nameList";

type Usuario = ListUsers["usuarios"][number];

function FormularioAtualizacao({ usuario }: { usuario: Usuario }) {
  const dispatch = useDispatch();

  const [check, setChecked] = useState<boolean>(
    usuario.administrador === "true",
  );

  const inputs = [
    {
      type: "text",
      placeholder: "Nome",
      value: usuario.nome,
    },
    {
      type: "email",
      placeholder: "Email",
      value: usuario.email,
    },
    {
      type: "password",
      placeholder: "Senha",
      value: usuario.password,
    },
    {
      type: "checkbox",
      checked: check,
    },
  ];

  const { HandleChange, valid, formValues } = UseValidation(inputs);

  const { loading, error, UsePut } = RequestPut<CadastroData, CadastroUsuario>(
    `usuarios/${usuario._id}`,
  );

  const [sucesso, setSucesso] = useState(false);

  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSucesso(false);

    const result = await UsePut({
      nome: String(formValues[0]),
      email: String(formValues[1]),
      password: String(formValues[2]),
      administrador: String(check),
    });

    if (result.success) {
      setSucesso(true);

      dispatch(
        pushName({
          nome: String(formValues[0]),
        }),
      );
    }
  };

  const HandleMensagem = (): menssage => {
    if (error === 400) {
      return {
        type: "error",
        comentario: "Email e senha já cadastrados",
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
      comentario: sucesso ? "Atualização feita com sucesso" : "",
    };
  };

  return (
    <Formulario
      input={inputs.map((input, index) => ({
        type: input.type,
        placeholder: input.placeholder,
        checked: input.type === "checkbox" ? check : undefined,
        value: input.type === "checkbox" ? undefined : formValues[index],
        style: {
          display: input.type === "checkbox" ? "flex" : "",
        },
        onChange: (e: ChangeEvent<HTMLInputElement>) => {
          if (input.type === "checkbox") {
            setChecked(e.target.checked);
            return;
          }

          HandleChange(index, e.target.value);
        },
      }))}
      label="Marque como administrador"
      button={[
        {
          type: "submit",
          className: valid ? "primary" : "disabled",
          disabled: !valid || loading,
          children: loading ? "Atualizando..." : "Atualizar",
          onClick: HandleSubmit,
        },
      ]}
      msg={HandleMensagem()}
    />
  );
}

function Atualizar() {
  const { data: ValorList } = RequestGet<ListUsers>("usuarios");
  const token = Cookies.get("authorization");

  let usuarioEncontrado: Usuario | undefined;

  if (ValorList && token) {
    try {
      const decode = jwtDecode<JWToken>(token);

      usuarioEncontrado = ValorList.usuarios.find(
        (usuario) => usuario.email === decode.email,
      );
    } catch {
      usuarioEncontrado = undefined;
    }
  }

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
                  justifyContent: {
                    sm: "center",
                    xs: "center",
                  },
                }}
              >
                <StyledLogo width={165} height={100} />
              </Grid>

              <Grid>
                {usuarioEncontrado && (
                  <FormularioAtualizacao
                    key={usuarioEncontrado._id}
                    usuario={usuarioEncontrado}
                  />
                )}
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
