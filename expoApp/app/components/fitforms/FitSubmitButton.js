import React from "react";
import { useFormik, useFormikContext } from "formik";

import FitButton from "../FitButton";

function FitSubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <FitButton title={title} onPress={handleSubmit} />;
}

export default FitSubmitButton;
