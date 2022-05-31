import { StyleSheet, FlatList, View } from "react-native";
import FitListItem from "../components/FitListItem";

import FitScreen from "../components/FitScreen";
import fitcolors from "../config/fitcolors";

const workouts = [
  {
    id: 1,
    title: "Workout #1",
    subTitle: "First workout description.",
    flagTitle: "Active Workout",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Workout #2",
    subTitle: "Second workout description.",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "Workout #3",
    subTitle: "Third workout description.",
    image: require("../assets/mosh.jpg"),
  },
];

function FitHomeScreen(props) {
  return (
    <FitScreen style={styles.screen}>
      <FlatList
        data={workouts}
        keyExtractor={(workout) => workout.id.toString()}
        renderItem={({ item }) => (
          <FitListItem
            title={item.title}
            subTitle={item.subTitle}
            flagTitle={item.flagTitle}
            image={item.image}
            onPress={() => console.log("Workout Pressed")}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </FitScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: fitcolors.light,
  },
});

export default FitHomeScreen;
