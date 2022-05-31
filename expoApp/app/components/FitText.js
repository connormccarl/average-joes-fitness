import { Text } from "react-native";

import fitstyles from "../config/fitstyles";

function FitText({ children, style }) {
  return <Text style={[fitstyles.text, style]}>{children}</Text>;
}

export default FitText;
