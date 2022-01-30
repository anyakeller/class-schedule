import React from "react";
import { getTimeBlockPercentages } from "../utils/TimeHandling.js";

function TimeBlock(props) {
  let style = props.style ? props.style : {};
  if (props.style) {
    style = { position: "absolute", ...props.style };
  } else {
    style = { position: "absolute" };
  }
  style.width = "100%";
  if (props.start && props.stop) {
    let { top, height } = getTimeBlockPercentages(props.start, props.stop);
    style.top = top;
    style.height = height;
  }

  return (
    <div style={style} className={props.className}>
      {props.children}
    </div>
  );
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
      startStr: props.sectionData.logistics.start,
      stopStr: props.sectionData.logistics.stop,
      style: {
        top: top,
        height: height,
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

// export default DayTimeBlock;
export { TimeBlock, DayTimeBlock };
