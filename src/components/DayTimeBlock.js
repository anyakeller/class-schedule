import { getTimeBlockPercentages } from "../utils/TimeHandling.js";

function DayTimeBlock(props) {
  const [blockTopPercent, blockHeightPercent] = getTimeBlockPercentages(
    props.sectionData.logistics.start,
    props.sectionData.logistics.stop
  );

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
