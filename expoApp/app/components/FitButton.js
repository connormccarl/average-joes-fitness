import { StyleSheet, TouchableOpacity } from "react-native";

import FitText from "./FitText";

import fitstyles from "../config/fitstyles";

function FitButton({ title, color = "primary", onPress, style }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: fitstyles.colors[color] },
        style,
      ]}
      onPress={onPress}
    >
      <FitText style={styles.text}>{title}</FitText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    ...fitstyles.text,
    textTransform: "uppercase",
    color: fitstyles.colors.white,
    fontSize: 22,
  },
});

export default FitButton;
