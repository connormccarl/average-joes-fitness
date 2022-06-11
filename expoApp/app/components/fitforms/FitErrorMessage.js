import React from "react";
import { StyleSheet } from "react-native";

import FitText from "../FitText";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <FitText style={styles.error}>{error}</FitText>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

export default ErrorMessage;
