import {
  Formulario,
  StyledNavText,
  StyledNavLink,
  StyledBackgound,
  StyledLogo,
} from "@/Componentes";

import { type ChangeEvent, useState } from "react";
import { UseValidation } from "@/hooks";

import { Grid, Box, Container } from "@mui/material";
import Rem from "@/utils/pxToRem";

// Redux
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/redux";
import { setStateProfile } from "@/redux/slices/createProfile";

function Registration() {
  const dispatch = useDispatch();
  const [check, setChecked] = useState<boolean>(false);

  const step1Form = [
    {
      type: "text",
      placeholder: "Nome",
      required: true,
    },
    {
      type: "email",
      placeholder: "Email",
      required: true,
    },
    {
      type: "checkbox",
      checked: check,
    },
  ];

  const { email } = useSelector((state: RootState) => state.createProfile);

  const {
    HandleChange: HandleStep1,
    valid: step1Valid,
    formValues: step1FormValues,
  } = UseValidation(step1Form);

  const ChangeStep1 = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(
      setStateProfile({
        email: String(step1FormValues[1]),
      }),
    );
  };

  // FORM 2
  const step2Form = [
    {
      type: "password",
      placeholder: "Senha",
      required: true,
    },
  ];

  const {
    HandleChange: HandleStep2,
    valid: step2Valid,
    formValues: step2FormValues,
  } = UseValidation(step2Form);

  const ChangeStep2 = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  const StepInputsRender = email ? step2Form : step1Form;
  const currentStepValid = email ? step2Valid : step1Valid;

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
                <Formulario
                  input={StepInputsRender.map((inputs, index) => ({
                    type: inputs.type,
                    placeholder: inputs.placeholder,
                    value: email
                      ? step2FormValues[index]
                      : step1FormValues[index],
                    onChange: (e: ChangeEvent<HTMLInputElement>) => {
                      if (inputs.type === "checkbox") {
                        setChecked(e.target.checked);
                        return;
                      }

                      const value = e.target.value;

                      if (email) {
                        HandleStep2(index, value);
                      } else {
                        HandleStep1(index, value);
                      }
                    },
                  }))}
                  label="Marque como administrador"
                  button={[
                    {
                      type: "submit",
                      className: currentStepValid ? "primary" : "disabled",
                      disabled: !currentStepValid,
                      children: email ? "Enviar" : "Próximo",
                      onClick: email ? ChangeStep2 : ChangeStep1,
                    },
                  ]}
                  msg={{
                    type: "error",
                    comentario: "",
                  }}
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

export default Registration;
