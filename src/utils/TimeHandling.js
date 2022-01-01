const { DateTime } = require("luxon");

// timeString ""
function convertTime(timeString) {
  var d = DateTime.fromFormat(timeString, "h:mma");
  // console.log("+" + timeString + "+", d.toFormat("t"));
  return d;
}

export { convertTime };
