import React from "react";
import { StyleSheet, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import FitButton from "../components/FitButton";
import FitTextInput from "../components/FitTextInput";
import FitErrorMessage from "../components/FitErrorMessage";
import FitScreen from "../components/FitScreen";
import FitLogo from "../components/FitLogo";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function FitLoginScreen(props) {
  return (
    <FitScreen style={styles.container}>
      <FitLogo style={styles.logo} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <FitTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              onBlur={() => setFieldTouched("email")}
              onChangeText={handleChange("email")}
              placeholder="Email"
              textContentType="emailAddress"
            />
            <FitErrorMessage error={errors.email} visible={touched.email} />
            <FitTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onBlur={() => setFieldTouched("password")}
              onChangeText={handleChange("password")}
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <FitErrorMessage
              error={errors.password}
              visible={touched.password}
            />
            <FitButton color="secondary" title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </FitScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default FitLoginScreen;
