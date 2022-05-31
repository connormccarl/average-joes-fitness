import React, { useState } from "react";
import {} from "react-native";
import moment from "moment";
import FitCalendarBar from "./FitCalendarBar";

function FitCalendarBarNav(props) {
  const today = moment(new Date());

  const [currDay, setCurrDay] = useState(today.day());
  //const [days, setDays] = useState([]);

  const days = [];

  const startBound = -today.day();
  const endBound = 7 - today.day();

  for (let i = startBound; i < endBound; i++) {
    if (i < 0) {
      days.push(today.subtract(i, "days"));
    } else {
      days.push(today.add(i, "days"));
    }
  }

  // handle navigation
  const onPressLeft = () => {
    // navigating to the prev week
    //const newDays = days.map((element) => element.subtract(7, "days"));
    if (currDay - 1 < 0) {
      //setDays(days.map((element) => element.subtract(7, "days")));
      setCurrDay(6);
    } else {
      setCurrDay(currDay - 1);
    }
  };

  const onPressRight = () => {
    // navigating to the next week
    //const newDays = days.map((element) => element.add(7, "days"));
    //setDays(newDays);
    if (currDay + 1 > 7) {
      //setDays(days.map((element) => element.add(7, "days")));
      setCurrDay(0);
    } else {
      setCurrDay(currDay + 1);
    }
  };

  return (
    <FitCalendarBar
      currDay={currDay}
      days={days}
      onPressLeft={onPressLeft}
      onPressRight={onPressRight}
    />
  );
}

export default FitCalendarBarNav;
