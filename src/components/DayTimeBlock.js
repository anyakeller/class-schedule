import React from "react";
import { getTimeBlockPercentages } from "../utils/TimeHandling.js";

function TimeBlock(props) {
  return <div style={props.style} className={props.className}>{props.children}</div>;
}

class DayTimeBlock extends React.Component {
  constructor(props) {
    super(props);
    const { top, height } = getTimeBlockPercentages(
      props.sectionData.logistics.start,
      props.sectionData.logistics.stop
    );
    this.state = {
      sectionData: props.sectionData,
      startStr: props.start,
      stopStr: props.stop,
      style: {
        position: "absolute",
        top: top,
        height: height,
        width: "100%",
        backgroundColor: `#${this.props.sectionData.color}`,
        fontSize: ".6rem",
        lineHeight: "1.2em"
      }
    };
  }
  render() {
    return (
      <TimeBlock style={this.state.style} className="text-white">
        {this.state.sectionData.courseName}
      </TimeBlock>
    );
  }
}

export default DayTimeBlock;
