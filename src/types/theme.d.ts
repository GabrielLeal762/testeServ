import "styled-components";

declare module "styled-components" {
  export interface Theme {
    appBackground: string;
    appBackgroundBanner: string;
    appColor: string;
    appDefaultStroke: string;
    appLogo: string;
    appSkeletomFrom: string;
    appSkeletomTo: string;
    background: string;
    buttons: {
      alert: string;
      alertColor: string;
      alertHover: string;
      disabled: string;
      disabledColor: string;
      primary: string;
      primaryColor: string;
      primaryHover: string;
    };
    card: {
      alert: string;
      background: string;
      border: string;
      success: string;
      warning: string;
    };
    textInput: {
      active: string;
      activeColor: string;
      borderColor: string;
      disabled: string;
      disabledBorderColor: string;
      disabledColor: string;
      placeholderColor: string;
    };
    typographies: {
      error: string;
      subtitle: string;
      success: string;
    };
  }
}
