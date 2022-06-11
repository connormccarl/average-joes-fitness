import React from "react";
import { View, StyleSheet } from "react-native";
import moment from "moment";

import FitText from "../FitText";
import fitcolors from "../../config/fitcolors";

function FitCalendarGridDay({ date, inCurrentMonth, isToday }) {
  return (
    <View style={[styles.container, !inCurrentMonth && styles.outOfMonth]}>
      <FitText style={[styles.date, isToday && styles.today]}>
        {date.date()}
      </FitText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: fitcolors.secondary,
    borderBottomWidth: 1,
  },
  outOfMonth: {
    opacity: 0.5,
  },
  date: {
    padding: 5,
  },
  today: {
    color: fitcolors.secondary,
    fontWeight: "bold",
  },
});

export default FitCalendarGridDay;
