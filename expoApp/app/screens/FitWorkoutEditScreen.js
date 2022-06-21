import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
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

function ListingEditScreen(props) {
  const [days, setDays] = useState([]);

  return (
    <FitScreen style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, values, touched, setValues }) => (
          <Form>
            <FitButton style="secondary" title="Delete" />
            <FitButton style="secondary" title="Save" />
            <FitTextInput name="workoutName" />
            <FitTextInput name="workoutDesc" />
            <FieldArray name="days">
              {values.days.length > 0 &&
                values.days.map((day, index) => (
                  <View>
                    <TouchableHighlight
                      onPress={() => console.log("text pressed")}
                      style={({ pressed }) => {
                        pressed ? pressedDayOfWeek : {};
                      }}
                    >
                      <FitText>Sun</FitText>
                    </TouchableHighlight>
                    <TouchableHighlight
                      onPress={() => console.log("text pressed")}
                    >
                      <FitText>Mon</FitText>
                    </TouchableHighlight>
                    <TouchableHighlight
                      onPress={() => console.log("text pressed")}
                    >
                      <FitText>Tue</FitText>
                    </TouchableHighlight>
                    <TouchableHighlight
                      onPress={() => console.log("text pressed")}
                    >
                      <FitText>Wed</FitText>
                    </TouchableHighlight>
                    <TouchableHighlight
                      onPress={() => console.log("text pressed")}
                    >
                      <FitText>Thu</FitText>
                    </TouchableHighlight>
                    <TouchableHighlight
                      onPress={() => console.log("text pressed")}
                    >
                      <FitText>Fri</FitText>
                    </TouchableHighlight>
                    <TouchableHighlight
                      onPress={() => console.log("text pressed")}
                    >
                      <FitText>Sat</FitText>
                    </TouchableHighlight>
                  </View>
                ))}
            </FieldArray>

            <FitText></FitText>
          </Form>
        )}
      </Formik>
      {/* <FitAppForm
        initialValues={{
          workoutName: "",
          workoutDesc: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FitAppFormField
          maxLength={255}
          name="workoutName"
          placeholder="Workout Name"
        />
        <FitAppFormField
          maxLength={255}
          name="workoutDesc"
          placeholder="Workout Description"
        />
        <FitSubmitButton title="Add Day" />
      </FitAppForm> */}
    </FitScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  pressedDayOfWeek: {
    color: fitcolors.secondary,
  },
});

export default ListingEditScreen;
