import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function FitProgressScreen(props) {
  return (
    <>
      <Text style={styles.title}>Average Joe's Fitness</Text>

      <View style={styles.calendarNav}>
        <AntDesign name="left" size={24} color="black" />
        <Text>April 2022</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>
      <View styles={styles.calendarHeading}>
        <Text>Sun</Text>
        <Text>Mon</Text>
        <Text>Tue</Text>
        <Text>Wed</Text>
        <Text>Thu</Text>
        <Text>Fri</Text>
        <Text>Sat</Text>
      </View>
      <View></View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    textTransform: "uppercase",
  },
  calendarNav: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  calendarHeading: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
});

export default FitProgressScreen;
