import React, { useState } from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import * as Yup from "yup";
import { Formik, Form, FieldArray } from "formik";

import FitScreen from "../components/FitScreen";
import {
  FitAppForm,
  FitAppFormField,
  FitAppFormPicker,
  FitSubmitButton,
} from "../components/fitforms";
import FitButton from "../components/FitButton";
import FitTextInput from "../components/FitTextInput";
import FitText from "../components/FitText";
import fitcolors from "../config/fitcolors";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

function onSubmit(fields) {
  // display form field values on success
  alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
}

const initialValues = {
  workoutName: "",
  workoutDesc: "",
  days: [
    {
      dayNumber: 1,
      daysOfTheWeek: [],
      exercises: [
        {
          exerciseName: "",
        },
      ],
    },
  ],
};

const daysOfTheWeek = [
  {
    name: "Sun",
    used: false,
  },
  {
    name: "Mon",
    used: false,
  },
  {
    name: "Tue",
    used: false,
  },
  {
    name: "Wed",
    used: false,
  },
  {
    name: "Thu",
    used: false,
  },
  {
    name: "Fri",
    used: false,
  },
  {
    name: "Sat",
    used: false,
  },
];

function ListingEditScreen(props) {
  return (
    <FitScreen style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, values, touched, setValues }) => (
          <>
            <FitButton style="secondary" title="Delete" />
            <FitButton style="secondary" title="Save" />
            <FitTextInput name="workoutName" />
            <FitTextInput name="workoutDesc" />
            <FieldArray name="days">
              <View>
                {values.days.length > 0 &&
                  values.days.map((day, index) =>
                    daysOfTheWeek.map((dayOfTheWeek) => (
                      <View>
                        <TouchableHighlight
                          onPress={() =>
                            (daysOfTheWeek[dayOfTheWeek].used = true)
                          }
                        >
                          <FitText
                            style={{
                              color: dayOfTheWeek.used
                                ? fitcolors.secondary
                                : "",
                            }}
                          >
                            {dayOfTheWeek.name}
                          </FitText>
                        </TouchableHighlight>
                      </View>
                    ))
                  )}
              </View>
            </FieldArray>
          </>
        )}
      </Formik>
    </FitScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  btnNormal: {
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 10,
    height: 30,
    width: 100,
  },
  btnPress: {
    borderColor: "blue",
    borderWidth: 1,
    height: 30,
    width: 100,
  },
});

export default ListingEditScreen;
