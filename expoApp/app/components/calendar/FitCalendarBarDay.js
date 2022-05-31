import React from "react";
import { StyleSheet, View, Text } from "react-native";

import fitcolors from "../../config/fitcolors";
import FitText from "../FitText";

function FitCalendarBarDay({ day, date, currDay, index }) {
  if (currDay == index) {
    return (
      <View style={[styles.container, styles.currDay]}>
        <FitText style={styles.day}>{day}</FitText>
        <FitText>{date}</FitText>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <FitText style={styles.day}>{day}</FitText>
        <FitText>{date}</FitText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 5,
  },
  currDay: {
    borderColor: fitcolors.secondary,
    borderWidth: 1,
    borderRadius: 5,
  },
  day: {
    fontWeight: "500",
  },
});

export default FitCalendarBarDay;
