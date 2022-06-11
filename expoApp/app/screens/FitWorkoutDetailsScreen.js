import React from "react";
import { StyleSheet, Image, View, ScrollView } from "react-native";
import FitScreen from "../components/FitScreen";

import FitText from "../components/FitText";
import fitcolors from "../config/fitcolors";

function FitWorkoutDetailsScreen({ route }) {
  const workout = route.params;

  return (
    <FitScreen>
      <ScrollView>
        <View>
          <Image source={workout.mainImage} style={styles.image} />
          {workout.flagTitle && (
            <View style={styles.imageOverlay}>
              <FitText style={styles.overlayText}>{workout.flagTitle}</FitText>
            </View>
          )}
        </View>
        <View style={styles.textContainer}>
          <FitText style={styles.title}>{workout.title}</FitText>
          <FitText style={styles.subtitle}>{workout.subTitle}</FitText>
          {workout.days.map((day, index) => {
            return (
              <View key={index}>
                <View style={[styles.row, styles.dayHeadingGroup]}>
                  <FitText style={styles.dayHeading}>{day.day}</FitText>
                  <FitText style={styles.dayHeading}> - </FitText>
                  <FitText style={styles.dayHeading}>
                    {day.muscleGroups}
                  </FitText>
                </View>
                <View style={[styles.row, styles.exerciseHeadingGroup]}>
                  <FitText style={[styles.columnOne, styles.exerciseHeading]}>
                    Exercise
                  </FitText>
                  <FitText style={[styles.columnTwo, styles.exerciseHeading]}>
                    Sets
                  </FitText>
                  <FitText style={[styles.columnThree, styles.exerciseHeading]}>
                    Reps
                  </FitText>
                </View>
                {day.exercises.map((exercise) => (
                  <View style={styles.row}>
                    <FitText style={styles.columnOne}>
                      {exercise.order}. {exercise.name}
                    </FitText>
                    <FitText style={styles.columnTwo}>{exercise.sets}</FitText>
                    <FitText style={styles.columnThree}>
                      {exercise.reps}
                    </FitText>
                  </View>
                ))}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </FitScreen>
  );
}

const styles = StyleSheet.create({
  columnOne: {
    flex: 3,
  },
  columnTwo: {
    flex: 1,
    textAlign: "center",
  },
  columnThree: {
    flex: 2,
    textAlign: "center",
  },
  dayHeading: {
    fontSize: 22,
  },
  dayHeadingGroup: {
    paddingTop: 10,
  },
  exerciseHeading: {
    backgroundColor: fitcolors.secondary,
    marginLeft: -10,
    paddingLeft: 10,
    color: fitcolors.white,
  },
  exerciseHeadingGroup: {
    paddingTop: 5,
    paddingBottom: 10,
  },
  textContainer: {
    paddingLeft: 10,
    paddingTop: 5,
  },
  title: {
    fontSize: 30,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: 300,
  },
  imageOverlay: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 10,
    backgroundColor: fitcolors.white,
  },
  overlayText: {
    color: fitcolors.secondary,
    textTransform: "uppercase",
    opacity: 1,
  },
  row: {
    flexDirection: "row",
  },
  subtitle: {
    alignSelf: "center",
  },
});

export default FitWorkoutDetailsScreen;
