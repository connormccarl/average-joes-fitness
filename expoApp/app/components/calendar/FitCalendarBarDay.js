import React from "react";
import { StyleSheet, View, Text } from "react-native";

import fitcolors from "../../config/fitcolors";
import FitText from "../FitText";

function FitCalendarBarDay({ date, isSelected, inCurrentMonth }) {
  return (
    <View
      style={[
        styles.container,
        isSelected && styles.selected,
        !inCurrentMonth && styles.outOfMonth,
      ]}
    >
      <FitText style={styles.day}>{date.format("ddd")}</FitText>
      <FitText>{date.format("D")}</FitText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 5,
  },
  outOfMonth: {
    opacity: 0.5,
  },
  selected: {
    borderColor: fitcolors.secondary,
    borderWidth: 1,
    borderRadius: 5,
  },
  day: {
    fontWeight: "500",
  },
});

export default FitCalendarBarDay;
