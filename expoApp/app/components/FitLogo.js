import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import fitstyles from "../config/fitstyles";

function FitLogo({ title, size = 250, color }) {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: size, height: size }}
        source={require("../assets/fit-logo.png")}
      />
      {title && <Text style={[styles.text, { color }]}>{title}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    ...fitstyles.text,
    marginTop: 10,
    textTransform: "uppercase",
    fontSize: 35,
    width: 300,
    textAlign: "center",
    fontWeight: "500",
  },
});

export default FitLogo;
