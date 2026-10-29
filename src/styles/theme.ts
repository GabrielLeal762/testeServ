import { Theme } from "styled-components";

export const lighThemes: Theme = {
  appBackground: "#e03333",
  appBackgroundBanner: "url(BielBannerWhite.png)",
  appColor: "#000",
  appDefaultStroke: "#E0E0E0",
  appLogo: "url(BielServ.png)",
  appSkeletomFrom: "#060B26",
  appSkeletomTo: "#21497D",
  background: "url(photo.avif)",
  buttons: {
    alert: "#E80000",
    alertColor: "#FFF",
    alertHover: "#D80000",
    disabled: "#CCCCCC",
    disabledColor: "#666666",
    primary: "#0C70F2",
    primaryColor: "#FFF",
    primaryHover: "#0061DE",
  },
  card: {
    alert: "#E80000",
    background: "#FFF",
    border: "#E0E0E0",
    success: "#008000",
    warning: "#F7A300",
  },
  textInput: {
    active: "#FFF",
    activeColor: "#000",
    borderColor: "#E0E0E0",
    disabled: "#EEE",
    disabledBorderColor: "#E0E0E0",
    disabledColor: "#666",
    placeholderColor: "#dbd8d8",
  },
  typographies: {
    error: "#FF0202",
    subtitle: "#828282",
    success: "#008000",
  },
};

export const darkTheme: Theme = {
  // Fundo geral
  appBackground: "#0D1117",

  // Banner / área secundária
  appBackgroundBanner: "#161B22",

  // Texto principal
  appColor: "#E5E7EB",

  // Bordas gerais
  appDefaultStroke: "#1F2937",

  // Logo
  appLogo: "url(BielServ.png)",

  // Skeleton
  appSkeletomFrom: "#161B22",
  appSkeletomTo: "#1F2937",

  // Background
  background: "url(photo.avif)",

  // Botões
  buttons: {
    // Erro / alerta
    alert: "#EF4444",
    alertColor: "#FFFFFF",
    alertHover: "#DC2626",

    // Desabilitado
    disabled: "#1F2937",
    disabledColor: "#6B7280",

    // Principal
    primary: "#3B82F6",
    primaryColor: "#FFFFFF",
    primaryHover: "#60A5FA",
  },

  // Cards
  card: {
    alert: "#EF4444",
    background: "#161B22",
    border: "#1F2937",
    success: "#10B981",
    warning: "#F59E0B",
  },

  // Inputs
  textInput: {
    // Fundo do input
    active: "#161B22",

    // Texto digitado
    activeColor: "#E5E7EB",

    // Borda normal
    borderColor: "#1F2937",

    // Input desabilitado
    disabled: "#111827",
    disabledBorderColor: "#1F2937",
    disabledColor: "#6B7280",

    // Placeholder
    placeholderColor: "#9CA3AF",
  },

  // Tipografia
  typographies: {
    error: "#EF4444",
    subtitle: "#9CA3AF",
    success: "#10B981",
  },
};
