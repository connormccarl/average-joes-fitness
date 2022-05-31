import React from "react";

import FitScreen from "../components/FitScreen";
import FitCalendarGrid from "../components/calendar/FitCalendarGrid";

function FitProgressScreen(props) {
  return (
    <FitScreen>
      <FitCalendarGrid />
    </FitScreen>
  );
}

export default FitProgressScreen;
