import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import fitcolors from "../config/fitcolors";

function FitListItem({ title, subTitle, flagTitle, image, onPress }) {
  return (
    <TouchableHighlight underlayColor={fitcolors.light} onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
          {flagTitle && <Text style={styles.flagTitle}>{flagTitle}</Text>}
        </View>
        <View style={styles.arrow}>
          <AntDesign name="right" size={50} color="black" />
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  arrow: {
    height: 70,
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: fitcolors.white,
  },
  detailsContainer: {
    justifyContent: "center",
  },
  flagTitle: {
    paddingTop: 5,
    textTransform: "uppercase",
    color: fitcolors.secondary,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    fontSize: 17,
    fontStyle: "italic",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
});

export default FitListItem;
