import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import FitCalendarBar from "../components/calendar/FitCalendarBar";
import FitButton from "../components/FitButton";
import FitScreen from "../components/FitScreen";
import FitWorkoutItem from "../components/FitWorkoutItem";

const workouts = [
  {
    id: 1,
    title: "Arm Curls",
    type: "reps",
    sets: "4",
    reps: "20",
  },
  {
    id: 2,
    title: "Tricep Extension",
    type: "reps",
    sets: "4",
    reps: "25",
  },
  {
    id: 3,
    title: "Crunches",
    type: "time",
    time: "25",
    interval: "mins",
  },
  {
    id: 4,
    title: "Barbell Press",
    type: "reps",
    sets: "3",
    reps: "15",
  },
  {
    id: 5,
    title: "Flys",
    type: "reps",
    sets: "4",
    reps: "10",
  },
];

function FitWorkoutScreen(props) {
  return (
    <FitScreen image={require("../assets/fit-logo.png")}>
      <FitCalendarBar />
      <FlatList
        data={workouts}
        renderItem={({ item }) => <FitWorkoutItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
      <View style={styles.buttons}>
        <FitButton title="Swap" style={styles.button} />
        <FitButton title="Done" style={styles.button} color="secondary" />
      </View>
    </FitScreen>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  list: {
    flexGrow: 0,
    marginBottom: 10,
  },
});

export default FitWorkoutScreen;
