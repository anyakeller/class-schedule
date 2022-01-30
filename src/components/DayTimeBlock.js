import { convertTime } from "../utils/TimeHandling.js";
const { Interval } = require("luxon");

function DayTimeBlock(props) {
  const startTime = convertTime(props.sectionData.logistics.start);
  const stopTime = convertTime(props.sectionData.logistics.stop);
  const dayStart = startTime.startOf("day").plus({ hours: 7 });
  var timeInterval = Interval.fromDateTimes(startTime, stopTime);

  // how many minutes from 7 am
  var sevenToStartTime = startTime.diff(dayStart, "minutes").as("minutes");
  var minutesLong = stopTime.diff(startTime, "minutes").as("minutes");

  const blockTopPercent = (100 * sevenToStartTime) / 5 / 180;
  const blockHeightPercent = (100 * minutesLong) / 5 / 180;

  return (
    <div
      style={{
        width: "100%",
        height: `${blockHeightPercent}%`,
        top: `${blockTopPercent}%`,
        backgroundColor: `#${props.sectionData.color}`,
        position: "absolute",
        fontSize: ".6rem",
        lineHeight: "1.2em"
      }}
      className="text-white">
      {props.sectionData.courseName}
    </div>
  );
}

export default DayTimeBlock;
