import React from "react";
import { StyleSheet, View, Text } from "react-native";

import fitcolors from "../config/fitcolors";

function FitWorkoutItem({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.title}</Text>
      </View>
      {item.type === "reps" && (
        <View style={styles.repsContainer}>
          <View style={styles.reps}>
            <Text style={styles.repsText}>{item.sets}</Text>
            <Text style={styles.repsSubText}>sets</Text>
          </View>
          <View>
            <Text style={[styles.repsText, { marginTop: -15 }]}>x</Text>
          </View>
          <View style={styles.reps}>
            <Text style={styles.repsText}>{item.reps}</Text>
            <Text style={styles.repsSubText}>reps</Text>
          </View>
        </View>
      )}
      {item.type === "time" && (
        <View style={styles.timeContainer}>
          <Text style={styles.repsText}>{item.time}</Text>
          <Text style={[styles.repsSubText, { paddingLeft: 5 }]}>
            {item.interval}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 2,
    paddingBottom: 2,
  },
  textContainer: {
    flex: 3,
    borderBottomColor: fitcolors.secondary,
    borderBottomWidth: 1,
    height: 30,
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    paddingLeft: 5,
  },
  timeContainer: {
    width: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
    height: 30,
    paddingTop: 2,
    marginBottom: 15,
  },
  repsContainer: {
    width: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    marginTop: 5,
    marginLeft: 5,
  },
  reps: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  repsText: {
    fontSize: 20,
    fontWeight: "400",
  },
  repsSubText: {
    color: fitcolors.primary,
  },
});

export default FitWorkoutItem;
