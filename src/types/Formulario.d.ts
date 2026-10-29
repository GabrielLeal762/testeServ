import type React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export type Buttonprops = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type menssage = {
  type: "success" | "error";
  comentario: string;
};

export interface Formulario {
  input: InputProps[];
  button: Buttonprops[];
  label: string;
  msg: menssage;
}
