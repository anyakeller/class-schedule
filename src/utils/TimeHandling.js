const { DateTime } = require("luxon");
const { Interval } = require("luxon");

// Converts h:mma e.g. 8:30am
// To luxon DateTime
// timeString ""
function convertTime(timeString) {
  var d = DateTime.fromFormat(timeString, "h:mma");
  return d;
}

// Converts start time and a stop time
// Outputs {top: css top position percentage, height: css height percentage }
// For grid starting at 7am and ends at 11pm
// 5 minute chunks of time
function getTimeBlockPercentages(start, stop) {
  const startTime = convertTime(start);
  const stopTime = convertTime(stop);
  const dayStart = startTime.startOf("day").plus({ hours: 7 });
  var timeInterval = Interval.fromDateTimes(startTime, stopTime);

  // how many minutes from 7 am
  var sevenToStartTime = startTime.diff(dayStart, "minutes").as("minutes");
  var minutesLong = stopTime.diff(startTime, "minutes").as("minutes");

  return {
    top: `${(100 * sevenToStartTime) / 5 / 180}%`,
    height: `${(100 * minutesLong) / 5 / 180}%`
  };
}

export { convertTime, getTimeBlockPercentages };
