import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

function FitScreen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

export default FitScreen;
