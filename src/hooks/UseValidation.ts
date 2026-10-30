import type { InputProps } from "@/types/Formulario";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  setUpperPass,
  setNumberPass,
  setQtdCaractere,
  setSpecialCaractere,
} from "@/redux/pass/createPass";

export const UseValidation = (input: InputProps[]) => {
  const [formValues, setFormValues] = useState(
    input.map((inputs) => inputs.value || ""),
  );

  const dispatch = useDispatch();

  // Identifica o campo de senha
  const passwordIndex = input.findIndex((value) => value.type === "password");

  const passwordValue =
    passwordIndex >= 0 ? String(formValues[passwordIndex] ?? "") : "";

  // Validação da senha no Redux
  useEffect(() => {
    if (passwordIndex === -1) return;

    const widthPass = passwordValue.length >= 8 && passwordValue.length <= 16;

    const upperCasePass = /[A-Z]/.test(passwordValue);

    const specialCaracterPass = /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue);

    const numberPass = /\d/.test(passwordValue);

    dispatch(setQtdCaractere({ qtdCaractere: widthPass }));
    dispatch(setUpperPass({ upperPass: upperCasePass }));
    dispatch(
      setSpecialCaractere({
        specialCaractere: specialCaracterPass,
      }),
    );
    dispatch(setNumberPass({ numberPass }));
  }, [passwordValue, passwordIndex, dispatch]);

  // Validação dos campos
  const valid = input.every((value, index) => {
    const valor = String(formValues[index] ?? "");

    if (value.type === "email") {
      return /\S+@\S+\.\S+/.test(valor);
    }

    if (value.type === "password") {
      const widthPass = valor.length >= 8 && valor.length <= 16;

      const upperCasePass = /[A-Z]/.test(valor);

      const specialCaracterPass = /[!@#$%^&*(),.?":{}|<>]/.test(valor);

      const numberPass = /\d/.test(valor);

      return widthPass && upperCasePass && specialCaracterPass && numberPass;
    }

    return true;
  });

  // Atualiza os valores dos campos
  const HandleChange = useCallback((index: number, value: string) => {
    setFormValues((prevValue) => {
      const newValue = [...prevValue];
      newValue[index] = value;
      return newValue;
    });
  }, []);

  return {
    HandleChange,
    valid,
    formValues,
    setFormValues,
  };
};
