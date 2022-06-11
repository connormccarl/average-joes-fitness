import { SafeAreaView, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";

function FitScreen({ children, image }) {
  return (
    <>
      <SafeAreaView style={styles.screen}>
        {children}
        <Image source={image} height={10} style={styles.image} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    bottom: 0,
    right: -50,
    height: 370,
    width: 370,
  },
  screen: {
    height: "100%",
    paddingTop: Constants.statusBarHeight,
  },
});

export default FitScreen;
