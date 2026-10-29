import { Formulario } from "@/Componentes";
import { menssage } from "@/types/Formulario";
import { ChangeEvent } from "react";
import { RequestPost, UseValidation } from "@/hooks";
import { CadastroProduto, CadastroData } from "@/types";
import { Grid } from "@mui/material";
import { Header, Banner } from "@/Componentes";
import Rem from "@/utils/pxToRem";

function CadastroP() {
  const inputs = [
    { type: "text", placeholder: "Nome" },
    { type: "text", placeholder: "Preço" },
    { type: "text", placeholder: "Descrição" },
    { type: "text", placeholder: "Quantidade" },
  ];

  const { HandleChange, valid, formValues } = UseValidation(inputs);

  const { data, loading, error, UsePost } = RequestPost<
    CadastroData,
    CadastroProduto
  >("produtos");

  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await UsePost({
      nome: String(formValues[0]),
      preco: Number(formValues[1]),
      descricao: String(formValues[2]),
      quantidade: Number(formValues[3]),
    });
    console.log(data);
  };

  const HandleMensagem = (): menssage => {
    if (!error)
      return { type: "success", comentario: "Cadastro feito com sucesso" };
    switch (error) {
      case 400:
        return { type: "error", comentario: "Produtos já cadastrados" };

      case 401:
        return {
          type: "error",
          comentario:
            "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais",
        };

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
      <Banner mensagem="Cadastro de Produtos" />
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
              value: formValues[index],
              onChange: (e: ChangeEvent<HTMLInputElement>) => {
                HandleChange(index, (e.target as HTMLInputElement).value);
              },
            }))}
            label=""

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

export default CadastroP;
