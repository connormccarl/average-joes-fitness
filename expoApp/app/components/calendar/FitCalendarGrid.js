import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import moment from "moment";

import FitText from "../FitText";
import FitCalendarGridDay from "./FitCalendarGridDay";
import FitDataBlock from "../FitDataBlock";

const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getGrid(monthOffset) {
  // build starting month grid
  let arrayOfDays = [];
  let foundFirstDayOfMonth = false;
  let numDays = 0;

  // add the previous days
  while (true) {
    // add current day no matter what
    arrayOfDays.unshift(moment().add(monthOffset, "M").subtract(numDays, "d"));

    // find first day of the month
    if (moment().add(monthOffset, "M").subtract(numDays, "d").date() === 1) {
      foundFirstDayOfMonth = true;
    }

    // if already found first day of the month and at beginning of that week
    if (
      foundFirstDayOfMonth &&
      moment().add(monthOffset, "M").subtract(numDays, "d").day() === 0
    ) {
      break;
    }

    numDays += 1;
  }

  // add the following days
  numDays = 1;
  for (let i = arrayOfDays.length; i < 42; i++) {
    arrayOfDays.push(moment().add(monthOffset, "M").add(numDays, "days"));
    numDays += 1;
  }

  //console.log(arrayOfDays);
  return arrayOfDays;
}

// handle displaying rows and columns
const numOfColumns = [0, 1, 2, 3, 4, 5, 6];
const numOfRows = [0, 1, 2, 3, 4, 5];

function FitCalendarGrid(props) {
  const [monthOffset, setMonthOffset] = useState(0);

  // ONLY UPDATING AFTER 2nd OnPress event
  const [grid, setGrid] = useState(getGrid(monthOffset));

  const onPressLeft = () => {
    setMonthOffset(monthOffset - 1);
    setGrid(getGrid(monthOffset));
    console.log("left");
  };

  const onPressRight = () => {
    setMonthOffset(monthOffset + 1);
    setGrid(getGrid(monthOffset));
    console.log("right");
  };

  return (
    <>
      <View style={styles.calendarNav}>
        <TouchableHighlight onPress={onPressLeft}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableHighlight>
        <FitText style={styles.calendarMonth}>
          {moment().add(monthOffset, "M").format("MMMM YYYY")}
        </FitText>
        <TouchableHighlight onPress={onPressRight}>
          <AntDesign name="right" size={24} color="black" />
        </TouchableHighlight>
      </View>
      <View style={styles.calendarHeading}>
        {daysOfTheWeek.map((day, index) => (
          <View key={index} style={styles.headingDay}>
            <FitText key={index} style={styles.headingText}>
              {day}
            </FitText>
          </View>
        ))}
      </View>
      <View style={styles.monthGrid}>
        {numOfRows.map((rowIndex) => {
          return (
            <View key={rowIndex} style={styles.monthRow}>
              {numOfColumns.map((colIndex) => {
                console.log("reload: ", grid[7 * rowIndex + colIndex]);
                return (
                  <FitCalendarGridDay
                    key={colIndex}
                    date={grid[7 * rowIndex + colIndex]}
                    inCurrentMonth={
                      grid[7 * rowIndex + colIndex].month() === moment().month()
                        ? 1
                        : 0
                    }
                    isToday={
                      grid[7 * rowIndex + colIndex].format("YYYYMMDD") ===
                      moment().format("YYYYMMDD")
                        ? 1
                        : 0
                    }
                  />
                );
              })}
            </View>
          );
        })}
      </View>
      <View style={styles.dataRow}>
        <FitDataBlock title="154" subtitle="Total Minutes" />
        <FitDataBlock title="10" subtitle="Total Workouts" />
        <FitDataBlock title="4" subtitle="Day Streak" />
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
    marginBottom: 5,
    justifyContent: "space-around",
  },
  dataRow: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  headingDay: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
  headingText: {
    fontWeight: "500",
  },
  monthRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default FitCalendarGrid;
