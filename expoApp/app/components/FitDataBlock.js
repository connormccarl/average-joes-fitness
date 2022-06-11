import React from "react";
import { View, StyleSheet } from "react-native";

import fitcolors from "../config/fitcolors";
import FitText from "./FitText";

function FitDataBlock({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <FitText style={styles.title}>{title}</FitText>
      <FitText style={styles.subtitle}>{subtitle}</FitText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: fitcolors.secondary,
    alignItems: "center",
    width: "25%",
    borderRadius: 10,
  },
  title: {
    fontSize: 40,
    color: fitcolors.white,
    fontWeight: "500",
  },
  subtitle: {
    color: fitcolors.white,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default FitDataBlock;
