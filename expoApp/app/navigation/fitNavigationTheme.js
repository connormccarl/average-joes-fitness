import { DefaultTheme } from "@react-navigation/native";
import fitcolors from "../config/fitcolors";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: fitcolors.secondary,
    background: fitcolors.white,
  },
};
