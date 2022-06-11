import React, { useState } from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";
import moment from "moment";
import { AntDesign } from "@expo/vector-icons";

import FitCalendarBarDay from "./FitCalendarBarDay";
import FitText from "../FitText";
import fitcolors from "../../config/fitcolors";

const today = moment();
const startDates = [];
const startBound = -today.day();
const endBound = 7 - today.day();

for (let i = startBound; i < endBound; i++) {
  startDates.push(moment().add(i, "days"));
}

function FitCalendarBar() {
  // days and months stored as integers
  const [selectedDate, setSelectedDate] = useState(moment());
  const [dates, setDates] = useState(startDates);

  // handle navigation
  const onPressLeft = () => {
    // navigating to the prev week
    if (selectedDate.day() - 1 < 0) {
      setDates(dates.map((element) => element.subtract(7, "days")));
      setSelectedDate(dates[6]);
    } else {
      setSelectedDate(dates[selectedDate.day() - 1]);
    }
  };

  const onPressRight = () => {
    // navigating to the next week
    if (selectedDate.day() + 1 > 6) {
      setDates(dates.map((element) => element.add(7, "days")));
      setSelectedDate(dates[0]);
    } else {
      setSelectedDate(dates[selectedDate.day() + 1]);
    }
  };

  return (
    <>
      <View style={styles.monthTitle}>
        <FitText
          style={{
            fontSize: 20,
            fontWeight: "500",
            textTransform: "uppercase",
          }}
        >
          {selectedDate.format("MMMM YYYY")}
        </FitText>
      </View>
      <View style={styles.container}>
        <TouchableHighlight onPress={onPressLeft} style={styles.icon}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableHighlight>
        {dates.map((date, index) => {
          return (
            <FitCalendarBarDay
              key={index}
              date={date}
              isSelected={selectedDate.day() === date.day() ? 1 : 0}
              inCurrentMonth={selectedDate.month() === date.month() ? 1 : 0}
            />
          );
        })}
        <TouchableHighlight onPress={onPressRight} style={styles.icon}>
          <AntDesign name="right" size={24} color="black" />
        </TouchableHighlight>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  icon: {
    alignSelf: "center",
  },
  monthTitle: {
    alignItems: "center",
  },
});

export default FitCalendarBar;
