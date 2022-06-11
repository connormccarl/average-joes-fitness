import React from "react";
import { useFormikContext } from "formik";

import FitTextInput from "../FitTextInput";
import FitErrorMessage from "./FitErrorMessage";

function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <FitTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <FitErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
