const { DateTime } = require("luxon");

// timeString ""
function convertTime(timeString) {
  var d = DateTime.fromFormat(timeString, "h:mma");
  return d;
}

export { convertTime };
