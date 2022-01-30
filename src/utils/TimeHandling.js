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
// Outputs [css top position percentage, css height percentage ]
// [sevenToStartTime, blockHeightPercent]
// For grid starting at 7am and ends at 11pm
// 5 minute chunks of time
function getTimeBlockPercentages (start, stop){
  const startTime = convertTime(start);
  const stopTime = convertTime(stop);
  const dayStart = startTime.startOf("day").plus({ hours: 7 });
  var timeInterval = Interval.fromDateTimes(startTime, stopTime);

  // how many minutes from 7 am
  var sevenToStartTime = startTime.diff(dayStart, "minutes").as("minutes");
  var minutesLong = stopTime.diff(startTime, "minutes").as("minutes");

  return [(100 * sevenToStartTime) / 5 / 180, (100 * minutesLong) / 5 / 180];
}

export { convertTime, getTimeBlockPercentages };
