import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import FitListItem from "../components/FitListItem";
import {} from "@react-navigation/native";

import FitScreen from "../components/FitScreen";
import fitcolors from "../config/fitcolors";
import FitButton from "../components/FitButton";
import workoutsApi from "../api/workouts";

const workoutsOld = [
  {
    id: 1,
    title: "Thor Workout",
    subTitle: "Build muscle like the God of Thunder.",
    flagTitle: "Active Workout",
    listImage: require("../assets/thor.jpg"),
    mainImage: require("../assets/thor_horizontal.jpg"),
    days: [
      {
        day: "Monday",
        muscleGroups: "Chest, Back & Abs",
        exercises: [
          {
            order: "1",
            name: "Barbell Bench Press",
            url: "https://www.muscleandstrength.com/exercises/barbell-bench-press.html",
            sets: "5",
            reps: "12, 12, 10, 8, 6",
          },
          {
            order: "2",
            name: "Dumbbell Fly",
            url: "https://www.muscleandstrength.com/exercises/dumbbell-flys.html",
            sets: "4",
            reps: "12",
          },
          {
            order: "3",
            name: "Bent-Over Row",
            url: "https://www.muscleandstrength.com/exercises/bent-over-barbell-row.html",
            sets: "4",
            reps: "12",
          },
          {
            order: "4",
            name: "Hammer Strength Row",
            url: "https://www.muscleandstrength.com/exercises/machine-row.html",
            sets: "4",
            reps: "12",
          },
          {
            order: "5",
            name: "Weighted Pullup",
            url: "https://www.muscleandstrength.com/exercises/pull-up",
            sets: "5",
            reps: "15, 12, 10, 10, 8",
          },
          {
            order: "6",
            name: "Weighted Dip",
            url: "https://www.muscleandstrength.com/exercises/weighted-chest-dip.html",
            sets: "5",
            reps: "15, 12, 10, 10, 8",
          },
          {
            order: "7a",
            name: "Plank",
            url: "https://www.muscleandstrength.com/exercises/hover.html",
            sets: "1-3",
            reps: "60 seconds",
          },
          {
            order: "7b",
            name: "Cable Crunch",
            url: "https://www.muscleandstrength.com/exercises/cable-crunch.html",
            sets: "1-3",
            reps: "12-15",
          },
          {
            order: "7c",
            name: "Sit Up",
            url: "https://www.muscleandstrength.com/exercises/sit-up.html",
            sets: "1-3",
            reps: "12-15",
          },
          {
            order: "7d",
            name: "Reverse Crunch",
            url: "",
            sets: "1-3",
            reps: "12-15",
          },
          {
            order: "7e",
            name: "Hanging Leg Raise",
            url: "https://www.muscleandstrength.com/exercises/hanging-leg-raise.html",
            sets: "1-3",
            reps: "12-15",
          },
          {
            order: "7f",
            name: "Oblique Crunch",
            url: "https://www.muscleandstrength.com/exercises/side-crunch.html",
            sets: "1-3",
            reps: "12-15 each side",
          },
        ],
      },
      {
        day: "Tuesday",
        muscleGroups: "Legs",
        exercises: [
          {
            order: "1",
            name: "Barbell Squat",
            url: "https://www.muscleandstrength.com/exercises/squat.html",
            sets: "5",
            reps: "10, 8, 8, 6, 4",
          },
          {
            order: "2",
            name: "Stiff-Legged Deadlift",
            url: "https://www.muscleandstrength.com/exercises/stiff-leg-deadlift-aka-romanian-deadlift.html",
            sets: "4",
            reps: "12",
          },
          {
            order: "3",
            name: "Hamstring Curls",
            url: "https://www.muscleandstrength.com/exercises/leg-curl.html",
            sets: "3",
            reps: "20",
          },
          {
            order: "4",
            name: "Leg Extension",
            url: "https://www.muscleandstrength.com/exercises/leg-extension.html",
            sets: "3",
            reps: "20",
          },
          {
            order: "5",
            name: "Seated Leg Curl",
            url: "https://www.muscleandstrength.com/exercises/seated-leg-curl",
            sets: "3",
            reps: "20",
          },
        ],
      },
      {
        day: "Wednesday",
        muscleGroups: "Abs & Arms",
        exercises: [
          {
            order: "1",
            name: "Weighted Chin Up",
            url: "https://www.muscleandstrength.com/exercises/chin-up.html",
            sets: "5",
            reps: "15, 12, 10, 10, 8",
          },
          {
            order: "2",
            name: "Barbell Curls",
            url: "https://www.muscleandstrength.com/exercises/seated-barbell-curl.html",
            sets: "3",
            reps: "10",
          },
          {
            order: "3",
            name: "Hammer Curls",
            url: "https://www.muscleandstrength.com/exercises/standing-hammer-curl.html",
            sets: "3",
            reps: "10",
          },
          {
            order: "4",
            name: "Cable Tricep Extensions",
            url: "https://www.muscleandstrength.com/exercises/tricep-extension.html",
            sets: "3",
            reps: "10",
          },
          {
            order: "5",
            name: "Barbell French Press",
            url: "https://www.muscleandstrength.com/exercises/french-press.html",
            sets: "3",
            reps: "10",
          },
          {
            order: "6a",
            name: "Plank",
            url: "https://www.muscleandstrength.com/exercises/hover.html",
            sets: "1-3",
            reps: "60 seconds",
          },
          {
            order: "6b",
            name: "Cable Crunch",
            url: "https://www.muscleandstrength.com/exercises/cable-crunch.html",
            sets: "1-3",
            reps: "12-15",
          },
          {
            order: "6c",
            name: "Sit Up",
            url: "https://www.muscleandstrength.com/exercises/sit-up.html",
            sets: "1-3",
            reps: "12-15",
          },
          {
            order: "6d",
            name: "Reverse Crunch",
            url: "",
            sets: "1-3",
            reps: "12-15",
          },
          {
            order: "6e",
            name: "Hanging Leg Raise",
            url: "https://www.muscleandstrength.com/exercises/hanging-leg-raise.html",
            sets: "1-3",
            reps: "12-15",
          },
          {
            order: "6f",
            name: "Oblique Crunch",
            url: "https://www.muscleandstrength.com/exercises/side-crunch.html",
            sets: "1-3",
            reps: "12-15 each side",
          },
        ],
      },
      {
        day: "Thursday",
        muscleGroups: "Chest, Shoulders & Back",
        exercises: [
          {
            order: "1",
            name: "Barbell Bench Press",
            url: "https://www.muscleandstrength.com/exercises/barbell-bench-press.html",
            sets: "5",
            reps: "12, 12, 10, 8, 6",
          },
          {
            order: "2",
            name: "Dumbbell Fly",
            url: "https://www.muscleandstrength.com/exercises/dumbbell-flys.html",
            sets: "4",
            reps: "12",
          },
          {
            order: "3",
            name: "Bent-Over Row",
            url: "https://www.muscleandstrength.com/exercises/bent-over-barbell-row.html",
            sets: "4",
            reps: "12",
          },
          {
            order: "4",
            name: "Bent-Over Lateral Raise",
            url: "https://www.muscleandstrength.com/exercises/bent-over-dumbbell-reverse-fly.html",
            sets: "3",
            reps: "15",
          },
          {
            order: "5",
            name: "Dumbbell Shoulder Press",
            url: "https://www.muscleandstrength.com/exercises/seated-dumbbell-press.html",
            sets: "5",
            reps: "15, 12, 10, 10, 8",
          },
          {
            order: "6",
            name: "Lateral Raise",
            url: "https://www.muscleandstrength.com/exercises/dumbbell-lateral-raise.html",
            sets: "4",
            reps: "12",
          },
          {
            order: "7",
            name: "Front Raise",
            url: "https://www.muscleandstrength.com/exercises/dumbbell-front-raise.html",
            sets: "4",
            reps: "12",
          },
        ],
      },
      {
        day: "Friday",
        muscleGroups: "Legs & Abs",
        exercises: [
          {
            order: "1",
            name: "Barbell Squat",
            url: "https://www.muscleandstrength.com/exercises/squat.html",
            sets: "5",
            reps: "10, 8, 8, 6, 4",
          },
          {
            order: "2",
            name: "Stiff-Legged Deadlifts",
            url: "https://www.muscleandstrength.com/exercises/stiff-leg-deadlift-aka-romanian-deadlift.html",
            sets: "4",
            reps: "12",
          },
          {
            order: "3",
            name: "Hamstring Curls",
            url: "https://www.muscleandstrength.com/exercises/leg-curl.html",
            sets: "3",
            reps: "20",
          },
          {
            order: "4",
            name: "Leg Extension",
            url: "https://www.muscleandstrength.com/exercises/leg-extension.html",
            sets: "3",
            reps: "20",
          },
          {
            order: "5",
            name: "Seated Leg Curl",
            url: "https://www.muscleandstrength.com/exercises/seated-leg-curl",
            sets: "3",
            reps: "20",
          },
          {
            order: "6a",
            name: "Plank",
            url: "https://www.muscleandstrength.com/exercises/hover.html",
            sets: "1-3",
            reps: "60 seconds",
          },
          {
            order: "6b",
            name: "Cable Crunch",
            url: "https://www.muscleandstrength.com/exercises/cable-crunch.html",
            sets: "1-3",
            reps: "12-15",
          },
          {
            order: "6c",
            name: "Sit Up",
            url: "https://www.muscleandstrength.com/exercises/sit-up.html",
            sets: "1-3",
            reps: "12-15",
          },
          {
            order: "6d",
            name: "Reverse Crunch",
            url: "",
            sets: "1-3",
            reps: "12-15",
          },
          {
            order: "6e",
            name: "Hanging Leg Raise",
            url: "https://www.muscleandstrength.com/exercises/hanging-leg-raise.html",
            sets: "1-3",
            reps: "12-15",
          },
          {
            order: "6f",
            name: "Oblique Crunch",
            url: "https://www.muscleandstrength.com/exercises/side-crunch.html",
            sets: "1-3",
            reps: "12-15 each side",
          },
        ],
      },
    ],
  },
];

function FitHomeScreen({ navigation }) {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    loadWorkouts();
  }, []);

  const loadWorkouts = async () => {
    console.log("loading workouts");
    const response = await workoutsApi.getWorkouts();
    if (response.ok) {
      setWorkouts(response.data);
    }
  };

  return (
    <FitScreen style={styles.screen}>
      <FlatList
        data={workouts}
        keyExtractor={(workout) => workout._id}
        renderItem={({ item }) => (
          <FitListItem
            title={item.title}
            subTitle={item.subTitle}
            flagTitle={item.flagTitle}
            image={item.listImage}
            onPress={() => navigation.navigate("WorkoutDetails", item)}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        style={styles.list}
      />
      <FitButton
        style={styles.button}
        color="secondary"
        title="Add Workout"
        onPress={() => navigation.navigate("WorkoutAdd")}
      />
    </FitScreen>
  );
}

const styles = StyleSheet.create({
  button: {},
  list: {
    flexGrow: 0,
  },
  screen: {
    backgroundColor: fitcolors.light,
  },
});

export default FitHomeScreen;
