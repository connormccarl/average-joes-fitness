import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import FitText from "../FitText";

const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function FitCalendarGrid(props) {
  return (
    <>
      <View style={styles.calendarNav}>
        <AntDesign name="left" size={24} color="black" />
        <FitText style={styles.calendarMonth}>April 2022</FitText>
        <AntDesign name="right" size={24} color="black" />
      </View>
      <View style={styles.calendarHeading}>
        {daysOfTheWeek.map((day, index) => (
          <FitText key={index} style={styles.headingDay}>
            {day}
          </FitText>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    textTransform: "uppercase",
  },
  calendarMonth: {
    textTransform: "uppercase",
    fontWeight: "500",
    marginLeft: 10,
    marginRight: 10,
  },
  calendarNav: {
    flexDirection: "row",
    justifyContent: "center",
  },
  calendarHeading: {
    flexDirection: "row",
    marginTop: 5,
    flex: 1,
    justifyContent: "space-around",
  },
  headingDay: {
    fontWeight: "500",
  },
});

export default FitCalendarGrid;
