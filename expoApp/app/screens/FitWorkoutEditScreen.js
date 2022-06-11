import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import FitScreen from "../components/FitScreen";
import {
  FitAppForm,
  FitAppFormField,
  FitAppFormPicker,
  FitSubmitButton,
} from "../components/fitforms";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

function ListingEditScreen(props) {
  return (
    <FitScreen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FitAppFormField maxLength={255} name="title" placeholder="Title" />
        <FitAppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />
        <FitAppFormField
          maxLength={255}
          multiline
          numberOfLines={3}
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </FitScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
