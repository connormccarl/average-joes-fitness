import React, { useState } from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";
import moment from "moment";
import { AntDesign } from "@expo/vector-icons";

import FitCalendarBarDay from "./FitCalendarBarDay";
import FitText from "../FitText";

function FitCalendarBar({ currDay, days, onPressLeft, onPressRight }) {
  // handle navigation within the current day view
  if (currDay >= 0 && currDay <= 7) {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={onPressLeft} style={styles.icon}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableHighlight>
        {days.map((date, index) => {
          return (
            <FitCalendarBarDay
              day={date.format("ddd")}
              date={date.format("D")}
              currDay={currDay}
              index={index}
            />
          );
        })}
        <TouchableHighlight onPress={onPressRight} style={styles.icon}>
          <AntDesign name="right" size={24} color="black" />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  icon: {
    alignSelf: "center",
  },
});

export default FitCalendarBar;
