import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";

import FitButton from "../components/FitButton";
import FitLogo from "../components/FitLogo";
import fitstyles from "../config/fitstyles";

function FitWelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/fit-weight-room.jpg")}
    >
      <View style={styles.logoContainer}>
        <FitLogo title="Average Joe's Fitness" color="white" />
      </View>
      <View style={styles.buttonContainer}>
        <FitButton
          title="Login"
          color="secondary"
          onPress={() => navigation.navigate("Login")}
        />
        <FitButton title="Register" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    marginBottom: 50,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignSelf: "center",
    backgroundColor: fitstyles.colors.black,
    opacity: 0.8,
    width: "100%",
    paddingBottom: 30,
  },
});

export default FitWelcomeScreen;
