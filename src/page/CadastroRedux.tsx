import {
  Formulario,
  StyledNavText,
  StyledNavLink,
  StyledBackgound,
  StyledLogo,
} from "@/Componentes";

import { ChangeEvent, useEffect } from "react";
import { RequestPost, UseValidation } from "@/hooks";
import { Grid, Box, Container } from "@mui/material";
import { useState } from "react";
import Rem from "@/utils/pxToRem";
import { CadastroUsuario, CadastroData } from "@/types";

//REDUX

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux";

import { setStateProfile, setMenssage } from "@/redux/slices/createProfile";
import { useNavigate } from "react-router-dom";
import { menssage } from "@/types/Formulario";

function Registration() {
  const dispatch = useDispatch();

  const { email } = useSelector((state: RootState) => state.createProfile);

  const { qtdCaractere, numberPass, specialCaractere, upperPass } = useSelector(
    (state: RootState) => state.createPass,
  );

  const [check, setChecked] = useState(false);

  //FormStep1
  const step1Form = [
    { type: "text", placeholder: "Nome", required: true },
    { type: "email", placeholder: "Email", required: true },
    {
      type: "checkbox",
      checked: check,
    },
  ];

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(
      setStateProfile({
        email: String(step1FormValue[1]),
      }),
    );
  };
  const {
    HandleChange: Handle1,
    valid: step1Valid,
    formValues: step1FormValue,
  } = UseValidation(step1Form);

  //FormStep2

  const step2Form = [
    { type: "password", placeholder: "Senha", required: true },
  ];

  const {
    HandleChange: Handle2,
    valid: step2Valid,
    formValues: step2FormValue,
  } = UseValidation(step2Form);

  const { data, loading, error, UsePost } = RequestPost<
    CadastroData,
    CadastroUsuario
  >("usuarios");

  const navigate = useNavigate();
  const handleStep2 = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await UsePost({
      nome: String(step1FormValue[0]),
      email: String(step1FormValue[1]),
      password: String(step2FormValue[0]),
      administrador: String(check),
    });
    console.log(data);
    if (result.success) {
      return navigate("/", { replace: true });
    } else {
      dispatch(setStateProfile({ email: "" }));
    }
  };

  useEffect(() => {
    if (data !== null) {
      dispatch(setMenssage("Cadastro feito com sucesso"));
    }
  }, [data]);
  const HandleMensage = (): menssage => {
    if (!error) {
      return { type: "success", comentario: "Cadastro feito com sucesso" };
    } else if (error == 400) {
      return { type: "error", comentario: "Email e senha já cadastrados" };
    } else {
      return { type: "error", comentario: "Error não reconhecido" };
    }
  };

  const handleStepInputs = email ? step2Form : step1Form;

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

              {email && (
                <Grid>
                  <p style={{ marginBottom: 5 }}>Sua senha deve ter:</p>
                  <ul>
                    <li
                      style={{
                        marginBottom: 5,
                        color: qtdCaractere ? "green" : "",
                      }}
                    >
                      Entre 8 e 16 caracteres
                    </li>
                    <li
                      style={{
                        marginBottom: 5,
                        color: upperPass ? "green" : "",
                      }}
                    >
                      Possuir pelo menos uma letra maiúscula
                    </li>
                    <li
                      style={{
                        marginBottom: 5,
                        color: numberPass ? "green" : "",
                      }}
                    >
                      Possuir pelo menos um número
                    </li>
                    <li
                      style={{
                        marginBottom: 5,
                        color: specialCaractere ? "green" : "",
                      }}
                    >
                      Possuir pelo menos um caractere especial
                    </li>
                  </ul>
                </Grid>
              )}

              <Grid>
                <Formulario
                  input={handleStepInputs.map((input, index) => ({
                    type: input.type,
                    placeholder: input.placeholder,
                    required: input.required,

                    value: email
                      ? step2FormValue[index] || ""
                      : step1FormValue[index] || "",
                    onChange: (e: ChangeEvent<HTMLInputElement>) => {
                      if (input.type == "checkbox") {
                        setChecked(e.target.checked);
                        return;
                      }
                      email
                        ? Handle2(index, (e.target as HTMLInputElement).value)
                        : Handle1(index, (e.target as HTMLInputElement).value);
                    },
                  }))}
                  label="Marque como administrador"

                  button={[
                    {
                      type: "submit",
                      className: email
                        ? step2Valid === false
                          ? "disabled"
                          : "primary"
                        : step1Valid === false
                          ? "disabled"
                          : "primary",
                      disabled: email ? !step2Valid || loading : !step1Valid,
                      children: email ? "Enviar" : "Proximo",
                      onClick: email ? handleStep2 : handleStep1,
                    },
                  ]}
                  msg={HandleMensage()}
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

export default Registration;
