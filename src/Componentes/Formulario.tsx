import { Formulario } from "@/types/Formulario";
import { StyledInput } from "./InputProps";
import { StyledButton } from "./ButtonProps";
import { StyledSpan } from "./typegraphyes";
import Rem from "@/utils/pxToRem";

function Form(props: Formulario) {
  const { input, button, msg, label } = props;

  return (
    <form>
      {input.map((input, index) => {
        if (input.type === "checkbox") {
          return (
            <label
              key={index}
              style={{
                display: "flex",
                alignItems: "left",

                width: "30%",
                cursor: "pointer",
                marginBottom: `${Rem(10)}`,
              }}
            >
              <StyledInput {...input} />

              <StyledSpan>{label}</StyledSpan>
            </label>
          );
        }

        return <StyledInput key={index} {...input} />;
      })}

      {button.map((button, index) => (
        <StyledButton
          style={{ justifyContent: "center" }}
          key={index}
          {...button}
        />
      ))}

      {msg && (
        <StyledSpan
          style={{
            color: msg.type === "success" ? "green" : "red",
          }}
        >
          {msg.comentario}
        </StyledSpan>
      )}
    </form>
  );
}

export default Form;
