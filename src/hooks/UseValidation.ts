import type { InputProps } from "@/types/Formulario";
import { useEffect, useState } from "react";
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

  const [valid, setValid] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const Validation = input.every((value, index) => {
      const valor = String(formValues[index] ?? "");

      if (value.type === "email") {
        return /\S+@\S+\.\S+/.test(valor);
      }

      if (value.type === "password") {
        const widthPass = valor.length >= 8 && valor.length <= 16;

        const upperCasePass = /[A-Z]/.test(valor);

        const specialCaracterPass = /[!@#$%^&*(),.?":{}|<>]/.test(valor);

        const numberPass = /\d/.test(valor);

        dispatch(
          setQtdCaractere({
            qtdCaractere: widthPass,
          }),
        );

        dispatch(
          setUpperPass({
            upperPass: upperCasePass,
          }),
        );

        dispatch(
          setSpecialCaractere({
            specialCaractere: specialCaracterPass,
          }),
        );

        dispatch(
          setNumberPass({
            numberPass: numberPass,
          }),
        );

        return widthPass && upperCasePass && specialCaracterPass && numberPass;
      }

      return true;
    });

    setValid(Validation);
  }, [formValues, input, dispatch]);

  const HandleChange = (index: number, value: string) => {
    setFormValues((prevValue) => {
      const newValue = [...prevValue];
      newValue[index] = value;
      return newValue;
    });
  };

  return {
    HandleChange,
    valid,
    formValues,
    setFormValues,
  };
};
