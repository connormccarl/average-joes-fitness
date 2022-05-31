export const Utils = {
  getAWeekofDays: function (date) {
    const days = [];
    const startBound = -date.getDay();
    const endBound = 7 - date.getDay();

    for (let i = lowerBound; i < upperBound; i++) {
      if (i < 0) {
        days.push(date.setDate(date.getDate() - i));
      } else {
        days.push(date.setDate(date.getDate() + i));
      }
    }
  },
};
