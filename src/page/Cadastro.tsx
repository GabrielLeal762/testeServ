import { Formulario } from "@/Componentes";
import { menssage } from "@/types/Formulario";
import { ChangeEvent } from "react";
import { RequestPost, UseValidation } from "@/hooks";
import { CadastroUsuario, CadastroData } from "@/types";
import { Grid } from "@mui/material";
import { Header, Banner } from "@/Componentes";
import { useState } from "react";
import Rem from "@/utils/pxToRem";

function Cadastro() {
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

  const { data, loading, error, UsePost } = RequestPost<
    CadastroData,
    CadastroUsuario
  >("usuarios");

  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await UsePost({
      nome: String(formValues[0]),
      email: String(formValues[1]),
      password: String(formValues[2]),
      administrador: String(check),
    });
    console.log(data);
  };

  const HandleMensagem = (): menssage => {
    if (!error)
      return { type: "success", comentario: "Cadastro feito com sucesso" };
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
    <>
      <Header />
      <Banner mensagem="Cadastro de Usuário" />
      <Grid
        container
        sx={{ alignItems: "center", display: "flex", flexDirection: "column" }}
      >
        <Grid
          size={{
            xs: 12,
            sm: 10,
            md: 8,
            lg: 6,
          }}
          sx={{
            maxWidth: `${Rem(600)}`,

            display: "flex",
            justifyContent: "center",
          }}
        >
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
                children: loading ? "Enviando..." : "Enviar",
                onClick: HandleSubmit,
              },
            ]}
            msg={HandleMensagem()}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Cadastro;
